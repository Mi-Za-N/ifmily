import React, { useState, useEffect, useRef } from 'react'
import { css } from '@emotion/css';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import Dots from './Dots';


  


const Slider = props => {
  const dv = props.deviceType;
    const [width, setWidth] = React.useState(0);
    React.useEffect(() => {
      if(dv) {
          setWidth(window.innerWidth);
      } else {
        setWidth(window.innerWidth - 200);
      }
      
    });
   

  const { slides } = props;

  const firstSlide = slides[0]
  const secondSlide = slides[1]
  const lastSlide = slides[slides.length - 1]

  const [state, setState] = useState({
    activeSlide: 0,
    translate: width,
    transition: 0.55,
    _slides: [lastSlide, firstSlide, secondSlide]
  })

  const { activeSlide, translate, _slides, transition } = state

  const autoPlayRef = useRef()
  const transitionRef = useRef()

  useEffect(() => {
    autoPlayRef.current = nextSlide
    transitionRef.current = smoothTransition
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }

    const smooth = () => {
      transitionRef.current()
    }

    const interval = setInterval(play, props.autoPlay * 1000)
    const transitionEnd = window.addEventListener('transitionend', smooth)

    return () => {
      clearInterval(interval)
      window.removeEventListener('transitionend', transitionEnd)
      // window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 })
  }, [transition])

  const smoothTransition = () => {
    let _slides = []

    // We're at the last slide.
    if (activeSlide === slides.length - 1)
      _slides = [slides[slides.length - 2], lastSlide, firstSlide]
    // We're back at the first slide. Just reset to how it was on initial render
    else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide]
    // Create an array of the previous last slide, and the next two slides that follow it.
    else _slides = slides.slice(activeSlide - 1, activeSlide + 2)

    setState({
      ...state,
      _slides,
      transition: 0,
      translate: width
    })
  }

  const nextSlide = () =>
    setState({
      ...state,
      translate: translate + width,
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1
    })

  const prevSlide = () =>
    setState({
      ...state,
      translate: 0,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1
    })

  return (
    <div className={SliderCSS}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={width * _slides.length}
      >
        {_slides.map((_slide, i) => (
          <Slide width={width} key={_slide + i} content={_slide} />
        ))}
      </SliderContent>

      {/* <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} /> */}

      <Dots slides={slides} activeSlide={activeSlide} />
    </div>
  )
}

const SliderCSS = css`
  position: relative;
  height: 50vh;
  width:  75vw;
  @media (max-width: 575px) {
    width:  100vw;
    height: 30vh;
  }
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
`

export default Slider
