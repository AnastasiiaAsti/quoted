import { useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../../layout";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";

const Login: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { login } = useAuth();
  const router = useRouter();

  return (
    <Layout>
      <main className="p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl text-center">LogIN</h1>
          <form
            className="w-3/4 max-w-md mt-4 mx-auto"
            onSubmit={async (e) => {
              e.preventDefault();

              try {
                await login(email, password);
                await router.push("/profile");
              } catch (error) {
                console.log(error);
              }
            }}
          >
            <div className="mb-4">
              <label htmlFor="email" />
              <input
                className="w-full p-2 text-sky-600"
                name="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" />
              <input
                className="w-full p-2 text-sky-600"
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <button
                className="w-full py-2 px-6"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>

          <p className="text-center">
            Need an account?{" "}
            <Link href="/signup">
              SignUP
            </Link>
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default Login;
