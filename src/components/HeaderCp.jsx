//HeaderCp.jsx
import HeaderLogo from "../assets/images/logo.svg";
import ImgAtm from "./atoms/ImgAtm";
import LinkListAtm from "./atoms/LinkListAtm";
import ButtonAtm from "./atoms/ButtonAtm";

const HeaderCp = ({cpName}) => {
    console.log(cpName); //부모인 App.jsx로 부터 전달받은 val 

    const menus = [
        {name: "About", link: "/about"},
        {name: "Portfolio", link: "/portfolio"},
        {name: "Contact", link: "/contact"},
    ];

    const clickLogIn = () => {
        console.log("로그인 버튼 클릭~!");
    }
    const clickRegister = () => {
        console.log("회원가입 버튼 클릭~!");
    }
    return (
        <header name={cpName}>
            <div className='wrap'>
                <div className='logo'>
                    <a href="/">
                        <ImgAtm src={HeaderLogo} alt="로고 이미지" />
                    </a>
                </div>
                <nav>
                    <ul>
                        {menus.map((v, i) => (
                            <LinkListAtm key={i} val={v} />
                            // <li><a href={v.link}>{v.name}</a></li>    
                        ))}
                    </ul>
                    <div>
                        <ButtonAtm btnName="로그인" onClickEvt={clickLogIn} />
                        <ButtonAtm btnName="회원가입" onClickEvt={clickRegister} />
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default HeaderCp; 
