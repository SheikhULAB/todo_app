// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAuIu7dI6UD36RqFPfOygj3KlNnw9L-_50",
    authDomain: "todo-app-react-83e9e.firebaseapp.com",
    projectId: "todo-app-react-83e9e",
    storageBucket: "todo-app-react-83e9e.appspot.com",
    messagingSenderId: "583345588769",
    appId: "1:583345588769:web:95b6cdac2e315d6bbbb160",
    measurementId: "G-EDK3DX2ZNL"
  });

  const db = firebaseApp.firestore();

  export {db};