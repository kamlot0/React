import React from'react';
import './ContactPage.css'
import {Prompt} from 'react-router-dom'

class ContactPage extends React.Component{
    state={
        value:"",
        
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.setState({
            value: "",
        })
    }
    handleChange=(e)=>{
        this.setState({
            value: e.target.value,
        })
    }
    render(){
    return ( 
        <>
        <div className ="contact">
        <form onSubmit={this.handleSubmit}>
            <h3>Napisz do nas</h3>
            <textarea value={this.state.value}
            onChange={this.handleChange} placeholder="Wpisz wiadomosć"></textarea>
            <button >Wyślij</button>
        </form>
        <Prompt
            when={this.state.value}
            massage="Czy na pewno chcesz wyjsc?"
            />
        </div>
        </>
     );
    }
}
 
export default ContactPage;