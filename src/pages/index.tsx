import type { NextPage } from "next";
import Layout from "../layout";
import { db } from "../utls/firebaseConfig";
import { useState, useEffect } from 'react';
import { collection, deleteDoc, doc, DocumentData, getDocs, limit, query, QueryDocumentSnapshot, updateDoc, where } from 'firebase/firestore';
import QuotesList from "../components/QuotesList";



const Home: NextPage = () => {
  const [quotes, setQuotes] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);
  const [loading,setLoading] = useState<boolean>(true);

  useEffect( () => {
    getQuotes();
    setTimeout( () => {
      setLoading(false);
    },2000)
    
  },[]);
  const quotesCollection = collection(db, 'quotes');
  
  const getQuotes = async () => {
    const quotesQuery = query(quotesCollection);
    const querySnapshot = await getDocs(quotesQuery);
    const result: QueryDocumentSnapshot<DocumentData>[] = [];
    querySnapshot.forEach((snapshot) => {
      result.push(snapshot);
    })
    setQuotes(result);
  };


  return (
    <Layout>
      <QuotesList quotes={quotes} loading={loading} />
    </Layout>
  )
}

export default Home;
