import firebase from 'firebase'


// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyBfyBsCd9hbttEk5wTJzGDEQHE7DYvflr8",
    authDomain: "vue-smoothie-2333b.firebaseapp.com",
    projectId: "vue-smoothie-2333b",
    storageBucket: "vue-smoothie-2333b.appspot.com",
    messagingSenderId: "257070841629",
    appId: "1:257070841629:web:3b3b9daa05e2d0e2de6bf4"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()