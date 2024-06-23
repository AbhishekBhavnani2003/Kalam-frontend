import Image1 from "../static/Image1.jpg";
import React, { useState, useEffect } from "react";

export default function Example() {
  const [openIndex, setOpenIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="relative overflow-hidden bg-white"
      style={{
        background: `linear-gradient(to top, #374151, #111827)`,
        color: "white",
        paddingBottom: "20px",
      }}
    >
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div
          className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8"
          style={{ ...(window.innerWidth > 1024 && { marginLeft: "20px" }) }}
        >
          <div className="sm:max-w-lg">
            <h4
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              style={{ color: "white" }}
            >
              Simple, meet flexible.
            </h4>
            <p className="mt-4 text-xl text-gray-500">
              Whatever you’re publishing. Whoever your audience is. Kalam makes
              it simple to get started. And easy to expand your site as your
              audience grows.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <ul className="flex flex-col gap-2 max-w-[280px] lg:max-w-[400px] w-[280px] lg:w-[400px] mx-auto lg:mx-0 mt-24 lg:float-left">
              <li>
                <div
                  className={`group p-4 border-b ${
                    openIndex === 0 ? "open" : ""
                  }`}
                >
                  <summary
                    className="flex items-center justify-between gap-2 font-medium cursor-pointer"
                    onClick={() => toggleOpen(0)}
                  >
                    <span className="flex gap-2">
                      <strong className="arrow text-lg">
                        {openIndex === 0 ? "⇂" : "⇀"}
                      </strong>
                      <span>Blog beautifully</span>
                    </span>
                  </summary>
                  {openIndex === 0 && (
                    <article className="pt-2">
                      <p>
                        Customize your blog’s look and feel in a couple of
                        clicks with beautifully designed themes. Bring your
                        writing to life with magical drag-and-drop layouts. Or
                        put your fingerprint on every font, color, and element
                        on the page.
                      </p>
                    </article>
                  )}
                </div>
              </li>
              <li>
                <div
                  className={`group p-4 border-b ${
                    openIndex === 1 ? "open" : ""
                  }`}
                >
                  <summary
                    className="flex items-center justify-between gap-2 font-medium cursor-pointer"
                    onClick={() => toggleOpen(1)}
                  >
                    <span className="flex gap-2">
                      <strong className="arrow text-lg">
                        {openIndex === 1 ? "⇂" : "⇀"}
                      </strong>
                      <span>Edit easily</span>
                    </span>
                  </summary>
                  {openIndex === 1 && (
                    <article className="pt-2">
                      <p>
                        From simple and clean to glossy magazine – whatever your
                        publishing style, the intuitive block editor adapts to
                        you. Drag, drop, and easily swap out your menu, punch in
                        a pull quote, or make your post pop with a beautiful
                        gallery. Just like that.
                      </p>
                    </article>
                  )}
                </div>
              </li>
              <li>
                <div
                  className={`group p-4 border-b ${
                    openIndex === 2 ? "open" : ""
                  }`}
                >
                  <summary
                    className="flex items-center justify-between gap-2 font-medium cursor-pointer"
                    onClick={() => toggleOpen(2)}
                  >
                    <span className="flex gap-2">
                      <strong className="arrow text-lg">
                        {openIndex === 2 ? "⇂" : "⇀"}
                      </strong>
                      <span>Share anything, simply</span>
                    </span>
                  </summary>
                  {openIndex === 2 && (
                    <article className="pt-2">
                      <p>
                        From video to audio, stories to GIFs, bring it all
                        together—right from where you write. And with plenty of
                        storage for every type of media, your content’s secure,
                        easy to reuse anywhere on your blog, and owned by you
                        alone.
                      </p>
                    </article>
                  )}
                </div>
              </li>
            </ul>
          </div>
          <div
            style={{ marginTop: "50px", marginLeft: "40px", display: "flex" }}
          >
            <nav class="inline-flex space-x-2.5">
              <a
                class="flex items-center py-2 px-3 rounded font-medium select-none "
                href="/login"
                style={{
                  backgroundColor: " #295E70",
                  marginRight: "20px",
                }}
              >
                Start Writing
              </a>
              <a
                class="flex items-center py-2 px-3 rounded font-medium select-none "
                href="/login"
                style={{
                  backgroundColor: " #2F4858",
                }}
              >
                Explore Blogs
              </a>
            </nav>
          </div>
          <div>
            <div className="mt-10">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div
                  className="absolute transform sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8"
                  style={{
                    width: windowWidth < 640 ? "100%" : "auto",
                  }}
                >
                  <img
                    src={Image1}
                    alt=""
                    style={{
                      width: windowWidth < 1024 ? "100%" : "auto",
                      height: windowWidth < 1024 ? "auto" : "700px",
                      float: windowWidth >= 1024 ? "right" : "none",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
