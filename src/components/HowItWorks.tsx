import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaUpload, FaBrain, FaChartBar } from "react-icons/fa";

const steps = [
  {
    icon: FaUpload,
    title: "Upload/Connect Data",
    description: "Easily upload your data files or connect to your existing databases and data sources.",
  },
  {
    icon: FaBrain,
    title: "AI Analyzes & Summarizes",
    description: "Our advanced AI processes your data, identifies patterns, and generates meaningful insights.",
  },
  {
    icon: FaChartBar,
    title: "Download or Share",
    description: "Get your polished report instantly. Download, share, or integrate with your workflow.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Three simple steps to transform your data into actionable reports.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover-elevate transition-all duration-300 hover:shadow-lg hover:shadow-primary/20" data-testid={`card-step-${index}`}>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-sm font-semibold text-primary mb-2">Step {index + 1}</div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
