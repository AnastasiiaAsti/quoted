import { useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "../../layout";
import { useAuth } from "../../context/AuthContext";

const Signup: NextPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    const { register } = useAuth();
    const router = useRouter();
    
    return (
        <Layout>
            <main className="p-4">
                <div className="container mx-auto">
                    <h1 className="text-2xl text-center">SignUP</h1>
                    <form
                        className="w-3/4 max-w-md mt-4 mx-auto"
                        onSubmit={async (e) => {
                            e.preventDefault();
                            try {
                                await register(email, password);
                                await router.push("/profile");
                            } catch (error) {
                                console.log(error);
                            }
                        }}>
                        <div className="mb-4">
                            <label htmlFor="email" />
                            <input
                                className="w-full p-2"
                                name="email"
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" />
                            <input
                                className="w-full p-2"
                                name="password"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <button
                                className="w-full py-2 px-6"
                                type="submit">SignUP
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </Layout>
    );
};

export default Signup;