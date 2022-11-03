import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNEdbacuazqqQL34NBn3uKxWSYkDx9_L8",
  authDomain: "upload-files-88b87.firebaseapp.com",
  projectId: "upload-files-88b87",
  storageBucket: "upload-files-88b87.appspot.com",
  messagingSenderId: "826107951782",
  appId: "1:826107951782:web:50e185b89756c892d21267",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
