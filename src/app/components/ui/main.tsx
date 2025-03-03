"use client"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Main = () => {

    useEffect(() => {
        AOS.init({});
    }, [])

    return (
        <div className="flex justify-center">
            <div className="rounded-3xl pl-14 md:pl-0 lg:pl-0 min-w-[1500px] lg:min-w-[1900px] flex justify-center items-center" data-aos="fade-left">
               <img src="/hero1.png" alt="" width={1920}/>
            </div>
        </div>
    );
}