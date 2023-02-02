const Newsletter = () => {
  return (
    <section className="mainNewsletter py-6">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="newsletterContent">
                        <img src="./images/Vector Smart Object1.png" alt="Email" />
                        <h3 className="shortTitle mb-0 mt-4">Subscribe to our</h3>
                        <h4 className="longTitle">Email Newsletter</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                        <form className="subscribeForm mt-5">
                            <div className="row">
                                <div className="col-8 d-flex align-items-center">
                                    <div className="w-100" controlId="formBasicEmail">
                                        <input type="email" className="form-control" placeholder="Enter Your Email Address" required/>
                                    </div>
                                </div>
                                <div className="col-4 text-end">
                                    <button className="customBtn subscribeBtn" type="submit">
                                        Subscribe Now 
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter