import api from "../components/api/posts";
import React from "react";
import { NavLink, useParams } from "react-router-dom";

// import posts from "../components/api/posts";
import { useState, useEffect } from "react";

const Item = () => {
  const [item, setItem] = useState<any>(null);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState<any>(null);

  // console.log(id);
  //   const post = api.get(`posts/`);
  //   console.log(post);
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await api.get(`/posts/${id}`);
        setItem(response.data);
        console.log(item);
        setIsLoading(false);
        setError(null);
      } catch (err: any) {
        if (err.response) {
          console.log(err.message);
          setError(err.message);
          setIsLoading(false);
        } else {
          console.log(`Error: ${err.message}`);
          setIsLoading(false);
        }
      }
    };
    fetchData();
  }, []);
  return (
    <div className="item-details container">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {item && (
        <article>
          <h2>{item.title}</h2>
          <em>Writen by user:{item.userId}</em>
          <div>{item.body}</div>
          <div className="btns">
            <button className="btn">delete</button>
            <NavLink to={`/`} className="btn btn--create">
              Back to home
            </NavLink>
          </div>
        </article>
      )}
    </div>
  );
};

export default Item;
