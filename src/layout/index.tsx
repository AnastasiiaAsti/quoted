import { Inter } from 'next/font/google'
import  Navigation  from "../components/Navigation"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Quoted',
}

export default function Layout({children,}: {children: React.ReactNode}) {
    return (
            <div className={inter.className}>
                <Navigation />
                {children}
            </div>
    )
}