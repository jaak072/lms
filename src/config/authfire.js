import * as firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyCCXAPhm2th3-f3jtavHHl5fFsbccCJZbU",
    authDomain: "react-login-1eb82.firebaseapp.com",
    projectId: "react-login-1eb82",
    storageBucket: "react-login-1eb82.appspot.com",
    messagingSenderId: "814666341705",
    appId: "1:814666341705:web:6842f29a7f82ebcdf84e98"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
