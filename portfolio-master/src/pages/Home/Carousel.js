import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import Section from 'components/Section'

import img0 from '../../assets/0/0.jpg';
// import img1 from '../../assets/01.jpg';
import img2 from '../../assets/0/2.jpg';
import img3 from '../../assets/0/3.jpg';
// import img4 from '../../assets/04.jpg';
import img5 from '../../assets/0/5.jpg';
import img6 from '../../assets/0/6.jpg';
import img7 from '../../assets/0/7.jpg';
// import img8 from '../../assets/08.jpg';
import img1 from '../../assets/0/1.jpg';
// import img22 from '../../assets/2.jpg';
// import img33 from '../../assets/3.jpg';
import img4 from '../../assets/0/4.jpg';
// import img55 from '../../assets/5.jpg';
// import img66 from '../../assets/6.jpg';
// import img77 from '../../assets/7.jpg';
import img8 from '../../assets/0/8.jpg';
//
// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style,  background: "red" ,width:"10px" }}
//             onClick={onClick}
//         />
//     );
// }
//
// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, background: "green" }}
//             onClick={onClick}
//         />
//     );
// }


export default function SimpleSlider({id, visible, sectionRef}) {
    const titleId = `${id}-title`
    var settings = {
        dots: true,
        infinite: true,
        // lazyLoad: true,
        adaptiveHeight: false,
        draggable: false ,
        slidesToScroll: 1,
        autoplaySpeed: 2500,
        className:"cur",
        slidesToShow:1,
        easing:true,
        // arrows: false,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />
    };
    return (
        <Section
            as="section"
            id={id}
            ref={sectionRef}
            aria-labelledby={titleId}
            tabIndex={-1}
            className="parkCarousel"
        >
            <div className="container_wrapper">
                <div className="container">
                    <Slider {...settings}>

                        <div>
                            <img src={img0} alt="" className="bottom-border"/>
                            <a>???????????????Fuxing Garden????????????????????????105????????????????????????????????????????????????????????????????????????????????????????????????1995??????????????????8.89??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</a>
                        </div>

                        <div>
                            <img src={img5} alt="" className="bottom-border"/>
                            <a>???????????????Huangpu park????????????????????????????????????28????????????31??????????????????10.92???????????????????????????????????????????????????????????????????????????????????????????????????????????????1868???8???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</a>
                        </div>

                        <div >
                            <img src={img4} alt="" className="bottom-border"/>
                            <a>???????????????Zhong Shan Park????????????????????????????????????????????????????????????780????????????????????????1914 ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????20??????????????????????????????????????????????????????120?????????</a>
                        </div>

                        <div>
                            <img src={img3} alt="" className="bottom-border"/>
                            <a>???????????????Lu Xun Park???????????????????????????????????????????????????????????????????????????280???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????10????????????????????????????????????</a>
                        </div>

                        <div>
                            <img src={img1} alt="" className="bottom-border"/>
                            <a>?????????Yu Garden??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</a>
                        </div>

                        <div>
                            <img src={img2} alt="" className="bottom-border"/>
                            <a>????????????Guyi Garden?????????????????????????????????????????????AAAA????????????????????????????????????????????????????????????????????????????????????????????????????????????1522???1566??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</a>
                        </div>

                        <div>
                            <img src={img6} alt="" className="bottom-border"/>
                            <a>????????????Qiu Xia Pu?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????45.36????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</a>
                        </div>

                        <div>
                            <img src={img8} alt="" className="bottom-border"/>
                            <a>????????????Zuibai Pool???????????????????????????????????????????????????????????????????????????????????????????????????????????????300???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                            </a>
                        </div>

                        <div>
                            <img src={img7} alt="" className="bottom-border"/>
                            <a>????????????Qushui Garden?????????????????????????????????612???????????????????????????????????????1745???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????1784???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</a>
                        </div>

                        {/*<img src={img11} alt=""/>*/}


                        {/*<div>*/}
                        {/*    <img src={img22} alt={""}/>*/}
                        {/*</div>*/}


                        {/*<div>*/}
                        {/*    <img src={img33} alt={""}/>*/}
                        {/*</div>*/}



                        {/*<div>*/}
                        {/*    <img src={img4} alt=""/>*/}
                        {/*</div>*/}


                        {/*<div>*/}
                        {/*    <img src={img55} alt=""/>*/}
                        {/*</div>*/}

                        {/*<div className="no-left">*/}
                        {/*    <img src={img66} alt=""/>*/}
                        {/*</div>*/}


                        {/*<div className="no-left">*/}
                        {/*    <img src={img77} alt=""/>*/}
                        {/*</div>*/}



                        {/*<div>*/}
                        {/*    <img src={img8} alt=""/>*/}
                        {/*</div>*/}

                    </Slider>
                </div>
            </div>
        </Section>
    );
}