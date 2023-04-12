import React from "react"
import Image from "next/image"
const Header = () => {
    return (
        <header className="m-0 bg-cover flex justify-center content-center flex-col h-banner-height bg-fish-overlay">
            <h1 className="m-0 text-heading-xl text-white tracking-small header-text-shadow font-heading"></h1>
            <Image src="/LogoAlt.png" width="200" height="20" alt="LogoAlt" className="uppercase text-lg text-white tracking-wider"/>
        </header>
    )
}

export default Header