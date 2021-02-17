import React, { memo } from 'react'
import { css } from '@emotion/css'

const Dot = ({ active }) => {
  return (
    <span
      className={css`
        padding: 6px;
        margin-right: 5px;
        cursor: pointer;
        border-radius: 50%;
        background: ${active ? 'black' : 'white'};
      `}
    />
  )
}

const MemoDot = memo(Dot)

const Dots = ({ slides, activeSlide }) => {
  return (
    <div
      className={css`
        position: absolute;
        bottom: 25px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      {slides.map((slide, i) => (
        <MemoDot key={slide} active={activeSlide === i} />
      ))}
    </div>
  )
}

export default Dots
