// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection,setDoc,doc} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpYU0RfznhuKyVS0CqCwaOeZwF0iVQJfM",
  authDomain: "my-first-poject-edfda.firebaseapp.com",
  projectId: "my-first-poject-edfda",
  storageBucket: "my-first-poject-edfda.appspot.com",
  messagingSenderId: "825431850072",
  appId: "1:825431850072:web:6eabc3ea1ca6a6c553de2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// console.log(db);

// setDoc(doc(db,"products","myid1001"),{
//     name:"redbull",
//     type:"food",
//     price:1000
// });

// setDoc(doc(db,"products","myid1001"),{
//     name:"redbull",
//     type:"food",
//     price:1000
// }).then(()=>{
//     console.log("Create Successfully");
// }).catch(error=>{
//     console.log(error);
// });


setDoc(doc(collection(db,"products")),{
    name:"redbull",
    type:"food",
    price:1000
}).then(()=>{
    console.log("Create Successfully");
}).catch(error=>{
    console.log(error);
});