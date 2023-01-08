import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/Cart/CartProduct'
import { getUserCart } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'

const Cart = () => {

    const cartProducts = useSelector(state => state.cart)
    // console.log(cartProducts)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserCart())
    }, [])



    const handleCheckout = () => {

        const URL = 'https://e-commerce-api.academlo.tech/api/v1/purchases'

        const data = {
            street: "Green St. 1456",
            colony: "Southwest",
            zipCode: 12345,
            ciy: "USA",
            references: "Some references"
        }

        axios.post(URL, data, getConfig())
            .then(res => {
                console.log(res.data)
                dispatch(getUserCart())
            })
            .catch(err => console.log(err))
    }

    return (
        <section>
            <h2>Cart</h2>
            <div>
                {
                    cartProducts?.map(product => (
                        <CartProduct
                            key={product.id}
                            product={product}
                        />
                    ))
                }
            </div>
            <footer>
                <span>Total:</span>
                <p>
                    {
                        // acc:acumulador, cv:valor actual
                        cartProducts ?
                            cartProducts.reduce((acc, cv) => {
                                return cv.price * cv.productsInCart.quantity + acc
                            }, 0)
                            :
                            0
                    }
                </p>
                <button onClick={handleCheckout}>Checkout</button>
            </footer>
        </section>
    )
}

export default Cart