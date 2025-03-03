"use client"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const TopHeader = () => {

    useEffect(() => {
        AOS.init({});
    }, [])

    return(
        <div className="bg-neutral-200 h-[48px] flex justify-center px-4 items-center" data-aos="zoom-in">
            <p className="text-neutral-900 font-medium text-[12px] md:text-[13px] lg:text-[15px]">Aproveite nossas promoções de até <span className="border-b-[1px] border-[#377DFF] text-[#377DFF] pb-[2px]">70% de desconto</span></p>
        </div>
    );
}