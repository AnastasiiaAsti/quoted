'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navigation() {
    const router = useRouter();

    return (
        <div className="py-3">
            <nav className="container mx-auto flex flex-row items-center justify-between">
                <h1 className="px-3">
                    <Link href="/">
                        Quoted
                    </Link>
                </h1>
                <ul className="flex flex-row items-center justify-between">
                    <li className="px-2">
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className="px-2">
                        <Link href="/profile">
                            Profile
                        </Link>
                    </li>
                    <li className="px-3">
                        <button>Logout</button>
                        <Link href="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
