import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, googleProvider } from "../lib/firebase";
import { toast } from "@/hooks/use-toast";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ Redirect if already logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) navigate("/dashboard");
    });
    return () => unsubscribe();
  }, [navigate]);

  // ✅ Email/password signup
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast({ title: "Account created", description: "Welcome aboard!" });
      navigate("/dashboard");
    } catch (error: any) {
      console.error(error);
      toast({
        title: "Signup failed",
        description: error.message || "Unable to create account.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // ✅ Google signup/login
  const handleGoogleSignup = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      toast({ title: "Success", description: "Logged in with Google" });
      navigate("/dashboard");
    } catch (error: any) {
      console.error(error);
      toast({
        title: "Google signup failed",
        description: error.message || "Unable to sign up with Google.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-4">
      <div className="max-w-sm w-full bg-card rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Create an Account 🚀
        </h1>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-border rounded-md px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground py-2 rounded-md font-medium hover:bg-primary/90 transition"
          >
            {loading ? "Creating..." : "Sign up"}
          </button>
        </form>

        <div className="my-4 text-center text-sm text-muted-foreground">or</div>

        <button
          onClick={handleGoogleSignup}
          disabled={loading}
          className="w-full border border-border py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition"
        >
          {loading ? "Connecting..." : "Continue with Google"}
        </button>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
