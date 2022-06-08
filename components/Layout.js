import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({children}) {

    return (
        <>
            <Head>
                <title>Next Profiles</title>
            </Head>
            <Navbar />
            <main className="main_container">{children}</main>
            <Footer />
        </>
    )
}