  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
  import {
    getAuth,
    signOut,
  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  import { 
    getFirestore,
    collection,
    getDocs,    
    } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
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
  const auth = getAuth();
  const db = getFirestore();

  let loginbtn = document.getElementById("loginbtn")
  let logoutbtn = document.getElementById("logoutbtn")
  let name = document.getElementById("name")
  let email = document.getElementById("email")
  let message = document.getElementById("message")



  let init = () =>{
    let userObj = localStorage.getItem("user");
    userObj = JSON.parse(userObj);
  
    if (userObj) {
      loginbtn.style.display = "none";
      logoutbtn.style.display = "block"
  }
}
init()

window.logOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("user");
        init();
      })
      .catch((err) => {
        alert(err.message);
      });
      window.location.assign('index.html')
  };


  let getmsg = () =>{
    let msg = {
        name: name.value,
        email: email.value,
        message: message.value,
        }
    const ref = doc(db, "message", name.value)
    setdoc (ref, msg) 
        .then(() => {
            alert("Message sent");
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            })
            .catch((err) => {
                alert(err.message);
                });

                console.log("send")
                }
                