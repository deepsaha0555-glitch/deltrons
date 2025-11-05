import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X, Check } from "lucide-react";

export default function WhyDeltrons() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Why Deltrons?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transform your reporting workflow from hours of manual work to instant, AI-powered insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover-elevate transition-all duration-300" data-testid="card-without">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                  <X className="w-6 h-6 text-destructive" />
                </div>
                <CardTitle className="text-2xl">Without Deltrons</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  Hours spent manually compiling data in Excel
                </p>
                <p className="text-muted-foreground flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  Inconsistent report formatting and quality
                </p>
                <p className="text-muted-foreground flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  Time wasted on repetitive data entry tasks
                </p>
                <p className="text-muted-foreground flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  High risk of human error and missed insights
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover-elevate transition-all duration-300 border-primary/50" data-testid="card-with">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">With Deltrons</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Automated report generation in seconds
                </p>
                <p className="text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Professional, polished output every time
                </p>
                <p className="text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  AI-powered insights delivered instantly
                </p>
                <p className="text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Focus on strategic decisions, not data entry
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
