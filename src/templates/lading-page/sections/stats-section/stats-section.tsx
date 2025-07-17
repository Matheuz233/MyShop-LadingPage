import Image from "next/image"

const statsData = [
  {
    icon: "/icons/star.svg",
    value: "4.8",
    description: "Lorem Ipsum is simply",
    alt: "Avaliação",
  },
  {
    icon: "/icons/like.svg",
    value: "89",
    description: "Lorem Ipsum is simply",
    alt: "Clientes",
  },
  {
    icon: "/icons/dialog.svg",
    value: "120",
    description: "Lorem Ipsum is simply",
    alt: "Aprovação",
  },
  {
    icon: "/icons/statistic.svg",
    value: "600+",
    description: "Lorem Ipsum is simply",
    alt: "Suporte",
  },
]

export const StatsSection = () => {
  return (
    <section className="flex justify-center items-center min-h-[270px]">
      <div className="container gap-16 sm:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  justify-items-center">
        {statsData.map((stat, index) => (
          <div key={index} className="flex w-full max-w-[255px] gap-4">
            <div className="flex justify-center items-center max-w-[56px] max-h-[56px]">
              <Image
                src={stat.icon}
                alt={stat.alt}
                height={46}
                width={46}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-body-stats text-black-100">{stat.value}</div>
              <div className="text-body-md text-black-100 text-opacity-[80%]">
                {stat.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
