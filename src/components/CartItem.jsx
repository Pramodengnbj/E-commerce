import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();