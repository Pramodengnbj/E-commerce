import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const cartItems = useSelector(state => state.cart.cartItems);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const placeOrder = () => {
    alert("Order placed successfully!");
    dispatch(clearCart());
    navigate("/");
  };
