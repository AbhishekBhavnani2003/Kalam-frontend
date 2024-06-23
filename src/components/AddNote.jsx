import { PhotoIcon } from "@heroicons/react/24/solid";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Navbar from "./Navbar/Navbar";
import Select from "@mui/material/Select";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "./context/DataProvider";
import { useNavigate } from "react-router-dom";
import Token from "./Token";
import Footer from "./Footer";

const initialpost = {
  title: "",
  description: "",
  picture: "",
  username: "",
  category: "",
  createdDate: new Date(),
};

export default function Example() {
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [post, setPost] = useState(initialpost);
  const { account } = useContext(DataContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
    if (name === "category") {
      setCategory(value);
    }
  };

  useEffect(() => {
    const uploadImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        const token = Token();
        try {
          console.log("Starting upload...");
          const response = await fetch("http://localhost:5000/upload", {
            method: "POST",
            body: data,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const result = await response.json();
          console.log("Upload successful, response:", result);
          setPost((prevPost) => ({
            ...prevPost,
            picture: result,
          }));
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      }
    };
    post.username = account.username;
    uploadImage();
  }, [file]);

  const coverImage =
    post.picture ||
    "https://i.pinimg.com/564x/77/b4/b1/77b4b1b23debef191a59044b7d83a1ab.jpg";

  

  const savePost = async (event) => {
    event.preventDefault();
    const token = Token();
    const username = sessionStorage.getItem('username');
    const postWithUsername = {
      ...post,
      username: username,
    };
    try {
      console.log("Saving post...", postWithUsername);
      const response = await fetch("http://localhost:5000/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: ` ${token}`, 
        },
        body: JSON.stringify(postWithUsername),
      });

      if (response.ok) {
        console.log("Post saved successfully");
        navigate("/post"); // Or the correct path you want to navigate to
      } else {
        console.error("Failed to save post:", response.statusText);
        const result = await response.json();
        console.error("Error response:", result);
      }
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          background: `linear-gradient(to bottom, #374151, #111827)`,
          color: "white",
        }}
      >
        <form onSubmit={savePost}>
          <div className="space-y-12" style={{ padding: "10px" }}>
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-white-900"
                >
                  Cover photo
                </label>
                <div
                  className="col-span-full"
                  style={{
                    backgroundImage: `url(${coverImage})`,
                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                    height:'300px'
                  }}
                >
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            onChange={(e) => setFile(e.target.files[0])}
                          />
                        </label>
                        <p className="pl-1" style={{ color: "#f1f5f9" }}>
                          or drag and drop
                        </p>
                      </div>
                      <p
                        className="text-xs leading-5 text-gray-100"
                        style={{ fontWeight: "bold" }}
                      >
                        PNG, JPG up to 2MB
                      </p>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium leading-6 text-white-900"
                  >
                    Title
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Enter your blog title"
                        onChange={handleChange}
                        maxLength={50}
                        minLength={5}
                      />
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: "20px" }}>
                  <Box sx={{ minWidth: 200  }}>
                    <FormControl fullWidth style={{ color: "white" }}>
                      <InputLabel
                        id="demo-simple-select-label"
                        style={{ color: "white" }}
                      >
                        Category
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="category"
                        value={category}
                        label="Category"
                        onChange={handleChange}
                        style={{ color: "white" }}
                        MenuProps={{
                          PaperProps: {
                            style: {
                              backgroundColor: "#374151",
                              color: "white",
                            },
                          },
                        }}
                      >
                        <MenuItem
                          value="Health & Wellness"
                          style={{ color: "white" }}
                        >
                          Health & Wellness
                        </MenuItem>
                        <MenuItem
                          value="Travel & Adventure"
                          style={{ color: "white" }}
                        >
                          Travel & Adventure
                        </MenuItem>
                        <MenuItem
                          value="Technology & Innovation"
                          style={{ color: "white" }}
                        >
                          Technology & Innovation
                        </MenuItem>
                        <MenuItem
                          value="Lifestyle & Culture"
                          style={{ color: "white" }}
                        >
                          Lifestyle & Culture
                        </MenuItem>
                        <MenuItem
                          value="Personal Development"
                          style={{ color: "white" }}
                        >
                          Personal Development
                        </MenuItem>
                        <MenuItem
                          value="Finance & Business"
                          style={{ color: "white" }}
                        >
                          Finance & Business
                        </MenuItem>
                        <MenuItem
                          value="Arts & Entertainment"
                          style={{ color: "white" }}
                        >
                          Arts & Entertainment
                        </MenuItem>
                        <MenuItem
                          value="Science & Nature"
                          style={{ color: "white" }}
                        >
                          Science & Nature
                        </MenuItem>
                        <MenuItem
                          value="Parenting & Family"
                          style={{ color: "white" }}
                        >
                          Parenting & Family
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium leading-6 text-white-900"
                  >
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 bg-gray-100 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                      onChange={handleChange}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white-600">
                    Write a few sentences about your blog.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white-600" style={{float:'right' , }}>
                    - Ensure you are Login before publishing the blog 
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Publish
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  );
}
