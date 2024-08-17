  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
  import {getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  import { getFirestore,
    doc,
    getDoc, } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAMKx2X26I8Sa6YDpZDR1Xa5Fl3gYAtG0Y",
    authDomain: "my-blogs-b5b55.firebaseapp.com",
    projectId: "my-blogs-b5b55",
    storageBucket: "my-blogs-b5b55.appspot.com",
    messagingSenderId: "1060087120453",
    appId: "1:1060087120453:web:6404039fa0f5fa594dd92c",
    measurementId: "G-SM27N7JXD7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app)
  const auth = getAuth(app);
  const db = getFirestore();


  let email = document.getElementById("email")
let password = document.getElementById("password")


window.loginUser = () => {
    let obj = {
        email: email.value,
        password: password.value
    }

    signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then (async(res) =>{
        const id = res.user.uid;
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            localStorage.setItem("user", JSON.stringify(docSnap.data()));
        window.location.replace("../index.html");
        } else {
            console.log("NOT FOUND");
            }
            })
            .catch((err) => {
                alert(err.message);
    })
}



