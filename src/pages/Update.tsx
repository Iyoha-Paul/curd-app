import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";

import api from "../components/api/posts";
import useFetch from "../components/useFetch";

const Update = () => {
  const { id } = useParams();
  const { data: item, isLoading, error } = useFetch(`${id}`);
  // const temp = item;
  // console.log(item?.title);
  // const { title, userId, body } = temp;
  const [editTitle, setEditTitle] = useState<any>();
  const [editBody, setEditBody] = useState<any>();
  // const [author, setAuthor] = useState("");
  const [editUserId, setEditUserId] = useState<any>();
  const [editIsLoading, setEditIsLoading] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  //   const history = useHistory();
  useEffect(() => {
    setEditTitle(`${item?.title}`);
    setEditBody(item?.body);
    setEditUserId(item?.userId);
    setLoaded(true);
  }, [item]);

  async function handleEdit(id: any) {
    // console.log("response.data");
    setUpdated(false);
    setEditIsLoading(true);

    const updatedItem = { editTitle, editBody, editUserId };
    console.log(updatedItem);
    try {
      const response = await api.put(`/posts/${id}`, updatedItem);
      setEditIsLoading(false);
      setEditUserId("");
      setEditTitle("");
      setEditBody("");
      setUpdated(true);
      setEditIsLoading(false);
    } catch (err: any) {
      console.log(`Error: ${err.message}`);
    }
    // fetch("http://localhost:8000/blogs", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   editBody: JSON.stringify(blog),
    // }).then(() => {
    //   console.log("new Blog added");
    //   //   history.push("/");
    // });
  }

  return (
    <div className="create container">
      <h2>Edit Item!</h2>
      {isLoading && <div className="loading">Loading...</div>}
      {!updated && !isLoading && (
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="">User Id:</label>
          <input
            type="text"
            required
            value={editUserId}
            onChange={(e) => setEditUserId(e.target.value)}
          />
          <label htmlFor="">editTitle:</label>
          <input
            type="text"
            required
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />

          <label htmlFor="">editBody:</label>
          <textarea
            required
            value={editBody}
            onChange={(e) => setEditBody(e.target.value)}
          ></textarea>

          {!editIsLoading && (
            <button
              onClick={() => {
                handleEdit(item?.id);
              }}
            >
              Save Edit
            </button>
          )}
        </form>
      )}
      {editIsLoading && <button disabled>Saving...</button>}
      {updated && (
        <div className="updated">
          <p>Successfully Updated!</p>
          <NavLink to={`/`} className="btn btn--create">
            Back to Homepage
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Update;
