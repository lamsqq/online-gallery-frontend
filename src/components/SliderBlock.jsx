import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderBlock() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
        };
    const pictures = [
        {
        id: 1,
        img: "https://sun9-55.userapi.com/impg/2Y0Yj4LoscatUXZIw8jaLAdROxeaOlyPnvmdDQ/5i0MaT5kh_4.jpg?size=1920x900&quality=96&sign=59d802d6a8e53ed7ccc3c4229203b0cc&type=album"
        }, 
        {
        id: 2,
        img: "https://sun9-39.userapi.com/impg/s9WSl7YMRZ3J1KNLrnfd5094VcQCydH7vHN2Pg/yO_Di2saQIs.jpg?size=1920x900&quality=96&sign=ed6367cba625c861612043b3e497b126&type=album"
        }, 
        {
        id: 3,
        img: "https://sample-art.com/wp-content/uploads/2022/07/novoe-popova-4-727x1024.jpg"
        }, 
        {
        id: 4,
        img: "https://sample-art.com/wp-content/uploads/2022/08/shei-n-2-1024x845.jpg"
        }, 
        {
        id: 5,
        img: "https://sample-art.com/wp-content/uploads/2021/11/kostareva-Empty-Tram-870x1024.jpg"
        }
    ];
  return (
    <div className='slider'>
        <Slider {...settings} className='slider__tag'>
          {
            pictures.map(obj => (
              <div key={obj.id} className='slider__tag--main'>
                <img src={obj.img} alt='img' />
              </div>
            ))
          }
        </Slider>
      </div>
  )
}

export default SliderBlock