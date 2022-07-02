import React from "react"
import clsx from "clsx";
import {Footer} from "./Footer";
import {Header} from "./Header/Header";
import {MetaTags} from "./MetaTags";
import {SkipMainLink} from "./SkipMainLink";
import {LazyMotion, domAnimation} from "framer-motion"

export type LayoutProps = {
    className?: string;
    children?: React.ReactNode;
};


const Layout: React.FC = ({children}) => {
    return (
        <LazyMotion features={domAnimation}>
            <div className={clsx('relative font-sans antialiased bg-s-black text-white overflow-hidden')}>
                <MetaTags/>

                <SkipMainLink/>

                <Header/>

                <main className="relative" id="main">
                    {children}
                </main>

                <Footer/>

            </div>
        </LazyMotion>
    )

}

export default Layout;
