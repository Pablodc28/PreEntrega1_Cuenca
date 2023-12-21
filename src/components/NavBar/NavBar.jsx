import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
  return (
    <div>
           <nav className="navbar navbar-expand-lg  bg-info border-bottom border-body">
           <div className="container-fluid">
           
                      <a className="navbar-brand" href="#">Tienda Mariolo</a>
           
                      <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                      </button>

           <div className="collapse navbar-collapse " id="navbarNav">
                      <ul className="navbar-nav ms-auto ">
                                 <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Zapatillas</a>
                                 </li>
                                 <li className="nav-item">
                                            <a className="nav-link" href="#">Pantalones</a>
                                 </li>
                                 <li className="nav-item">
                                            <a className="nav-link" href="#">Gorros</a>
                                 </li>                      
                      </ul>
           </div>
                      <CartWidget />
           </div>
           </nav>
    </div>
  )
}

export default NavBar