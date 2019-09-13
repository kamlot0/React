import React from'react';
import Article from './Article'

const articles = [
    {
        id: 1,
        title: "Czy, jest teoria",
        author: "Jan Kow",
        text: "LORWEEWedsLORWEEWedsLORWEEWedsLORWEEWedsLORWEEWeds",
    },
    {
        id: 2,
        title: "Czy, jest teoria",
        author: "Jan ascma;scma",
        text: "LORWEEWedsLORWEEWedsLORWEEWedsLORWEEWedsLORWEEWeds",
    },
    {
        id: 3,
        title: "Czy, jest teoria",
        author: "Jan aeiofjao",
        text: "LORWEEWedsLORWEEWedsLORWEEWedsLORWEEWedsLORWEEWeds",
    }
]

const HomePage = () => {
    const artList = articles.map(article=>(
        <Article key={article.id} {...article}/>
    ))
    return ( 
        <>
        <div></div>
        {artList}
        </>
     );
}
 
export default HomePage;