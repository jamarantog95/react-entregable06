import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts, getProductsByCategory } from '../../store/slices/products.slice'

const FilterCategory = ({ setInputValue }) => {

    const [categories, setCategories] = useState()

    useEffect(() => {
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/products/categories'
        axios.get(URL)
            .then(res => setCategories(res.data.data.categories))
            .catch(err => console.log(err))
    }, [])

    // console.log(categories)

    const dispatch = useDispatch()

    const handleClick = id => {
        dispatch(getProductsByCategory(id))
        setInputValue("") // reseteamos los input a vacio
    }

    const handleAllProducts = () => {
        dispatch(getAllProducts())
        setInputValue("") // reseteamos los input a vacio
    }

    return (
        <section>
            <h3>Categories</h3>
            <ul>
                <li onClick={handleAllProducts} >All products</li>
                {
                    categories?.map(category => (
                        <li onClick={() => handleClick(category.id)} key={category.id}>{category.name}</li>
                    ))
                }

            </ul>
        </section>
    )
}

export default FilterCategory