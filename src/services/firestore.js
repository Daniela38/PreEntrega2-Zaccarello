import { initializeApp } from "firebase/app";
import {getFirestore, orderBy, collection, getDocs, doc, getDoc, query, where, addDoc} from "firebase/firestore";
import products from "../components/data/products";

const firebaseConfig = {
  apiKey: "AIzaSyDRIgpuOL4UwsTvjtUJ0CGOWwZLb6qsXKY",
  authDomain: "products-ef85c.firebaseapp.com",
  projectId: "products-ef85c",
  storageBucket: "products-ef85c.appspot.com",
  messagingSenderId: "177160882695",
  appId: "1:177160882695:web:b3c4c2f0a3cd3c303478a2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getItems(){
  const productsRef = collection(db, "products")
  const q = query(productsRef, orderBy("index"));
  const productsSnap = await getDocs(q);
  const documents = productsSnap.docs;
    
    const docsData = documents.map((doc) => {
        return {id: doc.id, ...doc.data()};
    });
    return docsData;
}

export async function getSingleItem(idURL){
  const docRef = doc(db, "products", idURL);
  const docSnap = await getDoc(docRef);
  return {id: docSnap.id, ...docSnap.data()};
}

export async function getItemsByCategory(categoryid){
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("category", "==", categoryid));
  const productsSnap = await getDocs(q);
  const documents = productsSnap.docs;
  const docsData = documents.map((doc) => {
    return {id: doc.id, ...doc.data()};
  });
  return docsData
}

export async function createOrder(order){
  const collectionOrdersRef = collection(db, "orders");
  const response = await addDoc(collectionOrdersRef, order);
  return response.id;
}

/*export async function exportData(){
  const collectionRef = collection(db, "products")
  for(let item of products){
    item.index = item.id
    const response = await addDoc(collectionRef, item)
    console.log("producto exportado con ID: " + response.id)
  }
}*/