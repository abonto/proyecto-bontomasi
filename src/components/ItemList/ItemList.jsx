import Item from '../Item/Item';

const ItemList = ({list}) => {

//<Item key={product.id} id={props.id} title={product.title} price={product.price} stock={product.stock} img={product.img} i={props.i}/>

  return (
        <>
          {list.map((item) => <Item item={item}/>)}
        </>
    )
  }
export default ItemList