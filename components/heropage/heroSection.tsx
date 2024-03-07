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
    <div className="px-1 md:px-4 lg:px-24 py-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  overflow-y-hidden  py-2 pb-6">
        {/* left item of hero */}
        <div className="  relative ">
          <figure className="relative overflow-hidden rounded-2xl">
            <img
              src="https://res.cloudinary.com/arifulislam/image/upload/v1709797351/cloth-min-removebg-preview-min_trfjl1.png"
              alt="Shoes"
              className="md:w-full md:h-96  object-cover"
            />
            <div className="absolute inset-0 flex items-end justify-center  -translate-y-10">
              <div className="text-center text-black">
                <h2 className="text-xl font-bold">The weading dresh</h2>
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
        </div>
        {/* middel item of hero */}
        <div
          className="h-96 w-full md:col-span-2  carousel carousel-vertical rounded-box"
          ref={carouselRef}
        >
          {" "}
          <div className="carousel-item relative w-full h-full">
            <img src="https://res.cloudinary.com/arifulislam/image/upload/v1709795099/swimm_shop-min_ojb7nf.jpg" />

            <div className="absolute inset-0 flex items-end justify-center  -translate-y-5">
              <div className="text-center text-black">
                <h2 className="text-xl font-bold">The weading dresh</h2>
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
          <div className="carousel-item relative w-full h-full">
            <img src="https://res.cloudinary.com/arifulislam/image/upload/v1709795098/skincare_hero-min_siodmt.jpg" />

            <div className="absolute inset-0 flex items-end justify-center  -translate-y-5">
              <div className="text-center text-black">
                <h2 className="text-xl font-bold">The weading dresh</h2>
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
          <div className="carousel-item relative w-full h-full">
            <img src="https://res.cloudinary.com/arifulislam/image/upload/v1709811346/pexels-antony-trivet-9980356_oypwtc.jpg" />

            <div className="absolute inset-0 flex items-end justify-center  -translate-y-5">
              <div className="text-center text-black">
                <h2 className="text-xl font-bold">The weading dresh</h2>
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
        <div className="carousel md:w-full">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
              className="w-full md:h-96"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
              className="w-full"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>{" "}
      </div>
    </div>
  );
}

export default HeroSection;
