import React, { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Token from "./Token";
import Navbar from "./Navbar/Navbar";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/material";
import { DataContext } from "./context/DataProvider";
import Comments from "./Comments";

function Detailview() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const { account } = useContext(DataContext);
  const navigate = useNavigate();
  const sessionStorageUsername = sessionStorage.getItem("username");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Token();
        const response = await fetch(
          `http://localhost:5000/getpostbyid/${id}`,
          {
            method: "GET",
            headers: {
              Authorization: `${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setPost(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [id]);

  const deleteBlog = async () => {
    const token = Token();
    const response = await fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: ` ${token}`,
      },
    });

    if (response.ok) {
      navigate('/bar');
    }
  };

  const url = post?.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>
      <Navbar />
      <div style={{background:`linear-gradient(to bottom, #374151, #111827)` , color:'white' }}>
        {error ? (
          <div>Error: {error}</div>
        ) : post ? (
          <div className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16">
            <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto">
              <div
                className="text-xl sm:text-4xl font-sans inline-block hover:text-white-600 transition duration-500 ease-in-out inline-block mb-2"
                style={{
                  margin: "5px",
                  marginBottom: "10px",
                  paddingBottom: "15px",
                }}
              >
                {post.title}
              </div>

              <div className="relative">
                <img className="w-full" src={url} alt="Blog" />

                <div className="absolute z-10 text-xs bottom-0 left-0 bg-indigo-600 px-6 m-2 py-2 text-white hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out flex items-center">
                  <span className="text-lg">|</span>&nbsp;&nbsp;
                  <span>{post.category}</span>
                </div>
              </div>

              <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
                {sessionStorageUsername === post.username && (
                  <>
                    <DeleteIcon
                      onClick={() => deleteBlog()}
                      color="error"
                      fontSize="large"
                      sx={{
                        margin: "10px",
                        padding: "5px",
                        border: "1px solid #878787",
                        borderRadius: "5px",
                        '&:hover': {
                          cursor: 'pointer',
                      },
                      }}
                    />
                    <Link to={`/bar/update/${post._id}`}>
                      <EditIcon
                        color="primary"
                        fontSize="large"
                        sx={{
                          margin: "10px",
                          padding: "5px",
                          border: "1px solid #878787",
                          borderRadius: "5px",
                        }}
                      />
                    </Link>
                  </>
                )}
              </Box>

              <p className="text-white-700 py-5 text-base leading-8">
                {post.description}
              </p>
              <div className="py-5 text-sm font-regular text-gray-900 flex">
                <span className="mr-3 flex flex-row items-center">
                  <svg
                    className="text-indigo-600"
                    fill="currentColor"
                    height="13px"
                    width="13px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <path
                          d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
                                                c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
                                                c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  <span className="ml-1" style={{color:'white'}}>
                    {new Date(post.createdDate).toDateString()}
                  </span>
                </span>
                <p
                  href="#"
                  className="flex flex-row items-center hover:text-indigo-600"
                >
                  <svg
                    className="text-indigo-600"
                    fill="currentColor"
                    height="16px"
                    aria-hidden="true"
                    role="img"
                    focusable="false"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    ></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                  </svg>
                  <span className="ml-1" style={{color:'white'}}>{post.username}</span>
                </p>
              </div>
              <hr />
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <Comments post={post}/>
    </>
  );
}

export default Detailview;
