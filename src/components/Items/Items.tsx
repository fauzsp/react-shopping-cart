import Button from "@material-ui/core/Button";
import { CartItemType } from "../../App";
import { Wrapper } from "./Items.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};
const Items: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <Wrapper>
      <div>
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
        <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
      </div>
    </Wrapper>
  );
};
export default Items;
