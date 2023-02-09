import "./navbar.css"
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const { loginWithRedirect , isAuthenticated, logout } = useAuth0();

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Booking.com</span>
        <div className="navItems">
          
        { isAuthenticated ? (
          <button className="navButton" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>)
        :(  <button className="navButton" onClick={() => loginWithRedirect()}>Login</button>)
        //  ( <button className="navButton" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>)
        }
        </div>
      </div>
    </div>
  )
}

export default Navbar