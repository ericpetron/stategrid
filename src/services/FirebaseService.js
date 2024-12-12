// src/services/FirebaseService.js
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import fb from '../firebaseConfig';

const db = getFirestore(fb);
const thing = 0
export default {
  async fetchData() {

    console.log("Whatever")
    if (thing === 2) {
      const querySnapshot = await getDocs(collection(db, 'your-collection'));
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
    }
    
  },
};
