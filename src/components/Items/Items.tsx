import Button from "@material-ui/core/Button";
import { cartItemType } from "../../App";
import { Wrapper } from "./Items.styles";

type Props = {
  item: cartItemType;
  handleAddToCart: (clickedItem: cartItemType) => void;
};
const Items: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
      <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </Wrapper>
  );
};
export default Items;
