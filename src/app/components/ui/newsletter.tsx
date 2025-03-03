import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Newsletter = () => {
    return (
        <div className="w-full flex justify-center pt-14 items-center relative">
            <div className="w-full flex justify-center items-center bg-neutral-200">
                <div className="flex p-16 flex-col gap-2 justify-center items-center">
                    <h1 className="text-xl font-medium">Assine nossa NewsLetter</h1>
                    <p className="text-center">Inscreva-se para ofertas, novos produtos e promoções.</p>
                    <div className="mt-10 flex items-center bg-neutral-200 w-80 md:w-96 lg:w-96 h-8 border-b-2 border-neutral-400">
                        
                        <FontAwesomeIcon icon={faEnvelope} className="size-4 text-neutral-500" />
                        <input
                        placeholder="Email"
                        className="bg-transparent w-full px-2 outline-none"
                        />
                        <p className="text-[13px] rounded-md transition-all duration-300 cursor-pointer hover:bg-neutral-500 hover:text-slate-50 p-1 font-medium text-neutral-800">Enviar</p>
                    </div>
                </div>
            </div>
        </div>
    );
}