import Slider from "react-slick";
import Img1 from "../../assets/img1.jpg"
import Img2 from "../../assets/img2.jpg"
import Img3 from "../../assets/img3.jpg"
import Img4 from "../../assets/img4.jpg"
import Img5 from "../../assets/img5.jpg"
import Img6 from "../../assets/img6.jpg"
import Img7 from "../../assets/img7.jpg"
import Img8 from "../../assets/img8.jpg"
import Img9 from "../../assets/img9.jpg"
import Img10 from "../../assets/img10.jpg"
import Img11 from "../../assets/img11.jpg"
import Img12 from "../../assets/img12.jpg"
import Img13 from "../../assets/img13.jpg"
import Img14 from "../../assets/img14.jpg"
import Img15 from "../../assets/img15.jpg"
import Img16 from "../../assets/img16.jpg"
import Img17 from "../../assets/img17.jpg"
import Img18 from "../../assets/img18.jpg"
import Img19 from "../../assets/img19.jpg"
import Img20 from "../../assets/img20.jpg"
import Img21 from "../../assets/img21.jpg"
import Img22 from "../../assets/img22.jpg"
import Img23 from "../../assets/img23.jpg"


export default function Carousel() {
    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-faixa1 text-primary p-3 rounded-full shadow-md hover:bg-faixa transition z-10"
                onClick={onClick}
            >
                ❮
            </button>
        );
    }

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-faixa1 text-primary p-3 rounded-full shadow-md hover:bg-faixa transition z-10"
                onClick={onClick}
            >
                ❯
            </button>
        );
    };
    const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19, Img20, Img21, Img22, Img23,];
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        //waitForAnimate: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <div className="w-full max-w-2xl mx-auto mt-10 shadow-lg rounded-lg overflow-hidden">
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index} className="flex justify-center">
                        <img src={src} alt={`Slide ${index + 1}`} className="w-full h-96 object-contain rounded-lg p-9" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
