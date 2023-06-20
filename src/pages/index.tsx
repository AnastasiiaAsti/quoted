import type { NextPage } from "next";
import  Layout  from "../layout";


const Home: NextPage = () => {
  
  return (
    <Layout>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>All Quotes would be here</h1>
    </main>
    </Layout>
  )
}

export default Home;