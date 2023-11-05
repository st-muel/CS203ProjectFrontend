"use client";

import { useAtom, useAtomValue } from "jotai";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SigninForm from "../components/SignInForm";
import { jwtTokenAtom } from "../jotai";
import { useEffect, useState } from "react";
import { RedirectType, redirect } from "next/navigation";

interface props {
    searchParams: any;
}

export default function RedirectSignIn({ searchParams }: props) {

    const jwtToken = useAtomValue(jwtTokenAtom);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        console.log("From Signin page: " + jwtToken);
        if (jwtToken != null) {
            setIsLoggedIn(true);
        }
        console.log(isLoggedIn);
        if (isLoggedIn) {
            redirect(searchParams.redirectUrl, RedirectType.replace);
        }
    }, [jwtToken]);

  return (

    <main>
      <div className="bg-primary-black overflow-hidden">
        <div>
          {/* <Events eventCatalogues={eventCataloguesData} /> */}
          <div className="gradient-03 z-0 pointer-events-none" />
          <Navbar />
        </div>
        <div className="relative">
          {/* <ConcertDetails /> */}
          <SigninForm setOpen={(open: boolean) => {open = !open}}/>
          <div className="gradient-04 z-0" />
          {/* <Pricing /> */}
        </div>
        <div className="relative">
          {/* <Policy /> */}
          <div className="gradient-03 z-0" />
          <Footer />
        </div>
      </div>
    </main>
  );
}
