import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  return productos.map((prod) => <Item key={prod.id} info={prod} />);
};

export default ItemList;
