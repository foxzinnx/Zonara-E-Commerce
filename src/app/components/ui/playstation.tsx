"use client"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const PlayStation = () => {

    useEffect(() => {
        AOS.init({});
    }, [])

    return(
        <div className="w-full flex justify-center items-center py-10">
            <div className="bg-gradient-to-r from-blue-800 to-indigo-900 flex justify-center h-[30rem] p-10 gap-14 items-center w-full">
                <div className="flex p-0 lg:p-10 px-4 md:p-32 flex-col lg:flex-row gap-5 lg:gap-36 justify-between items-center" data-aos="fade-down">
                    <img src="https://cdn.awsli.com.br/1919/1919257/arquivos/imagem_2021-12-03_141412.png" alt="" width={700}/>
                    <div className="flex items-center gap-2 pt-16 flex-col">
                        <h1 className="font-bold text-slate-50 text-2xl lg:text-3xl text-center">Produtos PlayStation com até</h1>
                        <h1 className="font-bold text-slate-50 text-2xl lg:text-3xl border-b-2 text-center border-slate-50">40% de Desconto</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}