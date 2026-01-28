import React from "react";
import ProductItem from "./ProductItem";
import { useFetchProducts } from "../hooks/useFetchProducts";

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();
  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;