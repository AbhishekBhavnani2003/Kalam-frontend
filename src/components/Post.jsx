import React from "react";
import { Box } from "@mui/material";
import Blog from "./Blog";
import { Link } from "react-router-dom";

function Post({ posts }) {

  const username = sessionStorage.getItem("username")
  return (
    <>
      {posts && posts.length > 0 ? (
        <Box
          className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3"
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
            gap: 4,
          }}
        >
          {posts.map((post) => (
            <Link to={`details/${post._id}`}>
            <Blog key={post._id} post={post} />
            </Link>
          ))}
        </Box>
      ) : (
        <Box style={{ color: '#878787', margin: '30px 80px', fontSize: 18 }}>
         {(!username == " ") ? ` No data available to display ` : ` Please Login to access the blogs ` }
          </Box>
      )}
    </>
  );
}

export default Post;
