import { CardPricing } from "@/components/card-pricing";
import { SectionHeader } from "@/components/section-header/section-header";

type PricingPlan = {
  title: string;
  price: number;
  isHighlighted: boolean;
  icon: string;
  features: string[];
};

const pricingData: PricingPlan[] = [
  {
    title: "Free",
    price: 0,
    isHighlighted: false,
    icon: "/icons/mortarboard.svg",
    features: [
      "5 Lorem Ipsum",
      "10 dummy text of the",
      "20 sample text"
    ]
  },
  {
    title: "Basic",
    price: 29,
    isHighlighted: true,
    icon: "/icons/brain.svg",
    features: [
      "50 Lorem Ipsum",
      "100 dummy text of the",
      "200 sample text"
    ]
  },
  {
    title: "Premium",
    price: 69,
    isHighlighted: false,
    icon: "/icons/plane.svg",
    features: [
      "500 Lorem Ipsum",
      "1000 dummy text of the",
      "2000 sample text"
    ]
  }
];

export const PricingSection = () => {
  return (
    <section className="container mx-auto py-16 overflow-hidden">
      <SectionHeader title={"Pricing"} description={"Lorem Ipsum is simply dummy text of the printing"} />

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        {pricingData.map((plan, index) => (
          <div
            key={index}
            className={`w-80 bg-white rounded-lg shadow-lg p-8 ${plan.isHighlighted ? 'border-4 border-purple-600' : ''
              }`}
          >
            <CardPricing
              title={plan.title}
              price={plan.price}
              icon={plan.icon}
              features={plan.features}
              isHighlighted={plan.isHighlighted}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

