"use client"

import { SectionHeader } from "@/components/section-header/section-header"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

const faqData = [
  {
    question: "Why is Lorem Ipsum Dolor used?",
    answer:
      "The most used version of Lorem Ipsum is the standard passage from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' by Cicero.",
  },
  {
    question: "What is the meaning of Lorem ipsum?",
    answer:
      "The most used version of Lorem Ipsum is the standard passage from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' by Cicero.",
  },
  {
    question: "What is the most used version?",
    answer:
      "The most used version of Lorem Ipsum is the standard passage from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' by Cicero.",
  },
  {
    question: "What are the origins of Lorem Ipsum Dolor Sit?",
    answer:
      "The most used version of Lorem Ipsum is the standard passage from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' by Cicero.",
  },
]

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1)

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className="flex flex-col items-center justify-center mt-24 gap-12 max-w-[1110px] w-full px-4 lg:px-0 mx-auto">
      <SectionHeader
        title={"FAQ"}
        description={"Some frequently asked questions for you"}
      />

      <div className="flex flex-col gap-8 my-2 w-full">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`bg-white shadow-[0px_8px_32px_rgba(0,0,0,0.12)] rounded-2xl p-6 transition-all duration-300 ${
              openIndex === index ? "gap-6" : "gap-2"
            } flex flex-col w-full px-4  lg:max-w-[900px] lg:mx-auto`}>
            <div
              className="flex justify-between items-start cursor-pointer"
              onClick={() => toggleItem(index)}>
              <h3
                className={`text-[20px] font-bold leading-[30px] tracking-[0.6px] ${
                  openIndex === index ? "text-[#8236C8]" : "text-[#1E272F]"
                }`}>
                {item.question}
              </h3>
              <div className="w-6 h-6 text-[#8236C8]">
                {openIndex === index ? (
                  <ChevronUp size={24} />
                ) : (
                  <ChevronDown size={24} />
                )}
              </div>
            </div>
            {openIndex === index && (
              <p className="text-[16px] leading-[26px] tracking-[0.6px] text-[#1E272FCC]">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
