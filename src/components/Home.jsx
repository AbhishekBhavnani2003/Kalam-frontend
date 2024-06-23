import React from "react";
import { Link  } from "react-router-dom";
import Navbar from './Navbar/Navbar'
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import V1 from "../static/V1.mp4"
import Section1 from './Section1'
import Testimonail from "./Testimonail";
import Footer from "./Footer";

function Home() {
  const posts = [
    {
      id: 1,
      title: "Travel & Adventure",
      date: "January 21, 2021",
      imageUrl:
        "https://images.unsplash.com/photo-1688926983829-01728e16d96c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Embark on virtual adventures around the globe with our travel guides, destination highlights, and thrilling stories from fellow explorers.",
    },
    {
      id: 2,
      title: "Health & Wellness",
      date: "January 22, 2021",
      imageUrl:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Explore articles on holistic health, fitness tips, mental well-being, and nutrition advice to empower you on your journey to a healthier lifestyle.",
    },
    {
      id: 3,
      title: "Technology & Innovation",
      date: "January 23, 2021",
      imageUrl:
        "https://images.unsplash.com/photo-1423666523292-b458da343f6a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        " Stay ahead of the curve with the latest in tech trends, gadget reviews, and thought-provoking discussions on the ever-evolving world of innovation",
    },
    {
      id: 4,
      title: "Lifestyle & Culture",
      date: "January 23, 2021",
      imageUrl:
        "https://images.unsplash.com/photo-1712746438791-ccf70478e0d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        " Discover captivating insights into modern living, trends, fashion, food, and pop culture that enrich your everyday experiences ",
    },
    {
      id: 5,
      title: "Personal Development",
      date: "January 23, 2021",
      imageUrl:
        "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbmFsJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
      description:
        "Unlock your full potential with actionable tips, life hacks, and motivational stories to help you grow personally and professionally ",
    },
    {
      id: 6,
      title: "Finance & Business",
      date: "January 23, 2021",
      imageUrl:
        "https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        " Navigate the complexities of the financial world and entrepreneurial endeavors with expert advice, investment strategies, and success stories from the business realm.",
    },
    {
      id: 7,
      title: "Arts & Entertainment",
      date: "January 23, 2021",
      imageUrl:
        "https://images.unsplash.com/photo-1456086272160-b28b0645b729?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        " Immerse yourself in the world of creativity and entertainment with reviews, artist spotlights, and thought-provoking analyses of the latest trends in art, music, film, and literature ",
    },
    {
      id: 8,
      title: "Parenting & Family",
      date: "January 23, 2021",
      imageUrl:
        "https://images.unsplash.com/photo-1567067974934-75a3e4534c14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "  Find support, guidance, and inspiration on the journey of parenthood with insightful articles, parenting hacks, and heartwarming stories that celebrate the joys and challenges of family life. ",
    },
    {
      id: 9,
      title: "Science & Nature",
      date: "January 23, 2021",
      imageUrl:
        "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        " Delve into the wonders of the natural world and the cutting-edge discoveries of science through captivating articles, explorations, and thought-provoking discussions",
    },
  ];

  return (
    <>
    <Navbar/>
    <div style={{background:`linear-gradient(to bottom, #374151, #111827)` , color:'white' }}>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <p
            style={{cursor:'auto'}}
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
          >
            <video
              src={V1}
              autoPlay
              loop
              muted
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              playsInline
              style={{ width: "100%", height: "auto" }}
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h5>KALAM &gt; BLOGS</h5>
              <h3 className="text-2xl font-semibold sm:text-4xl  ">
                Create a blog
              </h3>
              <p style={{ textAlign: "justify" }}>
              Share your story with the world. Create a beautiful, personalized blog that fits your unique voice and passions. Whether you're into travel, food, technology, fashion, or wellness, our platform empowers you to showcase your experiences with stunning images and engaging narratives. Join us in crafting a space where your stories resonate and inspire others.
              </p>
            </div>
          </p>
          
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" >

            {posts.map((post) => (
              <div
              key={post.id}
                style={{
                  borderBottom: "2px solid #2C4E80",
                  borderRight: "2px solid #2C4E80",
                  padding: "5px",
                  borderRadius: "5%",
                }}
              >
                <p
                  rel="noopener noreferrer"
                  href="#"
                  className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
                >
                  <img
                    role="presentation"
                    className="object-cover w-full rounded h-44 dark:bg-gray-500"
                    src={post.imageUrl}
                  />
                  <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                      {post.title}
                    </h3>
                    <p>{post.description}</p>
                  </div>
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link to="/login">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600"
              style={{ border: "2px solid #2C4E80" }}
            >
              Get Started..
            </button>
            </Link>
          </div>
        </div>
      </section>
      <Link to='/create'>
      <NoteAddIcon
        sx={{
          marginRight: "20px",
          marginBottom: "20px",
          border: "2px solid black",
          borderRadius: "50%",
          padding: "5px",
          position: "fixed",
          bottom: "0",
          right: "0",
          zIndex:'4' ,
          color: "#009199",
          borderColor: "#34BA99",
          transition: "transform 0.3s, color 0.3s, border-color 0.3s",
          "&:hover": {
            transform: "scale(1.2)",
            color: "#34BA99",
            borderColor: "#009199",
          },
        }}
        fontSize="large"
      />
      </Link>
    </div>
    <Section1 style={{marginBottom:'50px'
    }}/>
    <Testimonail/>
    <Footer/>
    </>
  );
}

export default Home;
