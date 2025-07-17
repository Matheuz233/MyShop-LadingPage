"use client"

import { SectionHeader } from "@/components/section-header/section-header";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Oleh Chabanov",
    role: "UX/UI Designer",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    color: "bg-purple-600"
  },
  {
    name: "Jane Cooper",
    role: "UX/UI Designer",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    color: "bg-blue-600"
  },
  {
    name: "Wade Warren",
    role: "UX/UI Designer",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    color: "bg-emerald-600"
  },
  {
    name: "Albert Flores",
    role: "Product Designer",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    color: "bg-pink-600"
  },
  {
    name: "Courtney Henry",
    role: "UI Designer",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    color: "bg-yellow-500"
  },
  {
    name: "Theresa Webb",
    role: "UX Researcher",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    color: "bg-red-500"
  },
  {
    name: "Bessie Cooper",
    role: "UX/UI Designer",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    color: "bg-teal-600"
  },
  {
    name: "Cody Fisher",
    role: "Frontend Developer",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    color: "bg-indigo-600"
  },
  {
    name: "Darlene Robertson",
    role: "Product Manager",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    color: "bg-orange-500"
  }
];

export const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 1024 ? 1 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const goToPage = (i: number) => setIndex(i);

  const currentTestimonials = testimonials.slice(
    index * itemsPerPage,
    index * itemsPerPage + itemsPerPage
  );

  return (
    <section className="w-full flex flex-col items-center gap-12 max-w-[1238px] mx-auto py-12 relative">
      <SectionHeader title={"Testimonials"} description={"Lorem Ipsum is simply dummy text of the printing"} />

      <div className="flex items-center justify-center gap-6 relative w-full">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-[-60px] w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hidden lg:flex"
        >
          <ChevronLeft className="text-[#1E272F66]" />
        </button>

        <div
          className={`flex gap-6 w-full justify-center ${itemsPerPage === 1 ? "flex-col items-center" : "flex-row"
            }`}
        >
          {currentTestimonials.map((item, i) => (
            <div
              key={`${index}-${i}`}
              className="opacity-100 flex flex-col gap-4 w-[350px] h-[168px] will-change-auto"
            >
              <p className="text-[16px] leading-[26px] text-[#1E272FCC]">
                {item.text}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${item.color}`}
                >
                  <User size={24} />
                </div>

                <div>
                  <p className="font-bold text-[16px] leading-[26px] text-[#1E272F]">
                    {item.name}
                  </p>
                  <p className="text-[14px] leading-[22px] text-[#1E272FCC]">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-[-60px] w-10 h-10 rounded-full bg-white shadow-md  items-center justify-center flex"
        >
          <ChevronRight className="text-[#1E272F66]" />
        </button>
      </div>

      <div className="flex gap-3 mt-4">
        {Array.from({ length: totalPages }).map((_, pageIndex) => {
          const isActive = pageIndex === index;
          return (
            <button
              key={pageIndex}
              aria-label={`Go to page ${pageIndex + 1}`}
              onClick={() => goToPage(pageIndex)}
              className={`p-2 rounded-full transition-all ${isActive ? "bg-purple-600" : "bg-gray-300"}`}
            />
          );
        })}
      </div>
    </section>
  );
}