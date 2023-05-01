import { useState, useEffect, useImperativeHandle } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import './style.scss';

export default function SwiperCpn(props = {}) {
  const {children = [], cpnRef = {}} = props;
  return (
    <Swiper onSwiper={ins => {cpnRef.current = ins}} className="mySwiper" onSlideChange={props.onChange}>
      {
        children.map((Child, i) => {
          return <SwiperSlide key={i} virtualIndex={i}><div>{Child}</div></SwiperSlide>
        })
      }
    </Swiper>
  )
}