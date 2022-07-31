import Card from "./Card";
import Search from "./Search";



function Products({ items, addToCart, setAddToCart, handleToCart, setHandleToCart }) {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <Search items={items} />
                        {items.map(item => (
                            <Card item = {item} title = {item.title} price = {item.price} image = {item.image} key={item.id} id={item.id} toCartCheckout={addToCart} setToCartCheckout={setAddToCart} handleToCart={handleToCart} setHandleToCart={setHandleToCart}/>
                        ))}
                </div>
            </div>
      </div>
    )
}

export default Products;