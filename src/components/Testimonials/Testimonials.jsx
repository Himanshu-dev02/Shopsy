import React from "react";
import Slider from "react-slick";
// Local testimonial images (example)
import ViratImg from "./Virat_Kohli.jpg";
import RohitImg from "./rohit sharma.jpeg";
import ShraddhaImg from "./shraddha kapoor.avif";
import VickyImg from "./vicky kaushal.jpg";

const TestimonialData = [
  {
    id: 1,
    name: "Vicky Kaushal",
    text: "Shopsy stands out with its modern designs and top-notch quality. Every outfit I’ve tried feels fresh, comfortable, and stylish. It’s become my trusted spot for online shopping.",
    img: VickyImg,
  },
  {
    id: 2,
    name: "Rohit Sharma",
    text: "What I admire about Shopsy is the variety—whether I need something trendy or timeless, I always find it here. The fabrics feel premium, and the fit is just right. Shopping has never been this effortless",
    img: RohitImg,
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Shopsy is my go-to destination for stylish, comfortable, and high-quality fashion. I love how easily I can find outfits that match both my sporty lifestyle and casual looks. Truly a game-changer in online shopping",
    img: ViratImg,
  },
  {
    id: 5,
    name: "Shraddha Kapoor",
    text: "Shopsy is all about chic fashion made simple. I adore their collection—it’s stylish, affordable, and perfect for every mood, whether I’m dressing up for a shoot or just keeping it casual. Totally love it!",
    img: ShraddhaImg,
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
             
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6" key={data.id}>
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20 object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
