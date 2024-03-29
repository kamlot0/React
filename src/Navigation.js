import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import "./Navigation.css";

const list = [
    {name: "start", path: "/", exact: true},
    {name: "produkty", path: "/products"},
    {name: "kontakty", path: "/contacts"},
    {name: "panel admina", path: "/admin"},
]
 
const Navigation = () => {
    const menu = list.map(item=>(
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact?item.exact : false}>{item.name}</NavLink>
            </li>
    ))
    return ( 
        <nav className="main">
            <ul>
              {menu}
            </ul>
        </nav>
     );
}
 
export default Navigation;