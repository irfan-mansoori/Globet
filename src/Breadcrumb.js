const Breadcrumb = () => {
  return (
    <section className="mainBanner py-6">
        <div className="container">
            <div className="row">
                <div className="col-6 d-flex align-items-center">
                    <div className="bannerContent">
                        <span>GET ULTIMATE PROFIT</span>
                        <h1>Globet, the path to Financial Freedom</h1>
                        <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                            sed do eiusmod tempo r incididunt ut. Labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                            ut aliquip ex ea commodo consequat.</p>
                        <a href="javascript:" className="customBtn mt-4">Learn More</a>
                    </div>
                </div>
                <div className="col-6">
                    <div className="bannerImgBox">
                        <img src="./images/banner.png" alt="Banner" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Breadcrumb