import api from "../components/api/posts";
import React from "react";
import { NavLink, useParams } from "react-router-dom";

// import posts from "../components/api/posts";
import { useState, useEffect } from "react";
import useFetch from "../components/useFetch";

const Item = () => {
  //   const [item, setItem] = useState<any>(null);
  const { id } = useParams();
  //   const [isLoading, setIsLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);

  //   const [error, setError] = useState<any>(null);
  const handleDelete = async (id: any) => {
    try {
      await api.delete(`posts/${id}`);
      setDeleted(true);
      console.log(id);
    } catch (err: any) {
      console.log(`Error: ${err.message}`);
    }
  };
  const { data: item, isLoading, error } = useFetch(`${id}`);

  return (
    <div className="item-details container">
      {isLoading && <div className="loading">Loading...</div>}
      {error && <div>{error}</div>}
      {item && !deleted && (
        <article>
          <h2>{item.title}</h2>
          <em>Writen by user:{item.userId}</em>
          <div>{item.body}</div>
          <div className="btns">
            <button
              onClick={() => {
                handleDelete(item.id);
              }}
              className="btn"
            >
              delete
            </button>
            <NavLink to={`/update/${item.id}`} className="btn">
              Update
            </NavLink>
          </div>
        </article>
      )}
      {deleted && (
        <article className="deleted">
          <h2>Deleted successfully</h2>
          <NavLink to={`/`} className="btn btn--delete">
            Back to home
          </NavLink>
        </article>
      )}
    </div>
  );
};

export default Item;

// console.log(id);
//   const post = api.get(`posts/`);
//   console.log(post);
// FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
//   useEffect(() => {
//     setIsLoading(true);
//     const fetchData = async () => {
//       try {
//         const response = await api.get(`/posts/${id}`);
//         setItem(response.data);
//         console.log(item);
//         setIsLoading(false);
//         setError(null);
//       } catch (err: any) {
//         if (err.response) {
//           console.log(err.message);
//           setError(err.message);
//           setIsLoading(false);
//         } else {
//           console.log(`Error: ${err.message}`);
//           setIsLoading(false);
//         }
//       }
//     };
//     fetchData();
//   }, []);
// FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
