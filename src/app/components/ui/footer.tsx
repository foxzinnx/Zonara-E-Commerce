export const Footer = () => {
    return(
        <div className="bg-neutral-950 flex-col w-full flex justify-center items-center">
            <div className="max-w-[1550px] flex-col lg:flex-row md:flex-row flex-wrap gap-8 p-10 pt-14 flex justify-between items-center w-full">
                <div className="">
                    <h1 className="text-white flex items-center gap-3 text-2xl font-bold">ZONARA <span className="font-light">| </span><span className="font-normal text-[14px]">E-Commerce</span></h1>
                </div>

                <div>
                    <ul className="flex gap-10 flex-wrap flex-col lg:flex-row md:flex-row text-center text-[14px] text-white">
                        <li className="cursor-pointer">Produtos</li>
                        <li className="cursor-pointer" >Catalogo</li>
                        <li className="cursor-pointer">Vender</li>
                        <li className="cursor-pointer">Contato</li>
                        <li className="cursor-pointer">Sobre nós</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-[1510px] flex-col text-center justify-center px-4 border-t-2 border-neutral-800 w-full pt-5 pb-5 flex flex-wrap gap-5">
                <div className="flex items-center justify-center lg:justify-start text-center flex-wrap gap-5">
                    <p className="text-slate-200 text-[12px]">Copyright © 2025 ZONARA. All rights reserved</p>
                    
                    <p className="font-semibold text-[12px] text-slate-100 text-center cursor-pointer">Política de Privacidade</p>
                    <p className="font-semibold text-[12px] text-slate-100 text-center cursor-pointer">Termos de Uso</p>
                </div>
            </div>
        </div>
    );
}