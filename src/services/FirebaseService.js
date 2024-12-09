// src/services/FirebaseService.js
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import app from '../firebaseConfig';

const db = getFirestore(app);

export default {
  async fetchData() {
    const querySnapshot = await getDocs(collection(db, 'your-collection'));
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
  },
};
