import type { NextPage } from "next";
import Layout from "../../layout";
import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../../utls/firebaseConfig';
import { serverTimestamp } from "firebase/firestore";
import { useRouter } from 'next/router';
import Link from "next/link";

const NewQuote: NextPage = () => {
    const [quote, setQuote] = useState<string>('')
    const [nameOfAuthor, setNameOfAuthor] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [message, setMessage] = useState<string>('');
    const router = useRouter();

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        
        if(!quote || !nameOfAuthor){
            return setError("All fields required");
        }
        addQuote();
        // router.push('/')
    }

    const addQuote = async () => {
        const timestamp: string = Date.now().toString();
        const _quote = doc(db, `quotes/${timestamp}`); 
        const createdAt = serverTimestamp()
        const quoteData = {
            nameOfAuthor,
            quote, 
            createdAt
        };
        
        try{
            await setDoc(_quote,quoteData);
            setMessage("success");
            setQuote("");
            setNameOfAuthor("");
        }catch(error){
            setError("An error occurred while adding");      
        }
    };

    return (
        <Layout>
            <main className="p-4">
                <div className="container mx-auto">
                    <form
                        className="w-3/4 max-w-md mt-4 mx-auto"
                        onSubmit={handleSubmit}>
                        {
                            error ? (
                                <p className="mb-3">{error}</p>
                        ) : null
                    }
                    {
                        message ? (
                                <p className="mb-3">
                                    {message}. <Link className="bg-indigo-100 text-indigo-800 font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300" href="/">go back</Link>
                                </p>
                        ) : null
                    }
                        <div className="mb-4">
                            <input
                                className="w-full p-2 bg-gray-800 rounded-lg"
                                name="nameOfAuthor"
                                placeholder="author"
                                onChange={e => setNameOfAuthor(e.target.value)}
                                value={nameOfAuthor}/>
                        </div>
                        <div className="mb-4">
                            <textarea
                                className="w-full p-2 bg-gray-800 rounded-lg"
                                name="quote"
                                placeholder="quote"
                                onChange={e => setQuote(e.target.value)}
                                value={quote}></textarea>
                        </div>
                        <div className="mb-4">
                            <button
                                className="w-full p-6 bg-green-100 text-green-800 font-medium mr-2 px-2.5 py-2 rounded-lg dark:bg-green-900 dark:text-green-300"
                                type="submit">share
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </Layout>
    )
}

export default NewQuote