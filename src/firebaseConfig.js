// config/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDWfwBNZrUrnXEKtNOdQOLpNhAdJyGCnl4",
    authDomain: "lefulsite-aaafc.firebaseapp.com",
    projectId: "lefulsite-aaafc",
    storageBucket: "lefulsite-aaafc.firebasestorage.app",
    messagingSenderId: "609477753752",
    appId: "1:609477753752:web:712ef1ed0adf81c66c89ed",
    measurementId: "G-FV2T9C2C5V"
  };

// Inicialização explícita
const app = initializeApp(firebaseConfig);

// Verifique se o storageBucket está correto
console.log("Storage Bucket:", app.options.storageBucket); 
const storage = getStorage(app, "gs://lefulsite-aaafc.firebasestorage.app"); 

export const auth = getAuth(app);
export const db = getFirestore(app);
export { storage }; // Certifique-se que está exportando