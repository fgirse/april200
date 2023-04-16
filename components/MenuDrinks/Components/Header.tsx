import React from "react"
import Image from "next/image"
const Header = () => {
    return (
        <header className="m-0 bg-cover flex flex-col justify-center content-center flex-col h-banner-height bg-fish-overlay">
            <h1 className="m-0 text-heading-xl text-white tracking-small header-text-shadow font-heading">wähle eine Rubrik</h1>
        </header>
    )
}

export default Header