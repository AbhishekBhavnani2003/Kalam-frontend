import React from "react";
import FormfacadeEmbed from "@formfacade/embed-react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <div
        style={{
          background: `linear-gradient(to bottom, #374151, #111827)`,
          color: "white",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <FormfacadeEmbed
          formFacadeURL="https://formfacade.com/include/107625562391909637334/form/1FAIpQLSfWPzWQgDi5sjWViWHHiBWO0Lqw5Fnshya55F4QYIBUwkcr7Q/classic.js/?div=ff-compose"
          onSubmitForm={() => console.log("Form submitted")}
        />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
