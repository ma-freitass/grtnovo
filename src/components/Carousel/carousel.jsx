import Slider from "react-slick";

// Imagens
import Img1 from "../../assets/img1.jpg";
import Img2 from "../../assets/img2.jpg";
import Img4 from "../../assets/img4.jpg";
import Img5 from "../../assets/img5.jpg";
import Img6 from "../../assets/img6.jpg";
import Img7 from "../../assets/img7.jpg";
import Img8 from "../../assets/img8.jpg";
import Img10 from "../../assets/img10.jpg";
import Img12 from "../../assets/img12.jpg";
import Img14 from "../../assets/img14.jpg";
import Img15 from "../../assets/img15.jpg";
import Img16 from "../../assets/img16.jpg";
import Img17 from "../../assets/img17.jpg";
import Img20 from "../../assets/img20.jpg";
import Img21 from "../../assets/img21.jpg";
import Img22 from "../../assets/img22.jpg";
import Img40 from "../../assets/img40.jpg";
import Img41 from "../../assets/Img41.jpg";
import Img42 from "../../assets/Img42.jpg";     
import Img43 from "../../assets/Img43.jpg";
import Img44 from "../../assets/Img44.jpg";
import Img45 from "../../assets/Img45.jpg";
import Img46 from "../../assets/Img46.jpg";
import Img47 from "../../assets/Img47.jpg";
import Img48 from "../../assets/Img48.jpg";
import Img49 from "../../assets/Img49.jpg";
import Img50 from "../../assets/Img50.jpg";
import Img51 from "../../assets/Img51.jpg";
import Img52 from "../../assets/Img52.jpg";
import Img53 from "../../assets/Img53.jpg"; 
import Img54 from "../../assets/Img54.jpg";
import Img55 from "../../assets/Img55.jpg";
import Img56 from "../../assets/Img56.jpg";
import Img57 from "../../assets/Img57.jpg";
import Img58 from "../../assets/Img58.jpg";
import Img59 from "../../assets/Img59.jpg";
import Img60 from "../../assets/Img60.jpg";
import Img61 from "../../assets/Img61.jpg";
import Img62 from "../../assets/Img62.jpg";
import Img63 from "../../assets/Img63.jpg";

export default function Carousel() {
  const images = [
    Img1, Img2, Img4, Img5, Img6, Img7, Img8,
    Img10, Img12, Img14, Img15, Img16, Img17,
    Img20, Img21, Img22, Img40, Img41, Img42,
    Img43, Img44, Img45, Img46, Img47, Img48,
    Img49, Img50, Img51, Img52, Img53, Img54,
    Img55, Img56, Img57, Img58, Img59, Img60,
    Img61, Img62, Img63
  ];

  const settings = {
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-white overflow-hidden py-8">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-2">
            <div className="h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src={src}
                alt={`Imagem ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
