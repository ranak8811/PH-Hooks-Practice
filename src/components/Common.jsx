import { useParams } from "react-router-dom";

const Common = () => {
  const { page, btn } = useParams();
  console.log(btn);
  return (
    <div>
      {page === "contact" && <p>This is the Contact Page</p>}
      {page === "about" && <p>This is the About Page</p>}

      {btn && <button className="btn btn-outline">Subscribe Us</button>}
    </div>
  );
};

export default Common;
