import React from 'react'
import "./menuOnClick.scss"

export default function MenuOnClick({setMenuOpen, id, title}) {
    return (
        
        <li className = "menuOnclickList" onClick={()=>setMenuOpen(false)}>
            <a href={id}>{title}</a>
        </li>
        
    )
}
