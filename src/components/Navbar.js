import { FaSearch} from "react-icons/fa";
function Navbar() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-white">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold logo ms-3" href="#">EDYODA</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
                        <li className="nav-item dropdown mx-5">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            courses
                        </a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            programs
                        </a>
                        </li>
                    </ul>
                    <div class="d-flex" role="search">
                        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                        <button className="btn btn-outline-none" type="submit"><FaSearch/></button>
                        <button className="btn text " type="submit">Log in</button>
                        <button className="btn radius btn-primary mx-5" type="submit">Join Now</button>
                    </div>
                    </div>
                </div>
            </nav>
            <div>
    
            </div>
        </div>
      )
  }


export default Navbar;
