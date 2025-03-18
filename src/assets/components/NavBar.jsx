import {Link, useLocation} from "react-router-dom"

function NavBar(){
const location = useLocation();

    return (<nav className="flex justify-around py-5 md:px-50 text-xl md:text-3xl text-[#77819f] font-semibold bg-[#FFEAE9] mb-5">
        <Link 
        to="/" 
        className={`pb-2 ${location.pathname === "/" ? "border-b-4 border-[#77819f]" : ""}`}>
        Books List
      </Link>
      
      <Link 
        to="/favbook" 
        className={`pb-2 ${location.pathname === "/favbook" ? "border-b-4 border-[#77819f]" : ""}`}>
        Favourite Books
      </Link>
    </nav>)
}

export default NavBar;