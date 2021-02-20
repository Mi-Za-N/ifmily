import React from 'react';
import Slider from './components/Slider';
import { IMAGE_URL } from "../../common/baseUrl";



const AppSlider = ({ sliderImgs, deviceType: { mobile, tablet, desktop }}) => {
  const sliders = [
    IMAGE_URL + 'slider/' + sliderImgs[0].slider_pic,
    IMAGE_URL + 'slider/' + sliderImgs[1].slider_pic,
    IMAGE_URL + 'slider/' + sliderImgs[2].slider_pic,
    IMAGE_URL + 'slider/' + sliderImgs[3].slider_pic,
]
  return (
     <Slider deviceType={mobile} slides={sliders} autoPlay={2} />
  );
};

export default AppSlider;


// import React from "react";
// import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";
// import {baseURL, IMAGE_URL } from "../../common/baseUrl";



// // .sliderimg {
// //   width: 100%;
// //   height: 500px;
// //   object-fit: cover;
// // }

// export default function App({sliderImgs}) {
// //     const sliders = [
// //     IMAGE_URL + 'slider/' + sliderImgs[0].slider_pic,
// //     IMAGE_URL + 'slider/' + sliderImgs[1].slider_pic,
// //     IMAGE_URL + 'slider/' + sliderImgs[2].slider_pic,
// //     IMAGE_URL + 'slider/' + sliderImgs[3].slider_pic,
// // ]
//   return (
//     <div className="App">
//      <AliceCarousel autoPlay autoPlayInterval="1000">
//       <img src={IMAGE_URL + 'slider/' + sliderImgs[0].slider_pic} className={{
//         width: "100%", 
//         height: "500px", 
//         // object-fit: "cover",
//         }} 
//         alt=""/>
//       <img src={IMAGE_URL + 'slider/' + sliderImgs[1].slider_pic} className={{
//         width: "100%", 
//         height: "500px", 
//         // object-fit: "cover",
//       }} alt=""/>
//       <img src={IMAGE_URL + 'slider/' + sliderImgs[2].slider_pic} className={{
//         width: "100%", 
//         height: "500px", 
//         // object-fit: "cover",
//       }} alt=""/>
//       <img src={IMAGE_URL + 'slider/' + sliderImgs[3].slider_pic} className={{
//         width: "100%", 
//         height: "500px", 
//         // object-fit: "cover",
//       }} alt=""/>
//     </AliceCarousel>
//     </div>
//   );
// }





