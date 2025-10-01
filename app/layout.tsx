import type { ReactNode } from "react";

import '@/assets/styles/globals.css';

export const metadata = {
    title: 'Property Pulse',
    keywords: 'rental, property, real estate',
    description: 'Find the perfect rental proerty'
};

const MainLayout = ({ children }: {children: ReactNode}) => {
    return (
        <html>
            <body>
                <main>{children}</main>
            </body>
        </html>
    )
}

export default MainLayout;