import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart,addToCartZero } from '../cartSlice'
const Header = () => {
  const dispatch=useDispatch()
  const cart=useSelector((result)=>{
        // console.log(result);
        return result.cart.count ;
  
  })
  const [cat, setCat] = useState([])
    // useState ma cat se aenthi apde loop ghomvi
    // sum karva mate function upado se te se 
    const sumOfKeyValues = (array, key) => {
      return array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue[key];
      }, 0);
    }; 
  useEffect(() => { 
    // category no data show karo shop vala page ma aeni api 
    axios.get(`http://localhost:8000/category`).then((result) => { 
        setCat(result.data)
    })
  },[])

  useEffect(()=>{
     axios.get(`http://localhost:8000/cart?uid=${localStorage.getItem('userid')}`).then((result)=>{
       console.log(result.data);  
       if(result.data.length === 0){
        dispatch(addToCartZero())  //login karvi tayre 0 thaye jay tena mate 0 karo
       }else{
        const sum = sumOfKeyValues(result.data, 'quntity');  // sum mate lidthe se 
        //  console.log(sum);
        dispatch(addToCartZero()) // be var call thaye jay se aetle 0 karlu se
        dispatch(addToCart(sum))

       }
     })
  },[])
  return (
      <>
          <header id="header" class="header header_sticky">
    <div class="container">
      <div class="header-desk header-desk_type_1">
        <div class="logo">
          <a href="">
            <img src="../images/logo.png" alt="Uomo" class="logo__image d-block" />
          </a>
        </div>

        <nav class="navigation">
          <ul class="navigation__list list-unstyled d-flex">
            <li class="navigation__item">
              <Link to={'/'} class="navigation__link">Home</Link>
                              
            </li>
            <li class="navigation__item">
              <a href="#" class="navigation__link">Shop</a>
              <div class="mega-menu">
                <div class="container d-flex">
                  <div class="col pe-4">
                    <a href="#" class="sub-menu__title">Category List</a>
                    <ul class="sub-menu__list list-unstyled">
                          {cat.map((result) => { 
                            return (
                              <>
                                <li class="sub-menu__item"><Link to={`/category/${result.id}`}  class="menu-link menu-link_us-s">{ result.name}</Link></li>
                              </>
                              )
                          }) }
                     
                    </ul>
                      </div>
                  </div>
              </div>
            </li>
            <li class="navigation__item">
              <a href="#" class="navigation__link">Blog</a>
             
            </li>
            <li class="navigation__item">
              <a href="#" class="navigation__link">Pages</a>
              
            </li>
            <li class="navigation__item">
              <a  class="navigation__link">About</a>
            </li>
            <li class="navigation__item">
              <a class="navigation__link">Contact</a>
            </li>
          </ul>
        </nav>

        <div class="header-tools d-flex align-items-center">
          <div class="header-tools__item hover-container">
            <div class="js-hover__open position-relative">
              <a class="js-search-popup search-field__actor" href="#">
                <svg class="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_search" /></svg>
                <i class="btn-icon btn-close-lg"></i>
              </a>
            </div>
          </div>

          <div class="header-tools__item hover-container">
            <Link to={'/login'} class="header-tools__item js-open-aside" data-aside="customerForms">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_user" /></svg>
            </Link>
          </div>

          <Link  to={'/cart'}  href="#" class="header-tools__item header-tools__cart js-open-aside" data-aside="cartDrawer">
            <svg class="d-block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><use href="#icon_cart" /></svg>
            <span class="cart-amount d-block position-absolute js-cart-items-count">{cart}</span>
          </Link>

         
       
        </div>
      </div>
    </div>
  </header> 
      </>
  )
}

export default Header