import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // ✅ Protect route: redirect to /login if not signed in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/login");
      } else {
        setUser(currentUser);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-foreground">
        <p>Loading your dashboard...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-4">
      <div className="bg-card rounded-2xl shadow-lg p-6 max-w-md w-full text-center">
        <h1 className="text-2xl font-semibold mb-4">Welcome to Deltrons Dashboard</h1>
        {user && (
          <div className="flex flex-col items-center mb-6">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="User"
                className="w-20 h-20 rounded-full mb-3 border border-border"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-accent mb-3 flex items-center justify-center text-xl font-bold">
                {user.email[0].toUpperCase()}
              </div>
            )}
            <p className="text-lg font-medium">{user.displayName || "User"}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
        )}
        <button
          onClick={handleLogout}
          className="w-full bg-destructive text-destructive-foreground py-2 rounded-md font-medium hover:bg-destructive/90 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
