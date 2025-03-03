import Link from "next/link";

export default function Page(){
    return (
        <div className="flex flex-col gap-16 md:flex-row items-center lg:h-screen bg-white">
            <div className="relative w-full md:w-1/2 h-1/2 md:h-screen">
                <img className="h-full w-full object-cover" src="https://bellakaza.com/wp-content/uploads/2022/02/living-room-interior-wall-in-warm-tones-gray-armchair-with-wood-cabinet-3d-rendering-scaled.jpg" alt="" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-7 text-white">
                    <p className="text-2xl lg:text-4xl md:text-3xl font-bold text-black drop-shadow-lg">ZONARA</p>
                </div>
            </div>

            <div className="mb-10 lg:pl-24 lg:justify-start w-full md:w-1/2 h-1/2 md:h-screen flex items-center justify-center">
                <div className="px-4 flex-wrap">
                    <p className="font-inter text-3xl text-neutral-900 font-medium">Cadastre-se</p>
                    <p className="pt-5 text-[15px]">Já tem uma conta? <Link href={"/signin"}><span className="font-medium">Entrar</span></Link></p>
                    <form className="mt-10">
                        <div className="flex items-center gap-10 flex-col">
                            <input type="text" placeholder="Seu nome" className="px-1 w-80 placeholder:text-neutral-500 h-8 border-b pb-3 outline-none border-neutral-200" />
                            <input type="text" placeholder="Nome de usuário" className="px-1 h-8 w-80 placeholder:text-neutral-500 pb-3 outline-none border-b border-neutral-200" />
                            <input type="email" placeholder="Email" className="px-1 w-80 h-8 border-b placeholder:text-neutral-500 pb-3 outline-none border-neutral-200" />
                            <input type="password" placeholder="Senha" className="px-1 w-80 h-8 pb-3 placeholder:text-neutral-500 outline-none border-b border-neutral-200" />
                        </div>

                        <div className="mt-8 w-80 flex items-center gap-3">
                            <input className="size-6" type="checkbox" />
                            <p className="text-sm">Concordo com a <span className="font-medium cursor-pointer">Política de Privacidade</span> e <span className="font-medium cursor-pointer">Termos de Uso</span></p>
                        </div>
                    </form>

                    <Link href={"/"}>
                        <div className="w-80 mt-7 bg-black hover:bg-[#111] transition-all duration-300 rounded-md h-10">
                            <button className="w-full h-full text-slate-50">Cadastrar</button>
                        </div>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
}