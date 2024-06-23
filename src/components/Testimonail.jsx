import React from "react";

function Testimonail() {
  // Testimonial data as an array of objects
  const testimonials = [
    {
      id: 1,
      author: "Aarav Gupta",
      content:
        "Kalam has transformed my travel experiences into captivating stories effortlessly. From the bustling streets of Tokyo to serene beaches in Bali, this app makes sharing my adventures a joy. The comment section fosters meaningful connections with fellow globetrotters, and its customizability allows me to showcase my travel tales just the way I envision. Kalam is my go-to for every journey! ",
      imageUrl:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    },
    {
      id: 2,
      author: "Riya Sharma",
      content:
        "Kalam has elevated my culinary adventures to new heights. From exotic recipes to local delights, I showcase my gastronomic journey with ease. The comment section cultivates a vibrant foodie community, where I exchange tips and recipes effortlessly. With Kalam's customizable features, sharing my passion for food is not just easy but also incredibly rewarding. It's the perfect platform for any food enthusiast!",
      imageUrl:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      author: "Raj Patel",
      content:
        "Kalam is a haven for book lovers like me. Whether diving into classic novels or exploring contemporary poetry, this app empowers me to share my literary insights effortlessly. The comment section sparks engaging discussions, enriching my reading experience. Its user-friendly interface and customizable options make sharing my passion for books seamless. Kalam truly amplifies my love for literature!",
      imageUrl:
        "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div>
      <section
        className="bg-white"
        style={{
          background: `linear-gradient(to bottom, #374151, #111827)`,
          color: "white",
        }}
      >
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <p
            className="text-center text-4xl font-bold tracking-tight text-white-900 sm:text-5xl"
            style={{
              fontSize: "20px",
              fontFamily: "sans-serif",
              fontWeight: "bolder",
              paddingBottom:'15px'
            }}
          >
            Discover What Our Community Says: Trusted Customer Reviews Await
            You!
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.id}
                className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8"
                style={{
                  background: `linear-gradient(to bottom, #374151, #111827)`,
                  color: "white",
                }}
              >
                <div className="flex items-center gap-4">
                  <img
                    alt=""
                    src={testimonial.imageUrl}
                    className="size-14 rounded-full object-cover"
                  />

                  <div>
                    <div className="flex justify-center gap-0.5 text-green-500">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <p className="mt-0.5 text-lg font-medium text-white-900">
                      {testimonial.author}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-white-500">{testimonial.content}</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonail;
