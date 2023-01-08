
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'
import ProtectedRoutes from './components/shared/ProtectedRoutes'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductInfo from './pages/ProductInfo'
import Purchases from './pages/Purchases'
import { getAllProducts } from './store/slices/products.slice'

function App() {

    // Usamos el Hook useDispatch para despachar acciones y thunk
    const dispatch = useDispatch()

    //Llamamos al estado global - useSelector para visualizar informacion en consola
    // const products = useSelector(state => state.products)
    // console.log(products)

    useEffect(() => {
        dispatch(getAllProducts())
        // dispatch(getUserCart())
    }, [])


    // Creacion de Usuario
    // useEffect(() => {

    //     const URL = 'https://e-commerce-api.academlo.tech/api/v1/users'
    //     const data = {
    //         firstName: "Juan",
    //         lastName: "Amaranto",
    //         email: "jamarantog95u@gmail.com",
    //         password: "jcarlos95",
    //         phone: "9483766870",
    //         role: "admin"
    //     }

    //     axios.post(URL, data)
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))

    // }, [])


    return (
        <div className="App">

            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/product/:id' element={<ProductInfo />} />

                {/* Rutas Protegidas */}
                <Route element={<ProtectedRoutes />}>
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/purchases' element={<Purchases />} />
                </Route>

            </Routes>
            <Footer />
        </div>
    )
}

export default App
