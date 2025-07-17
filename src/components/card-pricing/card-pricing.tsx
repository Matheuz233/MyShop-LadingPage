import Image from "next/image"
import { Button } from "../ui/button"

type CardProps = {
  title: string
  price: number
  icon: string
  features: string[]
  isHighlighted: boolean
}

export const CardPricing = ({
  title,
  price,
  icon,
  features,
  isHighlighted,
}: CardProps) => {
  return (
    <>
      <div className="text-center mb-6">
        <h2 className="font-sans text-2xl font-semibold text-gray-800 mb-4">
          {title}
        </h2>

        <div className="flex justify-center mb-4">
          <Image
            src={icon}
            alt={title}
            height={46}
            width={46}
            className="object-contain"
          />
        </div>

        <div className="mb-2">
          <span className="font-sans text-5xl font-bold text-gray-800">
            {price}
          </span>
          <span className="font-sans text-2xl text-gray-600 ml-1">₹</span>
        </div>
        <p className="text-gray-500 text-sm">monthly</p>
      </div>

      <div className="text-center mb-8 space-y-2">
        {features.map((feature, index) => (
          <p key={index} className="text-gray-600">
            {feature}
          </p>
        ))}
      </div>

      <div className="text-center">
        <Button
          variant={isHighlighted ? "primary" : "outlined"}
          className={`w-fit py-3 px-6 border-2 font-medium rounded-lg transition-colors duration-150 will-change-auto ${isHighlighted
              ? "bg-purple-600 text-white border-purple-600 hover:bg-purple-700"
              : "border-purple-600 text-purple-600 hover:bg-purple-50"
            }`}>
          Button
        </Button>
      </div>
    </>
  )
}
