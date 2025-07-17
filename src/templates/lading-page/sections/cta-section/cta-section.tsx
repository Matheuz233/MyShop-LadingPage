import Image from "next/image"
import Link from "next/link"

export const CTASection = () => {
  return (
    <section className="">
      <div className="container relative flex items-center justify-center mt-16 ">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[20rem] md:h-[36rem] items-center ">
          <div className="flex flex-col items-center justify-center gap-10 md:items-start lg:items-start">
            <div className="flex flex-col gap-4 items-start">
              <h2 className="text-black-100 text-heading-md sm:text-heading-lg md:text-heading-xl font-sans">
                Your CTA title
              </h2>
              <span className="text-black-100 text-opacity-[80%] text-body-md md:text-body-lg">
                Lorem Ipsum is simply dummy text of the printing
              </span>
            </div>

            <div className="flex flex-col gap-4 items-start w-full">
              {Array.from({ length: 3 }).map((_, index) => (
                <span
                  key={index}
                  className="flex flex-row gap-4 text-black-100 text-opacity-[80%] text-body-md md:text-body-lg">
                  <Image
                    src="/cta-images/check.svg"
                    alt="check"
                    width={26}
                    height={26}
                  />
                  Lorem Ipsum is simply dummy text
                </span>
              ))}

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5 w-full">
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

          <div className=" h-full order-last justify-center items-center flex">
            <Image
              src="/cta-images/main.png"
              alt="Hero Image"
              width={713}
              height={599}
              className="h-full w-auto object-contain lg:min-w-[713px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
