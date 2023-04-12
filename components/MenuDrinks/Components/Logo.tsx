import Image from 'next/image'
import React from 'react';

const Logo = () => {
    return (
        <div className="flex flex-col items-center sm:justify-center sm:mt-9 sm:flex-row text-justify relative">
            <div className="sm:mr-10 min-w-1/3">
                <Image
                    src="/bottles03.png"
                    alt="Profile"
                    width={454}
                    height={424}                
                    objectFit="cover"
                />
            </div>
        </div>
    )
}

export default Logo;