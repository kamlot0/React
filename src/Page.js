import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './HomePage';
import ProductPage from './ProductPage';
import ProductList from './ProductList';
import AdminPage from './AdminPage';
import ContactPage from './ContactPage';
import loginPage from './loginPage';
import ErrorPage from './ErrorPage';

const Pager = () => {
    return ( 
        <>
        <Switch>
            <Route path="/" exact component ={HomePage}/>
            <Route path="/products" component ={ProductList}/>
            <Route path="/products/:id" component ={ProductPage}/>
            <Route path="/contacts" component ={ContactPage}/>
            <Route path="/admin" component ={AdminPage}/>
            <Route path="/login" component ={loginPage}/>
            <Route path="/" component ={ErrorPage}/>
            </Switch>
        </>
    );
}
 
export default Pager;