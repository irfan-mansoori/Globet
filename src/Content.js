import Breadcrumb from "./Breadcrumb"
import RevolutionSection from "./RevolutionSection"
import News from "./News"
import Newsletter from "./Newsletter"
import GetInTouch from "./GetInTouch"

const Content = () => {
  return (
    <div className="pageContent">
        <Breadcrumb />
        <RevolutionSection />
        <News />
        <Newsletter />
        <GetInTouch />
    </div>
  )
}

export default Content