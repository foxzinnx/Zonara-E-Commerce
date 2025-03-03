"use client"

import { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Search = () => {
    
    const [isInputVisible, setInputVisible] = useState(false);

    const toggleInputVisibility = () => {
        setInputVisible(!isInputVisible);
    };

    return (
        <div className="flex items-center relative">
            <div 
                className={`transition-all duration-300 ease-in-out flex items-center h-10 bg-[#F5F5F5] overflow-hidden
                ${isInputVisible ? 'w-64 opacity-100' : 'w-0 opacity-0'}`}
            >
                <div className="flex items-center px-3 w-64">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="size-4 text-[#353535] drop-shadow-md" />
                    <input
                        className="bg-transparent px-2 w-full h-full outline-none placeholder:text-[15px] placeholder:text-[#777777] placeholder:drop-shadow-md"
                        placeholder="O que deseja?"
                    />
                </div>
            </div>

            <div 
                className={`transition-opacity duration-300 pt-1 ease-in-out cursor-pointer
                ${isInputVisible ? 'opacity-0 invisible' : 'opacity-100 visible'}`} 
                onClick={toggleInputVisibility}
            >
                <FontAwesomeIcon icon={faMagnifyingGlass} className="size-5" />
            </div>
        </div>
    );
};