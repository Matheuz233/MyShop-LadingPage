"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"

const images = [
  {
    src: "/carousel/image-1.webp",
    caption: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    src: "/carousel/image-2.webp",
    caption: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    src: "/carousel/image-3.webp",
    caption: "Lorem Ipsum is simply dummy text of the printing",
  },
]

export function ImagesCarousel() {
  const [current, setCurrent] = useState(0)

  function prev() {
    setCurrent((current - 1 + images.length) % images.length)
  }

  const next = useCallback(() => {
    setCurrent((current) => (current + 1) % images.length);
  }, []);

  function goTo(index: number) {
    setCurrent(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 3000)

    return () => clearInterval(interval)
  }, [next])

  return (
    <div>
      <div className="flex justify-center items-center gap-4 p-8 min-h-[250px] rounded-md overflow-hidden">
        <div className="hidden md:block w-[730px] aspect-[15/9] relative">
          <motion.div
            key={`left-${current}`}
            initial={{ scale: 0.8, opacity: 0.4 }}
            animate={{ scale: 0.8, opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="h-full w-full rounded-lg opacity-50 cursor-pointer will-change-transform"
            onClick={prev}
            style={{ transform: "translateZ(0)" }}
          >
            <Image
              src={images[(current - 1 + images.length) % images.length].src}
              alt="Preview left"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 0px, 730px"
              loading="lazy"
            />
          </motion.div>
        </div>

        <div className="max-w-[920px] md:w-[920px] aspect-[15/9] relative">
          <motion.div
            key={`center-${current}`}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full h-full rounded-lg cursor-pointer shadow-lg will-change-transform"
            onClick={next}
            style={{ transform: "translateZ(0)" }}
          >
            <Image
              src={images[current].src}
              alt={`Image ${current + 1}`}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 920px"
              priority
            />
          </motion.div>
        </div>

        <div className="hidden md:block w-[730px] aspect-[15/9] relative">
          <motion.div
            key={`right-${current}`}
            initial={{ scale: 0.8, opacity: 0.4 }}
            animate={{ scale: 0.8, opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="h-full w-full rounded-lg opacity-50 cursor-pointer will-change-transform"
            onClick={next}
            style={{ transform: "translateZ(0)" }}
          >
            <Image
              src={images[(current + 1) % images.length].src}
              alt="Preview right"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 0px, 730px"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>

      <div className="mt-6 text-black-100 text-opacity-[80%] text-body-md text-center">
        {images[current].caption}
      </div>

      <div className="mt-8 flex gap-2 justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to image ${index + 1}`}
            onClick={() => goTo(index)}
            className={`p-2 rounded-full transition-colors duration-200 will-change-auto ${current === index ? "bg-purple-600" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  )
}
