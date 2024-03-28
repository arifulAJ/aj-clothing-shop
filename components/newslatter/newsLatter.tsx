"use client";
import React, { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  console.log(email);

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // Send a POST request to your backend API endpoint
      await axios.post("/api/subscribe", { email });
      alert("Subscription successful! You will be notified by email.");
      setEmail(""); // Clear the email input field
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <p className="py-2">Sign up for our newsletter.</p>
      <form onSubmit={handleSubmit}>
        <input
          className="bg-white w-24 sm:w-1/2 px-2 md:px-8 py-2 text-black"
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button
          type="submit"
          className="px-1 md:px-4 py-2 bg-gray-300 text-black"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
