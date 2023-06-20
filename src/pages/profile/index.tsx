import type { NextPage } from "next";
import { useRouter } from "next/router";
import  Layout  from "../../layout";


const Profile: NextPage = () => {
    const router = useRouter();
    
    return (
        <Layout>
            <main className="p-4">
                <div className="container mx-auto flex flex-col items-center">
                    <h1 className="text-2xl text-center">Your Profile</h1>
                </div>
            </main>
        </Layout>
    );
};

export default Profile;