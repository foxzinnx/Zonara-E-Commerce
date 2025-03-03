
export const Sidebar = () => {
    return(
        <div className="hidden lg:flex justify-center items-center">
            <div className="w-full flex justify-between items-center max-w-[1620px]">
                <div className="border-r-2 border-r-[#e7e7e7]">
                    <ul className="p-5 font-medium">
                        <li className="mb-4 cursor-pointer">Roupas Masculinas</li>
                        <li className="mb-4 cursor-pointer">Roupas Femininas</li>
                        <li className="mb-4 cursor-pointer">Tecnologia</li>
                        <li className="mb-4 cursor-pointer">Esportes</li>
                        <li className="mb-4 cursor-pointer">Casa & Estilo de Vida</li>
                        <li className="mb-4 cursor-pointer">Brinquedos</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}