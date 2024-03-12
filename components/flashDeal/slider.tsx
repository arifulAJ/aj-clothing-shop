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
          infinite: true,
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
      <div className="text-right   mb-12">
        <button className="button px-2 bg-primary " onClick={previous}>
          Previous
        </button>
        <button className="button px-2 bg-black" onClick={next}>
          Next
        </button>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {item.map((slide, index) => {
          return (
            <div key={index}>
              <Link href={`/product/${slide.slug}`}>
                <img className="h-40 " src={slide.image} alt="" />
                <p>Now {(slide.price * 0.65).toFixed(4)}</p>
                <h3>{slide.name}</h3>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Responsive;
