import { useContext, useEffect, useState } from "react";
// import { Link, useLoaderData, useParams } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { BookmarkContext } from "../providers/BookMarksProvider";

const PostDetails = () => {
  //   const data = useLoaderData();
  const { postId } = useParams();
  //   console.log(postId);

  const [posts, setPosts] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [postId]);

  //   const { title, body } = data;
  const { title, body } = posts;

  const { setBookmarks } = useContext(BookmarkContext);

  const handleBookmark = (post) => {
    setBookmarks((prev) => [...prev, post]);
  };

  return (
    <div className="mt-12 space-y-5 px-12">
      <p>Serial No. {postId}</p>
      <h1 className="text-xl font-bold">{title}</h1>
      <p>{body}</p>

      <Link to={`/`} className="btn btn-outline">
        Go Back
      </Link>

      <button
        onClick={() => handleBookmark(posts)}
        className="btn btn-outline ml-3"
      >
        Add to Bookmark
      </button>
    </div>
  );
};

export default PostDetails;
