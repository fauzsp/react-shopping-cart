import { useState } from "react";
import { useQuery } from "react-query";
import Drawer from "@material-ui/core/Drawer";
import Items from "./components/Items/Items";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
import { Wrapper } from "./App.styles";

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> => {
  return await (await fetch("https://fakestoreapi.com/products")).json();
};

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItem, setCartItem] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  const getTotalItems = () => null;
  const handleAddToCart = (clickedItem: CartItemType) => null;
  const handleRemoveFromCart = () => null;
  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong</div>;
  console.log(data, isLoading, "checking data");
  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        Cart goes here
      </Drawer>
      <Grid container spacing={3}>
        {data?.map((elem) => {
          return (
            <Grid item key={elem.id} xs={12} sm={4}>
              <Items item={elem} handleAddToCart={handleAddToCart} />
            </Grid>
          );
        })}
      </Grid>
    </Wrapper>
  );
};

export default App;
