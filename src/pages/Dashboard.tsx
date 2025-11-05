import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { signOut, onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";
import logo from "@assets/generated_images/Autoreport_AI_circular_logo_3fcdd3c3.png";
import { LogOut, Upload, BarChart3, FileText } from "lucide-react";

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setLocation("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [setLocation]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast({
        title: "Success",
        description: "Logged out successfully",
      });
      setLocation("/login");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to logout",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#121212' }}>
      <nav className="border-b border-white/10 backdrop-blur-sm" style={{ backgroundColor: 'rgba(18, 18, 18, 0.8)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Deltrons" className="w-10 h-10 rounded-full" />
              <span className="text-xl font-bold text-white">DELTRONS</span>
            </div>
            <Button 
              onClick={handleLogout}
              data-testid="button-logout"
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-2">
              Welcome back, {user?.email} 👋
            </h1>
            <p className="text-gray-400 text-lg">
              Ready to generate AI-powered reports
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="transition-all duration-300"
            >
              <Card 
                className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-blue-500/50 cursor-pointer h-full"
                data-testid="card-upload"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4">
                    <Upload className="w-8 h-8 text-blue-500" />
                  </div>
                  <CardTitle className="text-white text-2xl">📤 Upload File</CardTitle>
                  <CardDescription className="text-gray-400 text-base">
                    Upload Excel or Tally files for processing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white" 
                    data-testid="button-upload-file"
                  >
                    Choose File
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="transition-all duration-300"
            >
              <Card 
                className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-blue-500/50 cursor-pointer h-full"
                data-testid="card-generate"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4">
                    <BarChart3 className="w-8 h-8 text-blue-500" />
                  </div>
                  <CardTitle className="text-white text-2xl">📊 Generate Report</CardTitle>
                  <CardDescription className="text-gray-400 text-base">
                    Create AI-powered reports instantly
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white" 
                    data-testid="button-generate-report"
                  >
                    Generate Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="transition-all duration-300"
            >
              <Card 
                className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-blue-500/50 cursor-pointer h-full"
                data-testid="card-saved"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4">
                    <FileText className="w-8 h-8 text-blue-500" />
                  </div>
                  <CardTitle className="text-white text-2xl">🧾 Saved Reports</CardTitle>
                  <CardDescription className="text-gray-400 text-base">
                    Access your report history
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white" 
                    data-testid="button-view-saved"
                  >
                    View History
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
