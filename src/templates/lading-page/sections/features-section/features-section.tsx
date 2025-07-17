import { SectionHeader } from "@/components/section-header/section-header"
import Image from "next/image"

const features = [
  {
    iconSrc: "/icons/star.svg",
    iconAlt: "feature icon",
    title: "Headline",
    description: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    iconSrc: "/icons/shild.svg",
    iconAlt: "feature icon",
    title: "Headline",
    description: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    iconSrc: "/icons/like.svg",
    iconAlt: "feature icon",
    title: "Headline",
    description: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    iconSrc: "/icons/chat-support.svg",
    iconAlt: "feature icon",
    title: "Headline",
    description: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    iconSrc: "/icons/bill.svg",
    iconAlt: "feature icon",
    title: "Headline",
    description: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    iconSrc: "/icons/shop.svg",
    iconAlt: "feature icon",
    title: "Headline",
    description: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    iconSrc: "/icons/truck.svg",
    iconAlt: "feature icon",
    title: "Headline",
    description: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    iconSrc: "/icons/reload.svg",
    iconAlt: "feature icon",
    title: "Headline",
    description: "Lorem Ipsum is simply dummy text of the printing",
  },
]

export const FeaturesSection = () => {
  return (
    <section className="container py-8 px-4 flex flex-col items-center">
      <SectionHeader
        title={"Our Features"}
        description={"Lorem Ipsum is simply dummy text of the printing"}
      />

      <div
        className="
          grid 
          grid-cols-2 sm:grid-rows-4
          md:grid-cols-4 md:grid-rows-2
          gap-6
          justify-center
          ">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-4 items-center justify-center max-w-[255px] max-h-[177px] ">
            <Image
              src={feature.iconSrc}
              alt={feature.iconAlt}
              height={46}
              width={46}
              className="object-contain"
              loading="lazy"
            />
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="font-sans font-bold text-2xl">{feature.title}</h2>
              <span className="text-black-100 text-opacity-[80%] text-body-md">
                {feature.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
