const Header = () => {
  return (
    <header className="py-3">
        <div className="container">
            <div className="navbar navbar-expand-sm justify-content-between">
                <div className="websiteLogo">
                    <a className="navbar-brand" href="javascript:void(0)">
                        <img src="./images/Globet-R1-01-white.png" alt="Website Logo" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="navigationMenuBar">
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="javascript:void(0)">Why Globet</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)">How it works</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)">Faq's</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="ctaBtn">
                    <a href="javascript:" className="customBtn">Login</a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header