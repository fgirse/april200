import React from "react"
import MenuButton from "./MenuButton"

const MenuButtons = () => {
    return (
        <section className="pt-12 flex-col justify-center items-center">
            <MenuButton url="/menu-pdf-food.pdf" menu_type="Food" />
            <MenuButton url="/menu-pdf-drinks.pdf" menu_type="Drinks" />
            <MenuButton url="/menu-pdf-catering.pdf" menu_type="Catering" />
        </section>

    )
}
export default MenuButtons