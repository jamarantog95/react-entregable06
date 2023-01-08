import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import FilterCategory from '../components/Home/FilterCategory'
import FilterPrice from '../components/Home/FilterPrice'
import ToOrderProducts from '../components/Home/ToOrderProducts'
import './styles/home.css'

const Home = () => {

    // Accedemos al store
    const products = useSelector(state => state.products)

    // Controlamos el input colocarlo en vacio cuando se ejecute el filtro
    const [inputValue, setInputValue] = useState("")

    // Filtrado de productos
    const [productsFilter, setProductsFilter] = useState()
    const [inputPrice, setInputPrice] = useState({
        from: 0,
        to: Infinity
    })

    useEffect(() => {
        if (products) {
            setProductsFilter(products)
        }
    }, [products])


    const handleChange = e => {
        const inputValue = e.target.value.toLowerCase().trim()
        const filter = products?.filter(prod => prod.title.toLowerCase().includes(inputValue))
        setProductsFilter(filter)
        setInputValue(e.target.value)
    }
    console.log(productsFilter)

    const filterCallBack = (prod => +prod.price > inputPrice.from && +prod.price <= inputPrice.to)

    return (

        <div>
            <input value={inputValue} onChange={handleChange} type="text" />

            <FilterCategory setInputValue={setInputValue} />

            <FilterPrice setInputPrice={setInputPrice} />

            <ToOrderProducts />

            <div className='products-container'>
                {

                    productsFilter?.filter(filterCallBack).length !== 0 ?

                        productsFilter?.filter(filterCallBack).map(product => (
                            <CardProduct
                                key={product.id} //mejor optimizacion posible
                                product={product}
                            />
                        )) :
                        <h1>Not exist products to this filter</h1>

                }
            </div>

        </div>
    )
}

export default Home