import type { NextPage } from "next";
import Layout from "../layout";
import { db } from "../utls/firebaseConfig";
import { useState, useEffect } from 'react';
import { collection, deleteDoc, doc, DocumentData, getDocs, orderBy, query, QueryDocumentSnapshot, updateDoc, where } from 'firebase/firestore';
import QuotesList from "../components/QuotesList";
import Link from "next/link";



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
    const quotesQuery = query(quotesCollection, orderBy("createdAt", 'desc'));
    const querySnapshot = await getDocs(quotesQuery);
    const result: QueryDocumentSnapshot<DocumentData>[] = [];
    querySnapshot.forEach((snapshot) => {
      result.push(snapshot);
    })
    setQuotes(result);
  };

  const deleteQuote = async (documentId:string) => {
    const _quote = doc(db,`quotes/${documentId}`);
    await deleteDoc(_quote);
    getQuotes();
}


  return (
    <Layout>
      <p className="text-center mt-5">Share your quote <Link className="bg-indigo-100 text-indigo-800 font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300" href="/new-quote">here</Link></p>
      <QuotesList quotes={quotes} loading={loading} deleteQuote={deleteQuote} />
    </Layout>
  )
}

export default Home;
