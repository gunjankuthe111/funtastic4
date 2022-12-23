import React from "react";
import {Box, Center, Heading, Stack} from "@chakra-ui/react";
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
// Pics
import Logo from "./Image/logo.jpg"
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import Slider from "react-slick"

import {Autoplay,Pagination,Navigation} from "swiper";

import { useState } from "react";

const AuthSlider = () => {
    const [data,setData] = useState(sliderData);
    console.log(data)

    const settings = {
        dots : true,
        infinite:true,
        speed:100,
        slidesToShow:1,
        SlidesToScroll:1,
    }

    return (
        <Box 
        // border={"1px solid green"}
        width="100%"
        margin={"auto"}
        >
            <Swiper
            // spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
            //   disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay,Pagination, Navigation]}
            className="mySwiper"
            >
                {
                    data?.map((item) => (
                        <Box>
                            <SwiperSlide>
                                <Box >
                                    <Box>
                                       
                                        <Center> 
                                        <Image style={{borderRadius: '50%'}} src={item.imgUrl} height={100}/>
                                        </Center>

                                       
                                    </Box>
                                    <Box textAlign={"center"}>
                                        <Heading>{item.title}</Heading>
                                    </Box>
                                    <br/>
                                    <br/>
                                </Box>
                            </SwiperSlide>
                        </Box>
                    ))}
      
    
            </Swiper>
        </Box>
    )
    
}
export default AuthSlider;



const sliderData = [
    {
      id:1,
      imgUrl: Logo,
      title: "News Feed",
    },
    {
      id : 2,
      imgUrl: Logo,
      title: "Connect with Friends",
    },
    {
      id : 3,
      imgUrl: Logo,
      title: "Chat",
    },
    {
      id : 4,
      imgUrl: Logo,
      title: "View Stories",
    },
    {
      id : 5,
      imgUrl: Logo,
      title: "Follow Friends",
    },
  ];