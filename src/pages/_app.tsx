import type { AppProps } from "next/app";
import "../app/globals.css";
import { useRouter } from "next/router";
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "../components/ProtectedRoute";

const protectedRoutes = ["/profile"];

function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    return (
        <AuthProvider>
            {protectedRoutes.includes(router.pathname) ? (
                <ProtectedRoute>
                    <Component {...pageProps} />
                </ProtectedRoute>
            ) : (
                <Component {...pageProps} />
            )}
        </AuthProvider>
    );
}

export default App;