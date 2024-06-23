import React from "react";
import Logo from "../static/Logo.png";

function Footer() {
  return (
    <div
      style={{
        background: `linear-gradient(to top, #374151, #111827)`,
        color: "white",
        paddingBottom: "30px",
      }}
    >
      <div class="text-center">
        <a
          href="#"
          class="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900"
        >
          <img
            src={Logo}
            alt="Landwind Logo"
            style={{
              width: "200px",
              height: "200px",
            }}
          />
        </a>

        <span
          class="block text-sm text-center text-gray-500"
          style={{ marginTop: "-50px" }}
        >
          © 2024 Kalam. All Rights Reserved.
        </span>

        <span class="block text-sm text-center text-white-500">
          Made by Abhishek Bhavnani
        </span>

        <ul class="flex justify-center mt-5 space-x-5">
          <li>
            <a
              href="https://www.instagram.com/abhishek_bhavnani/"
              target="blank"
              class="text-gray-500 hover:text-gray-900"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/AbhishekBhavnani2003/"
              target="blank"
              class="text-gray-500 hover:text-gray-900"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/abhishek-bhavnani/"
              target="blank"
              class="text-gray-500 hover:text-gray-900"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M20.402 2H3.598C2.677 2 2 2.677 2 3.598v16.804C2 21.323 2.677 22 3.598 22h16.804c.921 0 1.598-.677 1.598-1.598V3.598C22 2.677 21.323 2 20.402 2zm-7.198 15.601h-2.8V9.2h2.8v8.401zm-1.4-9.602c-.921 0-1.6-.679-1.6-1.6s.679-1.6 1.6-1.6c.921 0 1.6.679 1.6 1.6s-.679 1.6-1.6 1.6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1NdnkYWaqmH_D1MoxrSMu1rk8fGH58LFP/view?usp=sharing"
              target="blank"
              class="text-gray-500 hover:text-gray-900"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zM8 17v-2h8v2H8zm0-4V9h8v4H8zm5-7h2v2h-2V6zm-3 10h2v2H10v-2zm0-4h2v2H10v-2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="mailto:abhishekbhavnani2003@gmail.com"
              class="text-gray-500 hover:text-gray-900"
              target="blank"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M20 3H4c-1.1 0-1.99.9-1.99 2L2 19c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v4l-8 5-8-5V5h16zm-8 6l8-5H4l8 5zm0 4.94L5.17 9h13.66L12 14.94z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
