import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBL3MqxQjMPcrB8IDU3sLDclpiUxx_KQxM",
  authDomain: "autoreport-ai-881bf.firebaseapp.com",
  projectId: "autoreport-ai-881bf",
  storageBucket: "autoreport-ai-881bf.firebasestorage.app",
  messagingSenderId: "979011336019",
  appId: "1:979011336019:web:8b26a07c13051023a013a6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// ✅ Make login session persistent (user stays logged in after refresh)
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Firebase auth persistence enabled.");
  })
  .catch((error) => {
    console.error("Error enabling persistence:", error);
  });

// Google provider for OAuth login
export const googleProvider = new GoogleAuthProvider();
