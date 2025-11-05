import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            AI-powered report generation
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Automatically generate reports from your data with speed and precision.
          </p>
          <Link href="/signup">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              data-testid="button-get-started"
            >
              Get Started
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
