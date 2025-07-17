import Countdown from "@/components/countdown/countdown"
import Image from "next/image"

export const SpecialOfferSection = () => {
  return (
    <section className="container mx-auto flex flex-row items-center gap-14 md:gap-20 py-10 px-4 justify-center">
      <div className="hidden md:block w-full md:w-1/2">
        <Image src="/special-offer-images/woman.webp" alt="Woman pointing" width={540} height={540} loading="lazy" />
      </div>
      <div>
        <Countdown />
      </div>
    </section>
  )
}
