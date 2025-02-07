import { Avatar, Badge } from "@mui/material"
import "./NavBar.css"
import { AddShoppingCart, AdminPanelSettings, Close, Home, Logout, MenuOutlined } from "@mui/icons-material"
import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { useAuthStore } from "../../context/useAuthStore"
import { useCartStore } from "../../context/useCartStore"
import Logo from "../../assets/o.png"

const NavBar = () => {
    const {cart} = useCartStore()
    const [ toggle, setToggle ] = useState(false)
    const { isAuthenticated, logout } = useAuthStore()
    const navigate = useNavigate()
    const handleLogout = () => {
        logout()
        navigate("/")
    }
  return (
    <header className='header'>
        <nav className='nav container flexCenterSpaceBtwn'>
            <Link to="/" className='nav_logo'>
                <Avatar src={Logo}>O</Avatar>
            </Link>

            <div className= "nav_menu">
                <ul className="nav_list">
                    <li className="nav_item">
                        <Link className="nav_item_link" to="/">
                        <div className="nav_icon">
                                <Home />
                            </div>
                             Home
                        </Link>
                    </li>

                    <li className="nav_item">
                            {isAuthenticated ? (
                                <Link className="nav_item_link" to="#logout"
                                    onClick={handleLogout}
                                >
                                    <div className="nav_icon">
                                        <Logout />
                                    </div>
                                    Logout
                                </Link>
                            ) : (
                                <Link className="nav_item_link" to="/admin/dashboard">
                                    <div className="nav_icon">
                                        <AdminPanelSettings />
                                    </div>
                                    Admin
                                </Link>
                            )}
                        </li>

                        <li className="nav_item" onClick={() => navigate("/cart")}>
                            <Badge badgeContent={cart.length == 0 ? "0" : cart.length} className="nav_cart_badge">
                                <AddShoppingCart />
                            </Badge>
                            
                        </li>

                    {/* <li className="nav_item">
                        <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? 'nav_link active-link flexColCenter' : 'nav_link flexColCenter'}>
                        <div className="nav_icon">
                            <Person /> 
                            </div>
                            About
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? 'nav_link active-link flexColCenter' : 'nav_link flexColCenter'}>
                        <div className="nav_icon">
                            <Work className='nav_icon' /> 
                            </div>
                            Skills
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? 'nav_link active-link flexColCenter' : 'nav_link flexColCenter'}>
                        <div className="nav_icon">
                            <DesignServices className='nav_icon' /> 
                            </div>
                            Services
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#projects" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? 'nav_link active-link flexColCenter' : 'nav_link flexColCenter'}>
                        <div className="nav_icon">
                            <AccountTree className='nav_icon' /> 
                            </div>
                            Portfolio
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? 'nav_link active-link flexColCenter' : 'nav_link flexColCenter'}>
                        <div className="nav_icon">
                            <ContactSupport className='nav_icon' /> 
                            </div>
                            Contact
                        </a>
                    </li> */}
                </ul>

                <div className="nav_close" onClick={() => {setToggle(false)}}>
                    <Close />
                </div>
                
            </div>

            <div className="nav_toggle" onClick={() => {setToggle(!toggle)}}>
                <MenuOutlined />
            </div>
        </nav>
    </header>
  )
}

export default NavBar