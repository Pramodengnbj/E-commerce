import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();