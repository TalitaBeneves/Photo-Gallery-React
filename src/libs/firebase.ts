import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    
        apiKey: "AIzaSyA3Sz939BYarSBxLQbMGIl9ITUoNzt5Uqg",
        authDomain: "reactgallery-5ccc5.firebaseapp.com",
        projectId: "reactgallery-5ccc5",
        storageBucket: "reactgallery-5ccc5.appspot.com",
        messagingSenderId: "642418916766",
        appId: "1:642418916766:web:d3880a4464ae4304336a8f"
    
};

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);