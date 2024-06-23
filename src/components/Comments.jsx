import React, { useEffect, useState } from "react";
import Footer from './Footer'
import {useParams} from "react-router-dom"
import Comment from './Comment'
import {
  Box,
  TextareaAutosize,
  Button,
  styled,
  Typography,
} from "@mui/material";
import Token from "./Token";

const Container = styled(Box)`
  margin-top: 100px;
  display: flex;
`;

const StyledTextArea = styled(TextareaAutosize)`
  width: 100%;
  margin: 0 20px;
`;

const Image = styled("img")({
  width: 50,
  height: 50,
  borderRadius: "50%",
  filter: 'invert(100%) brightness(2)',
});

const initialValue = {
  name: "",
  postId: "",
  comments: "",
  date: new Date(),
};

function Comments({ post }) {
  const [comment, setComment] = useState(initialValue);
  const [comments, setComments] = useState([]);
  const [toggle, settoggle] = useState(false)
  const { id } = useParams();


  const handleChange = (e) => {
    setComment({
      ...comment,
      name: sessionStorage.getItem("username"),
      postId: post._id ,
      comments: e.target.value,
    });
  };


 
  const addComment = async () => {
    const token = Token();
    const response = await fetch(`http://localhost:5000/newcomment`, {
      method: "POST",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });

    if (response.ok) {
      setComment(initialValue); 
    }
   settoggle(prevState => !prevState)
  };

  useEffect(() => {
    const getData = async () => {
      const token = Token();
      let response = await fetch(`http://localhost:5000/getcomments/${id}`, {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setComments(data);
      }
    };

   
      getData();
   
  }, [post , toggle]);


  const url = "https://static.thenounproject.com/png/12017-200.png";
  
  return (
    <>
    <div style={{background:`linear-gradient(to top, #374151, #111827)` , color:'white' , paddingBottom:'30px'}}>
    <h2 className="text-lg font-bold mb-4" style={{marginLeft:'30px'}}>Comments : </h2>
    <Box>
      <Container
        style={{
          margin: "auto",
          alignItems: "center",
          padding: "5px",
          marginBottom: "10px",

     
        }}
      >
        <Image src={url} alt="dp" />
        <StyledTextArea
          minRows={4}
          placeholder="What's on your mind?"
          value={comment.comments}
          onChange={handleChange}
          style={{
          color:'black'
          }}
        />
        <Button
          variant="contained"
          color="primary"
          size="medium"
          style={{ height: 40 }}
          onClick={addComment}
        >
          Post
        </Button>
      </Container>
      <Box >
        {
          comments && comments.length>0 && comments.map(comment => 
            (
              <Comment comment={comment} post={post} settoggle={settoggle}/>
            )
          )
        }
      </Box>
    </Box>
    </div>
    <Footer/>
    </>
  );
}

export default Comments;
