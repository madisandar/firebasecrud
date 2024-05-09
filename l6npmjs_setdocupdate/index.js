// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,setDoc,doc} from "firebase/firestore";
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
//     name:"shark",
//     type:"food",
//     price:1000
// });

// setDoc(doc(db,"products","khYHDCtFRpS3eGSahHfk"),{
//     name:"deedo",
//     type:"food",
//     price:500
// }).then(()=>{
//     console.log("Update Successfully");
// }).catch(error=>{
//     console.log(error);
// })

// =>Before Merge

// setDoc(doc(db,"products","myid1002"),{
//     name:"speed",
//     type:"food",
//     price:1000,
//     unit:"bot"
// }).catch(error=>{
//     console.log(error);
// });


// setDoc(doc(db,"products","myid1002"),{
// }).then(()=>{
//     console.log("Update Successfully");
// }).catch(error=>{
//     console.log(error);
// });

// =>After Merge

// setDoc(doc(db,"products","myid1002"),{
//     name:"speed",
//     type:"food",
//     price:1000,
//     unit:"bot"
// }).catch(error=>{
//     console.log(error);
// });


// setDoc(doc(db,"products","myid1002"),{
// },{merge:true}).then(()=>{
//     console.log("Update Successfully");
// }).catch(error=>{
//     console.log(error);
// });


// =>Before Merge


// setDoc(doc(db,"products","myid1002"),{
//     name:"speed",
// }).then(()=>{
//     console.log("Update Successfully");
// }).catch(error=>{
//     console.log(error);
// });


// setDoc(doc(db,"products","myid1002"),{
//     name:"speed",
//     type:"food",
//     price:500,
//     unit:"bot"
// }).catch(error=>{
//     console.log(error);
// });


// =>After Merge

// setDoc(doc(db,"products","myid1002"),{
//     name:"deedo"
// },{merge:true}).then(()=>{
//     console.log("Update Successfully");
// }).catch(error=>{
//     console.log(error);
// });


// =>Before Merge


// setDoc(doc(db,"products","myid1002"),{
//     stock:200,
// }).then(()=>{
//     console.log("Update Successfully");
// }).catch(error=>{
//     console.log(error);
// });


// =>After Merge


// setDoc(doc(db,"products","myid1002"),{
//     name:"speed",
//     type:"food",
//     price:500,
//     unit:"bot"
// }).catch(error=>{
//     console.log(error);
// });


setDoc(doc(db,"products","myid1002"),{
    stock:200,
    promo:"10%"
},{merge:true}).then(()=>{
    console.log("Update Successfully");
}).catch(error=>{
    console.log(error);
});


