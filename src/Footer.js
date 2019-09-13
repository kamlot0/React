import React from 'react';
import {Route} from 'react-router-dom';


const Footer = () => {
    return ( 
        <div>
            <h2>Stopka</h2>
            <Route path="/" exact render={(props)=>{
                return(
                <p>jestes na strona główna</p>
                )
            }}/>
            <Route path="/:page" exact render={(props)=>{
                return(
                    <p>jestes na {props.match.params.page}</p>                )
            }}/>
           
            <Route path="/:page/:idProducts" exact render={(props)=>{
                return(
                    <p>jestes na {props.match.params.page.idProducts}</p>                )
            }}/>
           
        </div>
     );
}
 
export default Footer;