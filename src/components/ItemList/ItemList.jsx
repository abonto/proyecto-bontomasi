import Item from '../Item/Item';

const ItemList = ({list}) => {

  return (
      <section>
        {list.map(product => 
            <Item key={product.id} item={product}/>
        )}
      </section>
    )
  }
export default ItemList