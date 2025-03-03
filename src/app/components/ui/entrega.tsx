import { faHeadset, faShieldHalved, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Entrega = () => {
    return (
        <div className="flex justify-center items-center flex-wrap py-5 px-4">
            <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center px-4 bg-[#F3F5F7] border-t-2 border-t-[e7e7e7] border-b-2 border-b-[e7e7e7] w-full max-w-[1300px] rounded-2xl flex-wrap">
                <div className="flex flex-col py-10 items-center md:w-1/3"> 
                    <FontAwesomeIcon icon={faTruckFast} className="size-[2rem] p-4 bg-[#000000] rounded-full text-slate-50" />
                    <p className="pt-3 text-black font-bold">Entrega rápida</p>
                    <p className="pt-1 text-[14px]">Entregamos em até 7 dias úteis</p>
                </div>

                <div className="flex flex-col py-10 items-center md:w-1/3"> 
                    <FontAwesomeIcon icon={faHeadset} className="size-[2rem] p-4 bg-[#000000] rounded-full text-slate-50" />
                    <p className="pt-3 text-black font-bold">Suporte 24/4</p>
                    <p className="pt-1 text-[14px]">Respondemos em até 15 minutos</p>
                </div>

                <div className="flex flex-col py-10 items-center md:w-1/3"> 
                    <FontAwesomeIcon icon={faShieldHalved} className="size-[2rem] p-4 bg-[#000000] rounded-full text-slate-50" />
                    <p className="pt-3 text-black font-bold">Site seguro</p>
                    <p className="pt-1 text-[14px] text-center max-w-xs">Nosso site possui criptografia para garantir a sua segurança</p>
                </div>
            </div>
        </div>
    );
}