import type { NextPage } from "next";
import Layout from "../layout";
import { db } from "../utls/firebaseConfig";
import { useState, useEffect } from 'react';
import { collection, deleteDoc, doc, DocumentData, getDocs, limit, query, QueryDocumentSnapshot, updateDoc, where } from 'firebase/firestore';



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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>All Quotes would be here</h1>
        {
          loading ? (
            <p>Loading...</p>
          ) : 
          quotes.length === 0 ? (
          <p>No quotes yet</p>
        ) : (
            quotes.map((quote, index) => {
              return (
                <div key={index}>
                  <p>{quote.data().quote}</p>
                  <p>{quote.data().nameOfAuthor}</p>
                </div>
              )
            })
        )}
    </main>
    </Layout>
  )
}

export default Home;

// export const getServerSideProps = async () => {
//   const colRef = collection(db, 'quotes')
//   let quotes = [] as DocumentData[]
//   const data = await getDocs(colRef).then((d) => {
//     d.docs.map((doc) => {
//       quotes?.push({...doc.data(), id: doc.id})
//     })
//     return quotes
//   })
// }