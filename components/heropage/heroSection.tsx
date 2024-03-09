"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

function HeroSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const carousel = carouselRef.current;

      if (carousel) {
        carousel.scrollTop += carousel.offsetHeight; // Scroll to the next slide
        if (
          carousel.scrollTop ===
          carousel.scrollHeight - carousel.offsetHeight
        ) {
          // If reached the bottom, scroll back to the top
          carousel.scrollTop = 0;
        }
      }
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="px-1 md:px-4 lg:px-24 py-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  overflow-y-hidden  py-2 pb-6">
        {/* left item of hero */}
        <div className="relative">
          {" "}
          <Link href={"/cart"} className="">
            <figure className="relative overflow-hidden rounded-2xl">
              <img
                src="https://res.cloudinary.com/arifulislam/image/upload/v1709797351/cloth-min-removebg-preview-min_trfjl1.png"
                alt="Shoes"
                className="md:w-full sm:h-full md:h-96 object-cover transition duration-300 ease-in-out"
              />
              <div className="absolute inset-0 flex justify-center text-black hover:text-white bg-black bg-opacity-0 transition duration-300 ease-in-out hover:bg-opacity-50">
                <div className="absolute bottom-0 text-center  w-full">
                  <h2 className="text-xl font-bold">The wedding dress</h2>
                  <Link
                    title="shop now"
                    className="font-normal underline"
                    href={"weading"}
                  >
                    shop now
                  </Link>
                </div>
              </div>
            </figure>
          </Link>
        </div>

        {/* middel item of hero */}
        <div
          className="h-96 w-full md:col-span-2  carousel carousel-vertical rounded-box"
          ref={carouselRef}
        >
          {" "}
          <div className="carousel-item">
            {" "}
            <Link href={"/cart"} className="relative  ">
              <figure className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://res.cloudinary.com/arifulislam/image/upload/v1709795099/swimm_shop-min_ojb7nf.jpg"
                  alt="Shoes"
                  className="md:w-full h-96 object-cover transition duration-300 ease-in-out"
                />
                <div className="absolute inset-0 flex justify-center text-black hover:text-white bg-black bg-opacity-0 transition duration-300 ease-in-out hover:bg-opacity-50">
                  <div className="absolute bottom-0 text-center  w-full">
                    <h2 className="text-xl font-bold">Suming costume</h2>
                    <Link
                      title="shop now"
                      className="font-normal underline"
                      href={"weading"}
                    >
                      shop now
                    </Link>
                  </div>
                </div>
              </figure>
            </Link>
          </div>
          <div className="carousel-item">
            {" "}
            <Link href={"/cart"} className="relative  ">
              <figure className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://res.cloudinary.com/arifulislam/image/upload/v1709795098/skincare_hero-min_siodmt.jpg"
                  alt="Shoes"
                  className="md:w-full h-96 object-cover transition duration-300 ease-in-out"
                />
                <div className="absolute inset-0 flex justify-center text-black hover:text-white bg-black bg-opacity-0 transition duration-300 ease-in-out hover:bg-opacity-50">
                  <div className="absolute bottom-0 text-center  w-full">
                    <h2 className="text-xl font-bold">
                      Glow your skin with this serum!
                    </h2>
                    <Link
                      title="shop now"
                      className="font-normal underline"
                      href={"weading"}
                    >
                      shop now
                    </Link>
                  </div>
                </div>
              </figure>
            </Link>
          </div>
          <div className="carousel-item relative">
            {" "}
            <Link href={"/cart"} className="  ">
              <figure className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://res.cloudinary.com/arifulislam/image/upload/v1709811346/pexels-antony-trivet-9980356_oypwtc.jpg"
                  alt="Shoes"
                  className="md:w-full h-96 object-cover transition duration-300 ease-in-out"
                />
                <div className="absolute inset-0 flex justify-center text-black hover:text-white bg-black bg-opacity-0 transition duration-300 ease-in-out hover:bg-opacity-50">
                  <div className="absolute bottom-0 text-center  w-full">
                    <h2 className="text-xl font-bold">
                      Eye Protect form the sun rays.
                    </h2>
                    <Link
                      title="shop now"
                      className="font-normal underline"
                      href={"weading"}
                    >
                      shop now
                    </Link>
                  </div>
                </div>
              </figure>
            </Link>
          </div>
        </div>

        <div className="h-96 carousel carousel-vertical   rounded-box">
          <div className="carousel-item  w-full h-full">
            <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" />
          </div>
          <div className="carousel-item w-full h-full">
            <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" />
          </div>
          <div className="carousel-item w-full h-full">
            <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" />
          </div>

          <div className="carousel-item w-full h-full">
            <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" />
          </div>
          <div className="carousel-item w-full h-full">
            <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" />
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="relative">
          {" "}
          <Link href={"/cart"} className="">
            <figure className="relative overflow-hidden rounded-2xl">
              <img
                src="https://res.cloudinary.com/arifulislam/image/upload/v1709963344/Group_1_1_gyjgjo.png"
                alt="Shoes"
                className="md:w-full h-24 md:h-40 "
              />
              <div className="absolute inset-0 flex justify-center text-black">
                <div className="absolute pl-2 pt-1 pr-20 md:pt-6 md:pl-6  w-full ">
                  <p className=" text-xs md:text-2xl font-bold ">
                    Free Shipping. No Order Minimum. <br /> Only with AJ Shope
                  </p>
                  <p className="md:py-2 text-xs md:text-base font-light">
                    Terms Apply.
                  </p>
                  <Link
                    title="shop now"
                    className=" text-xs md:text-base underline font-light"
                    href={"weading"}
                  >
                    join with ajshope
                  </Link>
                </div>
              </div>
            </figure>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
