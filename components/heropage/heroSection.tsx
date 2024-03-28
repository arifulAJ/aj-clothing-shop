"use client";

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
    <div className="px1  md:px-4 lg:px-24 py-4 md:py-8 bg-gray-100">
      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4  overflow-y-hidden  py-2 pb-6">
        {/* left item of hero */}
        <div className="relative grid sm:grid-cols-2 md:grid-cols-1 sm:gap-4 md:gap-0">
          {" "}
          <div className=" relative overflow-hidden rounded-2xl">
            <Link href={"/collection/headset"} className="">
              <img
                src="https://res.cloudinary.com/arifulislam/image/upload/v1711597373/images_dcsjth.jpg"
                alt="headset"
                className="w-full h-48  "
              />{" "}
            </Link>

            <div className=" absolute bottom-0  text-center text-black  w-full">
              <h2 className="md:text-xl font-light">White head set</h2>
              <Link
                title="shop now"
                className="font-light underline"
                href={"weading"}
              >
                shop now
              </Link>
            </div>
          </div>{" "}
          <div className=" relative overflow-hidden py-1 rounded-2xl">
            <Link href={"/collection/wedding"} className="">
              <img
                src="https://res.cloudinary.com/arifulislam/image/upload/v1711595388/cloth-min-removebg-preview-min_ebqycg.png"
                alt="wedding dresh"
                className="w-full md:h-48  "
              />{" "}
            </Link>

            <div className=" absolute bottom-0  text-center text-black  w-full">
              <h2 className="md:text-xl font-light">The wedding dress</h2>
              <Link
                title="shop now"
                className="font-light underline"
                href={"weading"}
              >
                shop now
              </Link>
            </div>
          </div>
        </div>

        {/* middel item of hero */}
        <div
          className=" h-60 w-full md:h-96 md:col-span-2 mx-2 sm:mx-0  carousel carousel-end md:carousel-vertical rounded-box"
          ref={carouselRef}
        >
          {" "}
          <div className="carousel-item">
            {" "}
            <div className="relative overflow-hidden rounded-2xl">
              <Link href={"/collection/suming"} className="relative  ">
                <img
                  src="https://res.cloudinary.com/arifulislam/image/upload/v1709795099/swimm_shop-min_ojb7nf.jpg"
                  alt="Shoes"
                  className=" w-full h-60 md:h-96 object-cover transition duration-300 ease-in-out"
                />{" "}
              </Link>
              <div className="absolute text-black bottom-0 text-center  w-full">
                <h2 className="md:text-xl font-bold">Suming costume</h2>
                <Link
                  title="shop now"
                  className="font-normal underline"
                  href={"weading"}
                >
                  shop now
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            {" "}
            <div className="relative overflow-hidden rounded-2xl">
              <Link href={"/collection/facewash"} className="relative  ">
                <img
                  src="https://res.cloudinary.com/arifulislam/image/upload/v1709795098/skincare_hero-min_siodmt.jpg"
                  alt="Shoes"
                  className="w-full h-60 md:h-96 object-cover transition duration-300 ease-in-out"
                />{" "}
              </Link>
              <div className="absolute text-black bottom-0 text-center  w-full">
                <h2 className="md:text-xl font-bold">Face whash</h2>
                <Link
                  title="shop now"
                  className="font-normal underline"
                  href={"weading"}
                >
                  shop now
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            {" "}
            <div className="relative overflow-hidden rounded-2xl">
              <Link href={"/collection/eayglass"} className="relative  ">
                <img
                  src="https://res.cloudinary.com/arifulislam/image/upload/v1709811346/pexels-antony-trivet-9980356_oypwtc.jpg"
                  alt="Shoes"
                  className=" w-full h-60 md:h-96 object-cover transition duration-300 ease-in-out"
                />{" "}
              </Link>
              <div className="absolute text-black bottom-0 text-center w-full">
                <h2 className="md:text-xl font-bold">Proctet your Eay</h2>
                <Link
                  title="shop now"
                  className="font-normal underline"
                  href={"weading"}
                >
                  shop now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative grid sm:grid-cols-2 md:grid-cols-1 sm:gap-4 md:gap-0 ">
          {" "}
          <div className=" relative overflow-hidden rounded-2xl">
            <Link href={"/collection/game"} className="">
              <img
                src="https://res.cloudinary.com/arifulislam/image/upload/v1711597992/PS5_uidhh6.jpg"
                alt="wedding dresh"
                className="w-full h-48 "
              />{" "}
            </Link>

            <div className=" absolute bottom-0 text-center text-black w-full">
              <h2 className="md:text-xl font-light">Game PS5 </h2>
              <Link
                title="shop now"
                className="font-light underline"
                href={"weading"}
              >
                shop now
              </Link>
            </div>
          </div>
          <div className=" relative overflow-hidden py-1 rounded-2xl">
            <Link href={"/collection/watch"} className="">
              <img
                src="https://res.cloudinary.com/arifulislam/image/upload/v1711598713/2151039316_ltx4nt.jpg"
                alt="wedding dresh"
                className="w-full h-48 "
              />{" "}
            </Link>

            <div className=" absolute bottom-0 text-center text-black w-full">
              <h2 className="md:text-xl font-light">smart watch </h2>
              <Link
                title="shop now"
                className="font-light underline"
                href={"weading"}
              >
                shop now
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-2 hidden md:block lg:hidden ">
          <div className="relative    ">
            {" "}
            <div className="relative items-center ml-2  overflow-hidden  rounded-2xl">
              <img
                src="https://res.cloudinary.com/arifulislam/image/upload/v1710836269/Frame_1_yhdlf0.jpg"
                alt="Shoes"
                className="w-full h-24 md:h-40 "
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
            </div>
          </div>
        </div>
        {/* <div className="h-96 carousel  carousel-vertical  rounded-box">
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
        </div> */}
      </div>
      <div className="col-span-2 md:hidden lg:block ">
        <div className="relative    ">
          {" "}
          <div className="relative items-center ml-2 sm:ml-10   md:ml-20 lg:ml-40  overflow-hidden sm:w-1/2 md:w-2/3 rounded-2xl">
            <img
              src="https://res.cloudinary.com/arifulislam/image/upload/v1710836269/Frame_1_yhdlf0.jpg"
              alt="Shoes"
              className="w-full h-24 md:h-40 "
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
