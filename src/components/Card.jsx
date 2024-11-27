/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Card = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>

        <div className="card-actions justify-end">
          <Link to={`/post/${id}`} className="btn btn-outline">
            View Post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
