import {createBrowserRouter} from "react-router-dom"
import Wallet from "../pages/Wallet"
import Home from "../pages/Home"
import Navbar from "../components/Navbar"

export const routes = createBrowserRouter([
    {path:"/",element:<Wallet/>},
    {path:"/home",element:(
        <div className=" w-screen h-full flex flex-col justify-center items-center ">
           <Navbar/>
           <Home/>
        </div>
    
)}
])