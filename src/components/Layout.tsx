import React from "react"
import clsx from "clsx";
import {Footer} from "./Footer";
import {Header} from "./Header/Header";
import { MetaTags } from "./MetaTags";

export type LayoutProps = {
    className?: string;
    children?: React.ReactNode;
};


const Layout: React.FC = ({children}) => {
    return (
        <div className={clsx('relative font-sans antialiased bg-s-black text-white')}>
            <MetaTags/>

            <Header/>

            <main className="relative overflow-hidden">
                {children}
            </main>

            <Footer/>

        </div>
    )

}

export default Layout;
