import { useState } from "react";
import { useQuery } from "react-query";
import Drawer from "@material-ui/core/Drawer";
import Items from "./components/Items/Items";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
import { Wrapper } from "./App.styles";

export type cartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<cartItemType[]> => {
  return await (await fetch("https://fakestoreapi.com/products")).json();
};

const App = () => {
  const { data, isLoading, error } = useQuery<cartItemType[]>(
    "products",
    getProducts
  );
  const getTotalItems = () => null;
  const handleAddToCart = (clickedItem: cartItemType) => null;
  const handleRemoveFromCart = () => null;
  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong</div>;
  console.log(data, isLoading, "checking data");
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello world</h1>
      </header>
    </div>
  );
};

export default App;
