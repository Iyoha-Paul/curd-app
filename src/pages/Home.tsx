import React from "react";
import { useState } from "react";
import BlogList from "../components/CrudList";
import useFetch from "../components/useFetch";
import CrudList from "../components/CrudList";
import { NavLink } from "react-router-dom";
const Home = () => {
  // let blogFilter = "mario";
  // function handleDelete(id) {
  //   const newblogs = blogs.filter((blogs) => blogs.id !== id);
  //   setBlogs(newblogs);
  // }

  const { data: items, isLoading, error } = useFetch();
  console.log(items);
  return (
    <div className="home container">
      <NavLink to={`/newItem`} className="btn btn--create">
        Create
      </NavLink>
      {error && <div>{error}...</div>}
      {items && <CrudList items={items} />}
      {isLoading && <div>Loading...</div>}
      {/* {blogs && (
        <BlogList
          blogs={blogs.filter((blogs) => blogs.author === blogFilter)}
          title={`${blogFilter}'s  Blogs!`}
        />
      )} */}
    </div>
  );
};

export default Home;
