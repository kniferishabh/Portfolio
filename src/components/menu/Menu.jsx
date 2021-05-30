import "./menu.scss";
import React from 'react';
import MenuOnClick from "../menuOnClick/MenuOnClick";

export default function Menu({menuOpen, setMenuOpen}) {

    const list = [
        {
            id : "#intro",
            ref : "Home",
        },
        {
            id : "#portfolio",
            ref : "Portfolio",
        },
        {
            id : "#works",
            ref : "Works",
        },
        {
            id : "#testimonials",
            ref : "Testimonials",
        },
        {
            id : "#contact",
            ref : "Contact",
        },
    ];
    return (
        <div className={"menu "+ (menuOpen && "active")}>
            <ul>
                {list.map((item)=>(
                    <MenuOnClick setMenuOpen={setMenuOpen}
                    id = {item.id}
                    title = {item.ref}/>
                ))}
            </ul>
        </div>
    )
}
