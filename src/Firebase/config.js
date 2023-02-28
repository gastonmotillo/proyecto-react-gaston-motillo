import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCnzvRqM0YRZ490vF-SeZyF1fR3NmQG7B8",
  authDomain: "proyecto-react-gaston-motillo.firebaseapp.com",
  projectId: "proyecto-react-gaston-motillo",
  storageBucket: "proyecto-react-gaston-motillo.appspot.com",
  messagingSenderId: "172989614289",
  appId: "1:172989614289:web:8c569b6e8cf15a02949df0",
};

const app = initializeApp(firebaseConfig);

export const initFirestore = () => {
    return app
}