import { appendFile } from "fs";
import React from "react";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { NavLink } from "react-router-dom";
import api from "./api/posts";

const CrudList = ({ items }: any) => {
  //   const blogs = props.blogs;
  //   const title = props.title;
  //   console.log(blogs);
  //   const history = useHistory();

  const handleDelete = async (id: any) => {
    try {
      await api.delete(`posts/${id}`);
      window.location.reload();
    } catch (err: any) {
      console.log(`Error: ${err.message}`);
    }
    // console.log(id);
    // fetch("http://localhost:8000/item/" + id, {
    //   method: "DELETE",
    // }).then(() => {
    //   // history.push("/");
    //   //reload a page
    //   window.location.reload();
    // });
  };
  return (
    <table className="crudlist ">
      <thead className="crudlist__header">
        <tr>
          <th className=" crudlist__header--id">Id</th>
          <th className=" crudlist__header--user-id">User Id</th>
          <th className=" crudlist__header--title">Title</th>
          <th className=" crudlist__header--body">Body</th>
          <th className=" crudlist__header--update">Update</th>
          <th className=" crudlist__header--delete">Delete</th>
        </tr>
      </thead>
      {/* <div className=" crudlist__header--id">Id</div>
        <div className=" crudlist__header--user-id">User Id</div>
        <div className=" crudlist__header--title">Title</div>
        <div className=" crudlist__header--body">Body</div>
        <div className=" crudlist__header--update">Update</div>
        <div className=" crudlist__header--delete">Delete</div> */}

      <tbody>
        {items.map((item: any) => (
          <tr className="crudlist__preview" key={item.id}>
            <td className=" crudlist__preview--id">{item.id}</td>
            <td className=" crudlist__preview--user-id">{item.userId}</td>
            <td className=" crudlist__preview--title">
              <div className=" crudlist__preview--title">{item.title}</div>
            </td>
            <td className=" crudlist__preview--body">
              <NavLink to={`/item/${item.id}`} className="btn btn--view">
                view
              </NavLink>
              <div className=" crudlist__preview--body">{item.body} </div>
            </td>
            <td className=" crudlist__preview--update">
              <NavLink to={`/update/${item.id}`} className="btn">
                Update
              </NavLink>
            </td>
            <td className=" crudlist__header--delete">
              <button
                className="btn btn--del"
                onClick={() => handleDelete(item.id)}
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CrudList;
