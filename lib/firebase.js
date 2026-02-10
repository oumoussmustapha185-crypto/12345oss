const firebaseConfig = {
  apiKey: "AIzaSyBRaYvlW_ojwhbj6Co_2De8CQsv5SSQ4jI",
  authDomain: "pixelforge-ai-9f3a9.firebaseapp.com",
  projectId: "pixelforge-ai-9f3a9",
  storageBucket: "pixelforge-ai-9f3a9.firebasestorage.app",
  messagingSenderId: "651704709264",
  appId: "1:651704709264:web:5830e55701a9cdc503e815",
  measurementId: "G-GNVYRGLTQ5",
}

let firebaseApp = null
let firebaseAuth = null

// Initialize Firebase App - lazy initialization
export async function getFirebaseApp() {
  if (firebaseApp) return firebaseApp
  
  const { initializeApp, getApps, getApp } = await import("firebase/app")
  
  if (getApps().length === 0) {
    firebaseApp = initializeApp(firebaseConfig)
  } else {
    firebaseApp = getApp()
  }
  
  return firebaseApp
}

// Get Firebase Auth - lazy initialization
export async function getFirebaseAuth() {
  if (firebaseAuth) return firebaseAuth
  
  const app = await getFirebaseApp()
  const { getAuth } = await import("firebase/auth")
  
  firebaseAuth = getAuth(app)
  return firebaseAuth
}
