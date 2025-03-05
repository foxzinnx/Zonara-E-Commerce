"use client"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { faCartPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Destaque = () => {

    useEffect(() => {
        AOS.init({});
    }, [])

    return(
        <div className="flex justify-center px-8 py-10 mt-7 items-center" data-aos="fade-down">
            <div className="max-w-[1300px] w-full">
                <div className="border-b-2 pb-3 border-neutral-200">
                    <h1 className="text-[1.4rem] font-semibold">Destaques</h1>
                </div>
                <div className="grid grid-cols-2 pt-10 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {/* Product 1 */}
                    <div className="rounded-lg overflow-hidden">
                        <div className="bg-[#F3F5F7] shadow-lg rounded-lg relative group">
                            <img className='p-5 hover:scale-110 transition-transform duration-300 cursor-pointer' src="https://www.pngarts.com/files/9/Black-Sweatshirt-Pullover-PNG-Free-Picture.png" alt="" />
                            <div className="bg-black absolute bottom-0 flex rounded-lg gap-2 justify-center items-center w-full h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                                <FontAwesomeIcon icon={faCartPlus} className="size-5 text-slate-50" />
                                <p className="text-slate-50 text-[14px]">Adicionar ao carrinho</p>
                            </div>
                        </div>  
                        <div className="py-6">
                            <FontAwesomeIcon icon={faStar} className="size-4 text-neutral-900" />
                            <FontAwesomeIcon icon={faStar} className="size-4 text-neutral-900" />
                            <FontAwesomeIcon icon={faStar} className="size-4 text-neutral-900" />
                            <FontAwesomeIcon icon={faStar} className="size-4 text-neutral-900" />
                            <FontAwesomeIcon icon={faStar} className="size-4 text-neutral-900" />
                            <p className="py-1 font-medium">Moletom Preto com Zipper Masculino</p>
                            <p>R$ 69,99</p>  
                        </div>                   
                    </div>
                    
                    {/* Product 2 */}
                    <div className="rounded-lg overflow-hidden">
                        <div className="bg-[#F3F5F7] rounded-lg shadow-lg relative group">
                            <img className='p-7 hover:scale-110 transition-transform duration-300 cursor-pointer' src='https://cdn.awsli.com.br/2500x2500/2539/2539199/produto/257207307/h130-5-png--3--d23p1nzt9q.png' />
                            <div className="bg-black absolute bottom-0 flex rounded-lg gap-2 justify-center items-center w-full h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                                <FontAwesomeIcon icon={faCartPlus} className="size-5 text-slate-50" />
                                <p className="text-slate-50 text-[14px]">Adicionar ao carrinho</p>
                            </div>
                        </div>

                        <div className="py-6">
                            <FontAwesomeIcon icon={faStar} className="size-4 text-neutral-900" />
                            <FontAwesomeIcon icon={faStar} className="size-4 text-neutral-900" />
                            <FontAwesomeIcon icon={faStar} className="size-4 text-neutral-900" />
                            <FontAwesomeIcon icon={faStar} className="size-4 text-neutral-900" />
                            <FontAwesomeIcon icon={faStar} className="size-4 text-neutral-900" />
                            <p className="py-1 font-medium">Headset Gamer Redragon Pelias, Drivers 40mm, Preto, H130</p>
                            <p>R$ 89,99</p>  
                        </div>    
                    </div>
                    
                    {/* Product 3 */}
                    <div className="rounded-lg overflow-hidden">
                        <div className="bg-[#F3F5F7] rounded-lg shadow-lg relative group">
                            <img className='p-5 hover:scale-110 transition-transform duration-300 cursor-pointer' src="/productadidas.png" alt="" />
                            <div className="bg-black absolute bottom-0 flex rounded-lg gap-2 justify-center items-center w-full h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                                <FontAwesomeIcon icon={faCartPlus} className="size-5 text-slate-50" />
                                <p className="text-slate-50 text-[14px]">Adicionar ao carrinho</p>
                            </div>
                        </div>
                        
                        <div className="py-6">
                            <FontAwesomeIcon icon={faStar} className="size-4 text-neutral-900" />
                            <FontAwesomeIcon icon={faStar} className="size-4 text-neutral-900" />
                            <FontAwesomeIcon icon={faStar} className="size-4 text-neutral-900" />
                            <FontAwesomeIcon icon={faStar} className="size-4 text-neutral-900" />
                            <FontAwesomeIcon icon={faStar} className="size-4 text-neutral-900" />
                            <p className="py-1 font-medium">Moletom Adidas Essentials Big Logo Masculino - Vermelho</p>
                            <p>R$ 299,99</p>  
                        </div>    
                    </div>
                    
                    {/* Product 4 */}
                    <div className="rounded-lg overflow-hidden">
                        <div className="bg-[#F3F5F7] rounded-lg shadow-lg relative group">
                            <img className="p-5 hover:scale-110 transition-transform duration-300 cursor-pointer" src="/macbook.png" alt="" />
                            <div className="bg-black absolute bottom-0 flex rounded-lg gap-2 justify-center items-center w-full h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                                <FontAwesomeIcon icon={faCartPlus} className="size-5 text-slate-50" />
                                <p className="text-slate-50 text-[14px]">Adicionar ao carrinho</p>
                            </div>
                        </div>
                        
                        <div className="py-6">
                            <FontAwesomeIcon icon={faStar} className="size-4 text-neutral-900" />
                            <FontAwesomeIcon icon={faStar} className="size-4 text-neutral-900" />
                            <FontAwesomeIcon icon={faStar} className="size-4 text-neutral-900" />
                            <FontAwesomeIcon icon={faStar} className="size-4 text-neutral-900" />
                            <FontAwesomeIcon icon={faStar} className="size-4 text-neutral-900" />
                            <p className="py-1 font-medium">MacBook Air M3 Midnight 13,6 polegadas 8gb Ram 256gb Ssd</p>
                            <p>R$ 6,899</p>  
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    );
}