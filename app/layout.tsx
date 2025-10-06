import Navbar from "@/components/Navbar";
import type { ReactNode } from "react";
import '@/assets/styles/globals.css';
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
    title: 'Property Pulse',
    keywords: 'rental, property, real estate',
    description: 'Find the perfect rental proerty'
};

const MainLayout = ({ children }: {children: ReactNode}) => {
    return (
        <AuthProvider>
            <html>
                <body>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </body>
            </html>
        </AuthProvider>
    )
}

export default MainLayout;