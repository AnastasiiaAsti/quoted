import type { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "../../layout";
import { useAuth } from "../../context/AuthContext";
import { deleteUser } from "firebase/auth";


const Profile: NextPage = () => {
    const { user } = useAuth();
    const router = useRouter();
    
    return (
        <Layout>
            <main className="p-4">
                <div className="container mx-auto flex flex-col items-center">
                    <h1 className="text-2xl text-center">Your Profile</h1>
                    <button
                        className="mt-4 py-2 px-6"
                        onClick={async () => {
                            try {
                                if (user) {
                                    await deleteUser(user);
                                    await router.push("/login");
                                }
                            } catch (error) {
                                console.log(error);
                            }
                        }}>Delete Account
                    </button>
                </div>
                <div className="p-4">
                    <div className="container mx-auto">
                        <h1>{user.email}</h1>
                    </div>
                    </div>
            </main>
        </Layout>
    );
};

export default Profile;