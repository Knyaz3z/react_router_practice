import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import Categories from "./pages/Categories/Categories";
import NotFound from "./pages/NotFound/NotFound";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Header from "./components/Header/Header";
import Layout from "./components/Layout";

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Home/>
//     },
//     {
//         path: 'about',
//         element: <About/>
//     },
//     {
//         path: 'cart',
//         element: <Cart/>
//     },
//     {
//         path: 'categories',
//         element: <Categories/>
//     },
//     {
//         path: '*',
//         element: <NotFound/>
//     },
//     {
//         path: 'productdetails',
//         element: <ProductDetails/>
//     },
// ])

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path:'',
                element: <Home/>
            },
            {
                path:'about',
                element: <About/>
            },
            {
                path:'cart',
                element: <Cart/>
            },
            {
                path:'categories',
                element: <Categories/>
            },
            {
                path:'product',
                element: <ProductDetails/>
            },
            {
                path:'*',
                element: <NotFound/>
            },
            ]
    }
])

function App() {

    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    )

}

export default App;
