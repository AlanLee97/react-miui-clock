import { useEffect, useImperativeHandle } from "react";
import './style.scss';

let id = 0;

export default function Swiper(props = {}) {
  const { cpnRef, children } = props;
  id += 1;
  let swiperPropsRes = null;
  const { width = '100vw', onChange = () => {} } = props;
  const initWidth = typeof width === "number" ? width + 'px' : width;

  const createSwiper = () => {
    let swiperWrapper = document.getElementById("swiper-wrapper_" + id); // swiper容器
    let swiper = document.getElementById("swiper_" + id); // swiper
    let swiperItems = document.getElementsByClassName("swiper-item"); // swiper-item数组
    let swiperItemCount = swiperItems.length; // swiper-item数量
    let swiperItemWidth = swiperWrapper.offsetWidth; // 单个swiper-item的宽度

    let swiperWidth = swiperWrapper.offsetWidth * swiperItems.length; // 整个swiper的宽度
    let swiperWidthStyle = `width: ${swiperWidth}px; `; // swiper宽度样式变量
    swiper.style = swiperWidthStyle; // 设置整个swiper的宽度
    let rightBound = swiperWrapper.offsetWidth * (swiperItems.length - 1); // 右边界（最后一个swiper-item的起始位置）
    let slideThreshold = swiperItemWidth / 4; // 滑动切换的阈值，这里取swiper-item宽度的1/4

    let start = 0; // 触摸起始点
    let moveX = 0; // 元素需移动的距离
    let moveDistance = 0; // 滑动距离
    let lastMove = 0; // 上次移动的位置
    let isMoved = false; // 标记是否移动过
    let currntItemIndex = 0; // 当前是第几个item

    const setMoveX = (val) => {
      moveX = val;
    }


    // 创建指示点
    const createIndicator = () => {
      let dot = document.createElement("span");
      let indicatorWrapper = document.getElementById("indicator-wrapper_" + id);

      for (let i = 0; i < swiperItemCount; i++) {
        dot.setAttribute(
          "class",
          `dot ${currntItemIndex === i ? "dot-active" : ""}`
        );
        indicatorWrapper.appendChild(dot.cloneNode(true));
      }
    };
    // 创建指示点
    // createIndicator();

    const onTouchstart = (e) => {
      start = e.changedTouches[0].pageX;
      // 拿到上次滑动的距离
      lastMove = moveX;
    };

    const onTouchmove = (e) => {
      // 设置滑动的距离
      moveDistance = e.changedTouches[0].pageX - start;
      if(Math.abs(moveDistance) < 50) return;
      // 重新设置滑动的距离
      moveX = isMoved ? lastMove + moveDistance : moveDistance;
      // 改变元素的位置
      swiper.style = `${swiperWidthStyle} transform: translateX(${moveX}px);`;
      // 标记已经滑动
      isMoved = true;
    };

    const onTouchend = (e) => {
      if(Math.abs(moveX) < 50) return;
      // 处理左边界
      if (moveX > 0) {
        moveX = 0;
      }
      // 处理右边界
      if (moveX < -rightBound) {
        moveX = -rightBound;
      }

      // 处理中间swiper-item的边界
      if (moveDistance > 0) {
        // 从左往右滑动（→）
        if (moveX > -(swiperItemWidth * currntItemIndex) + slideThreshold) {
          // 上一个item
          moveX = -(swiperItemWidth * (currntItemIndex - 1));
        } else {
          // 停留在当前item
          moveX = -(swiperItemWidth * currntItemIndex);
        }
      } else if (moveDistance < 0) {
        // 从右往左滑动（←）
        if (moveX < -(swiperItemWidth * currntItemIndex) - slideThreshold) {
          // 下一个item
          moveX = -(swiperItemWidth * (currntItemIndex + 1));
        } else {
          // 停留在当前item
          moveX = -(swiperItemWidth * currntItemIndex);
        }
      }

      // 更新样式
      swiper.style = `${swiperWidthStyle} transform: translateX(${moveX}px); transition: transform 600ms;`;

      // 计算当前index
      currntItemIndex = Math.abs(Math.round(moveX / swiperItemWidth));

      // 滑动距离恢复为0
      moveDistance = 0;

      let dots = document.getElementsByClassName("dot");
      for (let i = 0; i < dots.length; i++) {
        dots[i].setAttribute(
          "class",
          `dot ${currntItemIndex === i ? "dot-active" : ""}`
        );
      }

      onChange(currntItemIndex)
    };

    swiper.addEventListener('touchstart', onTouchstart);
    swiper.addEventListener('touchmove', onTouchmove);
    swiper.addEventListener('touchend', onTouchend);

    return {
      swiperWrapper,
      swiper,
      swiperItems,
      swiperItemCount,
      swiperItemWidth,
      swiperWidth,
      swiperWidthStyle,
      onTouchstart,
      onTouchmove,
      onTouchend,
      setMoveX
    }
  };

  useEffect(() => {
    swiperPropsRes = createSwiper();

    return function destroy() {
      let swiper = swiperPropsRes.swiper;
      if(swiper) {
        swiper.removeEventListener('touchstart', swiperPropsRes.onTouchstart);
        swiper.removeEventListener('touchmove', swiperPropsRes.onTouchmove);
        swiper.removeEventListener('touchend', swiperPropsRes.onTouchend);
      }
    }
  }, [])

  useImperativeHandle(cpnRef, () => ({
    setCurrentIndex
  }))

  const setCurrentIndex = (i) => {
    let moveX = -(i * swiperPropsRes.swiperItemWidth);
    swiperPropsRes.swiper.style = `${swiperPropsRes.swiperWidthStyle} transform: translateX(${moveX}px); transition: transform 600ms;`;
    swiperPropsRes.setMoveX(0);
  }

  return (
    <div className="cpn--swiper" ref={cpnRef}>
      <div id={"swiper-wrapper_" + id} className="swiper-wrapper" style={{width: initWidth}}>
        <div className="swiper" id={"swiper_" + id}>
          {
            children.map((item, i) => (
              <div className="swiper-item" key={'swiper-item-' + i}>{item}</div>
            ))
          }
        </div>

        {/* <div className="indicator-wrapper" id={"indicator-wrapper_" + id}></div> */}
      </div>
    </div>
  );
}
