import imageLogo from "../components/lion.jpg"
export default function Navbar(){
    return(
        <nav className="nav--nav-bar">
            <img src={imageLogo} className="nav-img"/>
        </nav>
    )
}