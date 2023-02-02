const News = () => {
  return (
    <section className="mainNews py-6">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="shortTitle text-center">Our Recent</h3>
                    <h4 className="longTitle text-center">News & Information</h4>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-4">
                    <div className="bannerImgBox">
                        <img src="./images/First-Clip.jpg" alt="Banner" />
                    </div>
                    <div className="newsContent mt-4">
                        <h3>Neque porro quisquam est qui</h3>
                        <span>Posted on November 17, 2021</span>
                        <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                             tempo r incididunt ut. Labore et dolore magna aliqua. Ut enim ad minim 
                             veniam,</p>
                        <a href="javascript:" className="customBtn">Learn More</a>
                    </div>
                </div>
                <div className="col-4">
                    <div className="bannerImgBox">
                        <img src="./images/Second-Clip.jpg" alt="Banner" />
                    </div>
                    <div className="newsContent mt-4">
                        <h3>Neque porro quisquam est qui</h3>
                        <span>Posted on November 17, 2021</span>
                        <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                             tempo r incididunt ut. Labore et dolore magna aliqua. Ut enim ad minim 
                             veniam,</p>
                        <a href="javascript:" className="customBtn">Learn More</a>
                    </div>
                </div>
                <div className="col-4">
                    <div className="bannerImgBox">
                        <img src="./images/Clip.jpg" alt="Banner" />
                    </div>
                    <div className="newsContent mt-4">
                        <h3>Neque porro quisquam est qui</h3>
                        <span>Posted on November 17, 2021</span>
                        <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                             tempo r incididunt ut. Labore et dolore magna aliqua. Ut enim ad minim 
                             veniam,</p>
                        <a href="javascript:" className="customBtn">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default News