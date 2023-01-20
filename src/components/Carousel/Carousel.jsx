import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import 'swiper/css/navigation';
import "./Carousel.css";
import Sweatshirt1 from "../../public/assets/images/sweatshirt-1.png";
import Sweatshirt2 from "../../public/assets/images/sweatshirt-2.png";
import SweatPants from "../../public/assets/images/sweatpants.png";
import { useState } from "react";

export const carouselData = [
  {
    id: 1,
    img: Sweatshirt1,
    title: "365 Signature Hoodie",
    price: "33.95",
    color: ["green", "brown", "purple", "light-green"],
  },
  {
    id: 2,
    img: SweatPants,
    title: "Organic Skinny High Waist Jeans",
    price: "33.95",
    color: ["green", "brown", "purple", "light-green"],
  },
  {
    id: 3,
    img: Sweatshirt2,
    title: "Organic Skinny High Waist Jeans",
    price: "33.95",
    color: ["green", "brown", "purple", "light-green"],
  },
  {
    id: 4,
    img: Sweatshirt1,
    title: "365 Signature Hoodie",
    price: "33.95",
    color: ["green", "brown", "purple", "light-green"],
  },
  {
    id: 5,
    img: SweatPants,
    title: "Organic Skinny High Waist Jeans",
    price: "33.95",
    color: ["green", "brown", "purple", "light-green"],
  },
  {
    id: 6,
    img: Sweatshirt2,
    title: "365 Signature Hoodie",
    price: "33.95",
    color: ["green", "brown", "purple", "light-green"],
  },
];
export default function Carousel() {
  const [clicked, setClicked] = useState("green");
  return (
    <section className="carousel">
      <Swiper navigation modules={[Navigation]} breakpoints={
        {
            1024:{
                width:1024,
                slidesPerView:3,
                spaceBetween:32,
            },
            360:{
                width:360,
                slidesPerView:2,
                spaceBetween: 12,
            }
        }
      } >
        {carouselData.map(({ id, img, title, price, color }) => (
          <SwiperSlide key={id}>
            <div className="product-card_wrapper">
              <img src={img} alt="product-1" />
              <p style={{margin:"12px 0 4px 0"}}>{title}</p>
              <div className="flex">
                <p style={{ fontWeight: 500, margin:0 }}>£{price}</p>
                <div className="flex">
                  {color.map((item, i) => (
                    <div onClick={() => setClicked(item)}>
                      <div
                        className={`dot ${item} ${
                          clicked === item ? "click" : ""
                        }`}
                        key={i}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
