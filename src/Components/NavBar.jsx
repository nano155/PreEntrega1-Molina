import CartWidget from "./CartWidget"

const NavBar = () => {

    return (
        <header>
            <nav className="nav">
                <figure className="nav-logo">
                    <img src="./src/img/logo.png" alt="" />
                </figure>
                <ul className="nav-list">
                    <li><a href="#">Hombre</a></li>
                    <li><a href="#">Mujer</a></li>
                    <li><a href="#">Accesorios</a></li>
                    <li><a href="#">Conocenos</a></li>
                </ul>
                <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar