import Image from "next/image"
import Link from "next/link"

export const HeroSection = () => {
  return (
    <section className="container relative flex items-center justify-center mt-16">
      <div className=" flex items-center justify-center mt-16 ">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[20rem] md:h-[36rem] items-center ">
          <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
            <h2 className="text-black-100 text-heading-md sm:text-heading-lg md:text-heading-xl font-sans">
              The Smart Choice For Future
            </h2>

            <div className="flex flex-col gap-4 items-start w-full">
              <span className="text-black-100 text-opacity-[80%] text-body-md md:text-body-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-5 w-full">
                <Link
                  href="https://play.google.com/store/apps/details?id=seu.app.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black-800 h-20 flex items-center justify-center rounded-lg w-full max-h-[56px] md:max-w-[189px]">
                  <Image
                    src="/store-badges/google-play.svg"
                    alt="Baixar no Google Play"
                    width={177}
                    height={56}
                    className="w-full h-full max-h-[56px] object-contain"
                    loading="lazy"
                  />
                </Link>
                <Link
                  href="https://apps.apple.com/app/idseuappid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black-800 h-20 flex items-center justify-center rounded-lg w-full max-h-[56px] md:max-w-[189px]">
                  <Image
                    src="/store-badges/app-store.svg"
                    alt="App Store"
                    width={139}
                    height={40}
                    className="w-full h-full max-h-[40px] object-contain"
                    loading="lazy"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className=" flex justify-center items-center">
            <Image
              src="/hero-images/main.svg"
              alt="Hero Image"
              width={713}
              height={599}
              className="object-contain"
              fetchPriority="high"
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
