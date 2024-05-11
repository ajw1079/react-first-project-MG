import mainBannerImg from "../assets/images/run puma.jpg"
import ImgAtm from "./atoms/ImgAtm";

const MainBannerCp = () => {
    return (
        <div className="mainbanner">
            <ImgAtm src={mainBannerImg} alt="배너이미지" />
            {/* <img src={mainBannerImg} alt="배너이미지" /> */}
        </div>
    )
}
export default MainBannerCp;