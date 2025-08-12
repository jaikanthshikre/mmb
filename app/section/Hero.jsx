
/* import { useState, useEffect, useRef } from 'react' */


// Make sure your images are placed in public/images/ with correct casing (e.g. public/images/imagethree.png)
/* const slides = [
  { id: 1, image: '/imagethree.png' },
  { id: 3, image: '/imageone.png' },
] */

/* export default function HeroSlider() {  */
  // create clones for infinite looping
 /*  const slidesWithClones = [
    slides[slides.length - 1],
    ...slides,
    slides[0],
  ]

  const [current, setCurrent] = useState(1)
  const sliderRef = useRef(null)
  const autoRef = useRef(null)

  useEffect(() => { */
    // Preload every slide asset to avoid blank frames
    /* slidesWithClones.forEach(({ image }) => {
      const img = new window.Image()
      img.src = image
    }) */
    // Start auto-play timer
   /*  play()
    return () => clearTimeout(autoRef.current)
  }, [current])

  function play() {
    clearTimeout(autoRef.current)
    autoRef.current = setTimeout(goNext, 3000)
  }

  function goNext() {
    if (!sliderRef.current) return
    sliderRef.current.style.transition = 'transform 0.7s ease-in-out'
    setCurrent((prev) => prev + 1)
  }

  function goPrev() {
    if (!sliderRef.current) return
    sliderRef.current.style.transition = 'transform 0.7s ease-in-out'
    setCurrent((prev) => prev - 1)
  }

  function handleTransitionEnd() {
    if (!sliderRef.current) return */
    // Jump from clone of last slide to real first
    /* if (current === slidesWithClones.length - 1) {
      sliderRef.current.style.transition = 'none'
      setCurrent(1)
    } */
    // Jump from clone of first slide to real last
  /*   if (current === 0) {
      sliderRef.current.style.transition = 'none'
      setCurrent(slides.length)
    }
  }

  return (
    <div className="relative w-full h-[30vh] md:h-screen overflow-hidden"> */
      {/* slides container */}
    /*   <div
        ref={sliderRef}
        onTransitionEnd={handleTransitionEnd}
        className="flex h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slidesWithClones.map((slide, idx) => (
          <div key={idx} className="relative flex-shrink-0 w-full h-full">
            <Image
              src={slide.image}
              alt={`slide-${slide.id}`}
              fill
              className="object-cover"
              priority={idx === 1}
              loading={idx === 1 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        ))}
      </div> */

      {/* Previous arrow (optional) */}
     /*  <button
        onClick={goPrev}
        className="hidden md:flex absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
      >
        &#8592;
      </button> */
      {/* Next arrow (optional) */}
     /*  <button
        onClick={goNext}
        className="hidden md:flex absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
      >
        &#8594;
      </button>
 */
      {/* pagination dots */}
    /*   <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (sliderRef.current) sliderRef.current.style.transition = 'transform 0.7s ease-in-out'
              setCurrent(idx + 1)
            }}
            className={`w-3 h-3 rounded-full transition ${
              current === idx + 1 ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
 */

import React from 'react'
import Image from 'next/image'
export const Hero = () => {
  return (
    <div><img src="/imagethree.png" alt="" /></div>
  )
}
