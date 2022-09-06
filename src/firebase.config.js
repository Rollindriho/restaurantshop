import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDBG-6wgt_N5igevED7pjIjn-ciuWTdDkk",
  authDomain: "restaurantshop-a0a00.firebaseapp.com",
  databaseURL: "https://restaurantshop-a0a00-default-rtdb.firebaseio.com",
  projectId: "restaurantshop-a0a00",
  storageBucket: "restaurantshop-a0a00.appspot.com",
  messagingSenderId: "542767298034",
  appId: "1:542767298034:web:0eb473ad0346b06680676b"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };