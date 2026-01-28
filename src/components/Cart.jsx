import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if(cartItems.length === 0) return <p style={{textAlign:'center'}}>Cart is empty. <Link to="/">Shop now</Link></p>;