import React from "react";
import NewsletterSignup from "../newslatter/newsLatter";

const Footer = () => {
  return (
    <div>
      <div className="bg-blue-100 text-center text-black py-16 ">
        {" "}
        <p className="py-2">We’d love to hear what you think!</p>{" "}
        <button className="hover:border-black border bg-white rounded-full px-6 py-2">
          Give Feedback
        </button>
      </div>
      <div className="p-12 bg-custom-bg-nav  text-white font-light  ">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 py-6">
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda illum aut unde atque reiciendis quibusdam obcaecati
            </p>
          </div>
          <div>
            <ul>
              <li>About us</li>
              <li>FAQ</li>
              <li>Returns & Refunds</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          <div>
            <NewsletterSignup />
          </div>
        </div>
        <hr />
        <div className="text-center pt-4">
          <div className="flex flex-col-reverse  md:flex-row justify-between  ">
            <div>
              {" "}
              <p className="">© 2024 AJ Clothing. All Rights Reserved.</p>
            </div>

            <div>
              <ul className="flex justify-center pb-4 md:pb-0">
                <li className="px-6">
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/arifulislamaj10/

"
                  >
                    <img
                      className="w-6"
                      src="https://res.cloudinary.com/arifulislam/image/upload/v1705932581/WHITE_b7rdzv.png"
                      alt="linkdin"
                    />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://twitter.com/arifulislamaj10">
                    <img
                      className="w-6"
                      src="https://res.cloudinary.com/arifulislam/image/upload/v1705934039/WHITE_of7pti.png"
                      alt="twitter"
                    />
                  </a>
                </li>
                <li className="px-4">
                  {" "}
                  <a href="https://www.instagram.com/arifulislamaj10">
                    <img
                      className="w-6"
                      src="https://res.cloudinary.com/arifulislam/image/upload/v1706088312/insta_fx09re.png"
                      alt="instagram"
                    />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://www.facebook.com/arifulislamaj10">
                    <img
                      className="w-6"
                      src="https://res.cloudinary.com/arifulislam/image/upload/v1705576492/3057625_facebook_media_network_social_icon_rwj0eh.png"
                      alt="facebook"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Footer;
