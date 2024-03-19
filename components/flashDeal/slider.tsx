"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Product } from "@/lib/models/ProductModels";
import Link from "next/link";

function Responsive({ item }: { item: Product[] }) {
  let sliderRef = useRef<Slider>(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,

    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container py-6">
      <div className="text-right text-white   mb-12">
        <button
          className="button px-2 mx-2 bg-orange-400 rounded "
          onClick={previous}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button className="button px-2 bg-orange-400 rounded" onClick={next}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {item.map((slide, index) => {
          if (slide.discounts && slide.discounts > 0) {
            return (
              <div className=" p-2" key={index}>
                <Link href={`/product/${slide.slug}`}>
                  <img
                    className=" w-full h-60 rounded "
                    src={slide.image}
                    alt={slide.name}
                  />

                  <p className="flex justify-between py-2">
                    <span className="text-green-900  font-semibold ">
                      Now ${slide.price - slide.price * slide.discounts}
                    </span>{" "}
                    <span className=" line-through text-gray-600">
                      ${slide.price}
                    </span>
                  </p>
                  <p className="text-black">{slide.name}</p>
                </Link>
              </div>
            );
          } else {
            return null; // Skip rendering this slide if it doesn't have discounts
          }
        })}
      </Slider>
    </div>
  );
}

export default Responsive;
