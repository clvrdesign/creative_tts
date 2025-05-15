import Container from "../components/Container";
import { Check, BadgeCheck } from "lucide-react";
import Button from "../components/Button";

export default function Pricing() {
  const tiers = [
    {
      name: "Free",
      id: "tier-free",
      href: "#",
      price: "$0",
      description: "Perfect for trying out basic features",
      features: [
        "5 voice generations per month",
        "Standard voice quality",
        "Basic support",
        "Limited to 30 seconds per generation",
      ],
      mostPopular: false,
    },
    {
      name: "Pro",
      id: "tier-pro",
      href: "#",
      price: "$15",
      description: "For creators and professionals",
      features: [
        "100 voice generations per month",
        "High quality voices",
        "Priority support",
        "Up to 5 minute generations",
        "Custom pitch/speed controls",
      ],
      mostPopular: true,
    },
    {
      name: "Enterprise",
      id: "tier-enterprise",
      href: "#",
      price: "Custom",
      description: "For businesses and high-volume needs",
      features: [
        "Unlimited generations",
        "Premium voice quality",
        "24/7 dedicated support",
        "Custom voice cloning",
        "API access",
        "Bulk processing",
      ],
      mostPopular: false,
    },
  ];

  return (
    <Container>
      
        <div className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              Pricing plans
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              Choose the perfect plan for your voice generation needs.
            </p>
          </div>
          
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tiers.map((tier, tierIdx) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8",
                  tierIdx === 0 ? "lg:rounded-r-none" : "",
                  tierIdx === tiers.length - 1 ? "lg:rounded-l-none" : "",
                  "flex flex-col justify-between rounded-3xl bg-white dark:bg-neutral-900 p-8 ring-1 ring-neutral-100 dark:ring-neutral-700 xl:p-10"
                )}
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between gap-x-4">
                    <h3
                      id={tier.id}
                      className={classNames(
                        tier.mostPopular ? "text-indigo-600 dark:text-indigo-400" : "text-neutral-900 dark:text-white",
                        "text-lg font-semibold leading-8"
                      )}
                    >
                      {tier.name}
                    </h3>
                    {tier.mostPopular ? (
                      <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                        <BadgeCheck className="h-4 w-4" />
                        Most popular
                      </p>
                    ) : null}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                    {tier.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
                      {tier.price}
                    </span>
                    {tier.price !== "Custom" && (
                      <span className="text-sm font-semibold leading-6 text-neutral-600 dark:text-neutral-400">
                        /month
                      </span>
                    )}
                  </p>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400"
                  >
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <Check
                          className="h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant={`${tier.price ==  '$15' ? "primary" : "secondary"}`}>
                  {tier.price === "$0" ? "Get started" : "Buy plan"}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ CTA */}
        <section className='text-center py-12 px-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl'>
          <h2 className='text-3xl font-bold text-neutral-900 dark:text-white mb-6'>
            Need Immediate Help?
          </h2>
          <p className='text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-6'>
            Check our FAQ section for quick answers to common questions.
          </p>
          <Button>Visit Help Center</Button>
        </section>
  
    </Container>
  );
}

function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}