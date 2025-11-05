import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "wouter";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out Deltrons",
    features: [
      "Up to 5 reports per month",
      "Basic templates",
      "Email support",
      "CSV/Excel upload",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    description: "For professionals and small teams",
    features: [
      "Unlimited reports",
      "Advanced AI insights",
      "Priority support",
      "All file formats",
      "Custom branding",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "On-premise deployment",
      "Advanced security",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                className={`h-full hover-elevate transition-all duration-300 ${
                  plan.popular ? 'border-primary shadow-lg shadow-primary/20' : ''
                }`}
                data-testid={`card-pricing-${plan.name.toLowerCase()}`}
              >
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold rounded-t-md">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/signup" className="w-full">
                    <Button 
                      className="w-full" 
                      variant={plan.popular ? "default" : "outline"}
                      data-testid={`button-get-started-${plan.name.toLowerCase()}`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
