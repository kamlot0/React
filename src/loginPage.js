import React from 'react';

const loginPage = () => {
    return (
        <div>
            <label htmlFor="">Podaj login<input type="text"/></label>
            <label htmlFor="">Podaj haslo<input type="password"/></label>
            <button>Zaloguj</button>
        </div>

      );
}
 
export default loginPage;