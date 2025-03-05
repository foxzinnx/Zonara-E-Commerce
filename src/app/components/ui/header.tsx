"use client"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Search } from "./search";

import { faBell, faCircleUser } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

export const Header = () => {

    useEffect(() => {
        AOS.init({});
    }, [])

    return (
        <header className="flex border-2 border-b-[#e7e7e7] px-2 justify-center items-center" data-aos="zoom-in">
            
            <div className="flex lg:hidden md:hidden flex-col md:flex-row lg:flex-row justify-between p-5 lg:p-4 items-center max-w-[1600px] w-full">
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-black text-2xl font-bold">ZONARA</h1>
                    <div className="flex gap-5 items-center">
                        <FontAwesomeIcon icon={faBell} className="size-6" />
                        <Link href={"/signup"} className="block">
                            <FontAwesomeIcon icon={faCircleUser} className="size-6 flex items-center text-[#181818]" />
                        </Link>
                    </div>
                </div>
                

                <div className="flex mt-5 md:mt-0 lg:mt-0 px-3 items-center gap-5">
                    <Search />
                </div>
            </div>


            <div className="hidden md:flex lg:flex flex-col md:flex-row lg:flex-row justify-between p-5 lg:p-4 items-center max-w-[1600px] w-full">
                <h1 className="text-black text-2xl font-bold">ZONARA</h1>
                <div className="hidden lg:flex items-center">
                    <ul className="flex cursor-pointer text-[#000000] gap-10">
                        <li className="hover:scale-105 hover:border-b-black hover:border-b-2 transition duration-400 ease-in-out">Produtos</li>
                        <li className="hover:scale-105 hover:border-b-black hover:border-b-2 transition duration-400 ease-in-out">Catalogo</li>
                        <li className="hover:scale-105 hover:border-b-black hover:border-b-2 transition duration-400 ease-in-out">Vender</li>
                        <li className="hover:scale-105 hover:border-b-black hover:border-b-2 transition duration-400 ease-in-out">Contato</li>
                        <li className="hover:scale-105 hover:border-b-black hover:border-b-2 transition duration-400 ease-in-out">Sobre nós</li>
                    </ul>
                </div>

                <div className="flex mt-5 md:mt-0 lg:mt-0 px-3 items-center gap-5">
                    <Search />
                    <div className="flex gap-4 cursor-pointer">
                        <Link href={"/signup"} className="block">
                        <FontAwesomeIcon icon={faCircleUser} className="size-6 flex items-center text-[#181818]" />
                        </Link>
                        
                        <FontAwesomeIcon icon={faBell} className="size-6" />
                    </div>
                </div>
            </div>
        </header>
    );
}