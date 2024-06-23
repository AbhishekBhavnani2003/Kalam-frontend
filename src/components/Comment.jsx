import { Box, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Token from "./Token";

function Comment({ comment, post , settoggle}) {
  let accountname = sessionStorage.getItem("username");

  const isAuthorOfComment = comment && accountname === comment.name;
  const isAuthorOfPost = post && accountname === post.username;
  const navigate = useNavigate();
  

  const removeComment = async (id) => 
    { 
      const token = Token();
       const response = await fetch(`http://localhost:5000/deletecomment/${id}` , 
        {
          method : "DELETE" , 
          headers: 
          {
            Authorization : `${token}` , 
            "Content-Type" : "application/json" , 
          }
        }
       )

       if(response.ok)
        {
          settoggle(prevState => !prevState)
        }

    }

  if (!comment || !post) {
    return (
      <div className="bg-gray-100 p-6 " >
        <div className="flex flex-col space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 p-6" style={{background:`linear-gradient(to top, #374151, #111827)` , color:'white' , paddingBottom:'30px'}}>
      <div className="flex flex-col space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          {(isAuthorOfComment || isAuthorOfPost) && (
            <Delete
              sx={{
                float: "right",
                "&:hover": {
                  cursor: "pointer",
                },
                filter: 'invert(100%) brightness(2)',
              }} 

              onClick={() => removeComment(comment._id)}
            />
          )}
          <h3 className="text-lg font-bold " style={{color:'black'}}>{comment.name}</h3>
          <p className="text-gray-700 text-sm mb-2">
            Posted on {new Date(comment.date).toDateString()}
          </p>

          <p className="text-gray-700">{comment.comments}</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
