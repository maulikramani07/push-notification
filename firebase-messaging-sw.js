importScripts('https://www.gstatic.com/firebasejs/7.16.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.16.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyC49oa5yaRnXpW5P5e-b54TU_sSdWa9SKk",
  authDomain: "fir-push-notification-c7270.firebaseapp.com",
  databaseURL: "https://fir-push-notification-c7270.firebaseio.com",
  projectId: "fir-push-notification-c7270",
  storageBucket: "fir-push-notification-c7270.appspot.com",
  messagingSenderId: "331551966966",
  appId: "1:331551966966:web:effad8c68b380632170ed7",
  measurementId: "G-DMTRRWS8K9"
});

const messaging = firebase.messaging();
