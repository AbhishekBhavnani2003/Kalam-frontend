import React, { useState, useEffect } from "react";
import Post from "./Post";
import Token from "./Token";
import HomeIcon from "@mui/icons-material/Home";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { useNavigate } from "react-router-dom";

const navItems = [
  {
    category: "Health & Wellness",
    text: "Health & Wellness",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h14M12 5l7 7-7 7"
        />
      </svg>
    ),
  },
  {
    category: "Travel & Adventure",
    text: "Travel & Adventure",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h14M12 5l7 7-7 7"
        />
      </svg>
    ),
  },
  {
    category: "Technology & Innovation",
    text: "Tech & Innovation",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h14M12 5l7 7-7 7"
        />
      </svg>
    ),
  },
  {
    category: "Lifestyle & Culture",
    text: "Lifestyle & Culture",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h14M12 5l7 7-7 7"
        />
      </svg>
    ),
  },
  {
    category: "Personal Development",
    text: "Personal Development",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h14M12 5l7 7-7 7"
        />
      </svg>
    ),
  },
  {
    category: "Finance & Business",
    text: "Finance & Business",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h14M12 5l7 7-7 7"
        />
      </svg>
    ),
  },
  {
    category: "Arts & Entertainment",
    text: "Arts & Entertainment",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h14M12 5l7 7-7 7"
        />
      </svg>
    ),
  },
  {
    category: "Science & Nature",
    text: "Science & Nature",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h14M12 5l7 7-7 7"
        />
      </svg>
    ),
  },
  {
    category: "Parenting & Family",
    text: "Parenting & Family",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h14M12 5l7 7-7 7"
        />
      </svg>
    ),
  },
];

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [posts, setPosts] = useState([]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Fetch all posts initially or based on your requirement
    fetchPostsByCategory("");
  }, []);

  const handleNavItemClick = (category) => {
    setSelectedCategory(category);
    fetchPostsByCategory(category);
  };
  const fetchPostsByCategory = async (category) => {
    try {
      const token = Token();
      let response;

      if (category === "") {
        // Fetch all posts if no category is selected
        response = await fetch("http://localhost:5000/postfetch", {
          method: "GET",
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        });
      } else {
        // Fetch posts by category
        response = await fetch("http://localhost:5000/categorypost", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
            Category: category,
          },
          body: JSON.stringify({ category }),
        });
      }

      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const navigate = useNavigate();
  return (
    <>
      <div >
        <div className="flex h-screen bg-gray-100" style={{background:`linear-gradient(to bottom, #374151, #111827)` , color:'white' }}>
          <div
            className="md:hidden flex justify-between items-center p-4 bg-gray-800 text-white flex-col"
          >
            <button
              onClick={toggleSidebar}
              className="text-white focus:outline-none"
            >
              {isSidebarOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`md:flex flex-col w-64 bg-gray-800 ${
              isSidebarOpen ? "block" : "hidden"
            } md:block`}
          >
            <div className="flex items-center justify-center h-16 bg-gray-900">
              <span className="text-white font-bold uppercase">Categories</span>
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto">
              <nav className="flex-1 px-2 py-4 bg-gray-800">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavItemClick(item.category)}
                    className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
                  >
                    {item.icon}
                    {item.text}
                  </button>
                ))}
              </nav>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  paddingBottom:'15px'
                }}
              >
                <button onClick={() => navigate("/")}>
                  <HomeIcon
                    sx={{
                      color: "white",
                      border: "2px solid white",
                      padding: "3px",
                      margin: "5px",
                      borderRadius: "50%",
                    }}
                    fontSize="medium"
                  />
                </button>
                <button>
                <NoteAddIcon onClick={() => navigate("/create") } 
                  sx={{
                    marginRight: "20px",
                    marginBottom: "20px",
                    border: "2px solid white",
                    borderRadius: "50%",
                    padding: "3px",
                    margin: "5px",
                    color: "white",
                    transition: "transform 0.3s, color 0.3s, border-color 0.3s",
                  }}
                  fontSize="medium"
                />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <div className="p-4">
              <h1 className="text-2xl font-bold">
                {!selectedCategory == " "
                  ? `Exploring ${selectedCategory} ! `
                  : `  Exploring Blogs ! `}
              </h1>
              <span className="text-white-600" style={{float:'right', marginTop:'10px' }}>
                - Presented by Kalam
              </span>
              <Post posts={posts} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
