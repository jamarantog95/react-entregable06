import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import PurchaseCard from '../components/Purchases/PurchaseCard'
import cartSlice from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'

const Purchases = () => {

    const [purchasesList, setPurchasesList] = useState()

    useEffect(() => {
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/purchases'
        axios.get(URL, getConfig())
            .then(res => setPurchasesList(res.data.data.purchases))
            .catch(err => console.log(err))
    }, [])

    console.log(purchasesList)

    return (
        <div>
            <h2>My Purchases</h2>
            <div className="purchases-container">
                {
                    purchasesList?.map(purchase => (
                        <PurchaseCard
                            key={purchase.id}
                            purchase={purchase}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Purchases