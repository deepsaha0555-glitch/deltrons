import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, FileText, Share2 } from "lucide-react";

const previews = [
  {
    icon: BarChart3,
    title: "AI Dashboard Preview",
    description: "Interactive dashboards with real-time data visualization and insights.",
  },
  {
    icon: FileText,
    title: "AI Summary Example",
    description: "Automated executive summaries highlighting key trends and recommendations.",
  },
  {
    icon: Share2,
    title: "Download & Share",
    description: "Export in multiple formats or share directly with your team.",
  },
];

export default function DemoPreview() {
  const handleDemoClick = () => {
    console.log("Try Demo Now clicked");
  };

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
            Demo Preview
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See what Deltrons can do for your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {previews.map((preview, index) => {
            const Icon = preview.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover-elevate transition-all duration-300" data-testid={`card-demo-${index}`}>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{preview.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{preview.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 h-auto"
            onClick={handleDemoClick}
            data-testid="button-try-demo"
          >
            🎬 Try Demo Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
