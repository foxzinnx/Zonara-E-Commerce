"use client"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Collection = () => {

    useEffect(() => {
        AOS.init({});
    }, [])

    return(
        <div className="flex mt-5 px-8 py-14 mb-10 justify-center items-center" data-aos="fade-down">
            <div className="flex flex-col justify-center items-center max-w-[1300px] w-full">
                <h1 className="font-semibold text-2xl" data-aos="zoom-in">Categorias</h1>
                <div className="grid grid-cols-1 pt-10 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg  overflow-hidden">
                        <div className="bg-[#F3F5F7] hover:border-2 cursor-pointer rounded-lg ">
                            <img className="p-6 hover:scale-110 transition-transform duration-300" src="https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FWhite_i_Phone_16_Pro_4526d838ab.png&w=3840&q=75" alt="" />
                            <div className="flex flex-col justify-center items-center pb-7 gap-5">
                                <p className="text-2xl font-medium">Celulares</p>
                                <p className="text-[16px] hover:scale-110 transition-all duration-300 border-b-2 cursor-pointer border-neutral-500">Conferir <FontAwesomeIcon icon={faArrowRight} className="size-4" /></p>
                            </div>
                        </div>

                        
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <div className="bg-[#F3F5F7] hover:border-2 cursor-pointer rounded-lg">
                            <img className="pt-20 p-5 hover:scale-110 transition-transform duration-300" src="https://png.pngtree.com/png-vector/20231023/ourmid/pngtree-contemporary-linen-sofa-on-white-studio-background-a-png-image_10294836.png" alt="" />
                            <div className="flex flex-col justify-center items-center pb-7 gap-5">
                                <p className="text-2xl font-medium">Casa</p>
                                <p className="text-[16px] hover:scale-110 transition-all duration-300 cursor-pointer border-b-2 border-neutral-500">Conferir <FontAwesomeIcon icon={faArrowRight} className="size-4" /></p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <div className="bg-[#F3F5F7] hover:border-2 cursor-pointer rounded-lg">
                            <img className="pt-5 p-7 pb-16 hover:scale-110 transition-transform duration-300" src="https://png.pngtree.com/png-vector/20241009/ourmid/pngtree-hoodies-template-hoodie-sweatshirt-png-image_14032066.png" alt="" />
                            <div className="flex flex-col justify-center items-center pb-7 gap-5">
                                <p className="text-2xl font-medium">Roupas</p>
                                <p className="text-[16px] hover:scale-110 transition-all duration-300 cursor-pointer border-b-2 border-neutral-500">Conferir <FontAwesomeIcon icon={faArrowRight} className="size-4" /></p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}