import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBL3MqxQjMPcrB8IDU3sLDclpiUxx_KQxM",
  authDomain: "autoreport-ai-881bf.firebaseapp.com",
  projectId: "autoreport-ai-881bf",
  storageBucket: "autoreport-ai-881bf.firebasestorage.app",
  messagingSenderId: "979011336019",
  appId: "1:979011336019:web:8b26a07c13051023a013a6"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
