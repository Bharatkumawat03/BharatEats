import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart());
    }
    return (
        <div>
            <h1>cart - {cartItems.length} </h1>
            <button onClick={handleClearCart}>clear Cart</button>
            {cartItems.map(item => <FoodItem key={item.id} {...cartItems[0]}/>)}
            
        </div>
    )
}

export default Cart;