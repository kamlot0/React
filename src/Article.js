import React from 'react';


const Article = (props) =>{
    const styles ={
        marginTop: 40,
        marginBottom: 3,
        textTransform: "uppercase"

    }
    return(
        <article >
            <h3 style={styles}>{props.title}</h3>
            <span>{props.author}</span>
            <p style={{textTransform: "lowercase"}}>{props.text}</p>
        </article>
    )
}

export default Article;