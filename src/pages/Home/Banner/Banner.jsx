import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      imgSrc: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg",
    },
    {
      imgSrc: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg",
    },
    {
      imgSrc: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg",
    },
  ];

  return (
    <div className="banner">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img
              src={slide.imgSrc}
              className="block w-full h-[50vh]"
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute inset-x-0 bottom-5 py-5 text-center text-white md:block"></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
