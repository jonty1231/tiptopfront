import { Outlet } from "react-router-dom"
import { Header } from "../components/header"
import Footer from "../components/Footer"
export const Home=()=>{
    return( <div className="bg-[#e0d5b6] "> 
<Header />
<div className="h-[100%] min-h-[100vh]"><Outlet /></div>
<Footer />
</div>
    )
}

