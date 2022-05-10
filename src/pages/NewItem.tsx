import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import api from "../components/api/posts";

const NewItem = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // const [author, setAuthor] = useState("");
  const [userId, setUserId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [updated, setUpdated] = useState(false);
  //   const history = useHistory();
  async function handleSubmit(e: any) {
    e.preventDefault();
    setIsLoading(true);
    const blog = { title, body, userId };
    console.log(blog);
    try {
      const response = await api.post("/posts", blog);
      setIsLoading(false);
      console.log(response.data);
      setUserId("");
      setTitle("");
      setBody("");
      setUpdated(true);
    } catch (err: any) {
      console.log(`Error: ${err.message}`);
    }
    // fetch("http://localhost:8000/blogs", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(blog),
    // }).then(() => {
    //   console.log("new Blog added");
    //   //   history.push("/");
    // });
  }

  return (
    <div className="create container">
      <h2>Add a New Item!</h2>
      {!updated && (
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">User Id:</label>
          <input
            type="text"
            required
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <label htmlFor="">Title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="">Body:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>

          {!isLoading && <button>Add Item</button>}
          {isLoading && <button disabled>Adding Blog...</button>}
        </form>
      )}
      {updated && (
        <div className="updated">
          <p>Successfully Added!</p>
          <NavLink to={`/`} className="btn btn--create">
            Okay
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default NewItem;
