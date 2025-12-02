import Navbar from "@/components/Navbar";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { ToastContainer } from "react-toastify";
import { GlobalProvider } from "@/context/GlobalContext";

import '@/assets/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'photoswipe/dist/photoswipe.css'

export const metadata = {
    title: 'Property Pulse',
    keywords: 'rental, property, real estate',
    description: 'Find the perfect rental proerty'
};

const MainLayout = ({ children }: {children: ReactNode}) => {
    return (
        <AuthProvider>
            <GlobalProvider>
                <html>
                    <body>
                        <Navbar />
                        <main>{children}</main>
                        <Footer />
                        <ToastContainer />
                    </body>
                </html>
            </GlobalProvider>
        </AuthProvider>
    )
}

export default MainLayout;