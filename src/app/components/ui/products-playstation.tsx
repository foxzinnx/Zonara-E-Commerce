"use client"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { faCartPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProductsPlay = () => {

    useEffect(() => {
        AOS.init({});
    }, [])

    return(
        <div className="flex justify-center px-8 py-10 mt-7 items-center" data-aos="fade-down">
            <div className="max-w-[1300px] w-full">
                <div className="border-b-2 pb-3 border-neutral-200">
                    <h1 className="text-[1.4rem] font-semibold">PlayStation</h1>
                </div>
                <div className="grid grid-cols-2 pt-10 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {/* Product 1 */}
                    <div className="rounded-lg overflow-hidden">
                        <div className="bg-[#F3F5F7] shadow-lg rounded-lg relative group">
                            <img className='p-5 hover:scale-110 transition-transform duration-300 cursor-pointer' src="/ps5.png" alt="" />
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
                            <p className="py-1 font-medium">Console PlayStation 5 1TB</p>
                            <p>R$ 2.699,40 | <span className="line-through">R$ 4.499</span></p>  
                        </div>                   
                    </div>
                    
                    {/* Product 2 */}
                    <div className="rounded-lg overflow-hidden">
                        <div className="bg-[#F3F5F7] rounded-lg shadow-lg relative group">
                            <img className='p-7 hover:scale-110 transition-transform duration-300 cursor-pointer' src='/pulse.png'/>
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
                            <p className="py-1 font-medium">Headset sem fio PULSE 3D Sony PlayStation</p>
                            <p>R$ 383,40 | <span className="line-through">R$ 639,00</span></p>  
                        </div>    
                    </div>
                    
                    {/* Product 3 */}
                    <div className="rounded-lg overflow-hidden">
                        <div className="bg-[#F3F5F7] rounded-lg shadow-lg relative group">
                            <img className='p-5 hover:scale-110 transition-transform duration-300 cursor-pointer' src="/controle.png" alt="" />
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
                            <p className="py-1 font-medium">Controle de Mídia - PlayStation 5</p>
                            <p>R$ 114,60 | <span className="line-through">R$ 191,00</span></p>  
                        </div>    
                    </div>
                    
                    {/* Product 4 */}
                    <div className="rounded-lg overflow-hidden">
                        <div className="bg-[#F3F5F7] rounded-lg shadow-lg relative group">
                            <img className="p-5 hover:scale-110 transition-transform duration-300 cursor-pointer" src="/dualsense.png" alt="" />
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
                            <p className="py-1 font-medium">Controle sem fio DualSense Edge - PlayStation</p>
                            <p>R$ 881,71 | <span className="line-through">R$ 1.469,52</span></p>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
}