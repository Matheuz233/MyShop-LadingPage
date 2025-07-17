import { ImagesCarousel } from "@/components/images-carousel/images-carousel"
import { SectionHeader } from "@/components/section-header/section-header"

export const GallerySection = () => {
  return (
    <section className=" py-8 px-4 flex flex-col items-center overflow-hidden">
      <SectionHeader title={"Gallery"} description={"Lorem Ipsum is simply dummy text of the printing"} />

      <ImagesCarousel />
    </section>
  )
}
