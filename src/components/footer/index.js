import './style.css';
import { DiGithubFull } from "react-icons/di";
import { BsLinkedin } from "react-icons/bs";

function Footer() {
    return (
        <footer>
            <ul>
                <li><a href='https://github.com/Renanincio' target='_blank'><DiGithubFull className='icon'></DiGithubFull></a></li>
                <li><a href='https://www.linkedin.com/in/renan-inacio-968401240/' target='_blank'><BsLinkedin className='icon'></BsLinkedin></a></li>
            </ul>
            <p>projeto criado pelo &copy; desenvolvedor Renan Inacio</p>
        </footer>
    )
}

export default Footer;