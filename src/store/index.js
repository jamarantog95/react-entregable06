import { configureStore } from '@reduxjs/toolkit'
import products from './slices/products.slice'
import cart from './slices/cart.slice'

// Se almacenara todas las variables globales

export default configureStore({
    reducer: {
        products,
        cart
    }
})