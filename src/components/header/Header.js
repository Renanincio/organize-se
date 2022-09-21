import './style.css';
import { AiOutlineAppstore } from "react-icons/ai";
import { AiOutlineUpCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from '../../imgs/kisspng-time-management-techniques-to-achieve-your-goals-o-time-management-5b5ccc46293cc3.6468473415328082621689.png';

function Header() {

    // const btnMobile = window.document.getElementById('buttonMobile');

    function activeMenu() {
        const navMobile = window.document.getElementById('nav-mobile');
        navMobile.classList.toggle('active')
    }


    return (
        <header>
            <div className="logo">
                <Link to='/'><img src={logo}></img></Link>
            </div>

            <nav id='nav-mobile'>
            <ul>
                <li><Link className='link link-nav' to='/'>Início<AiOutlineUpCircle className='icon'></AiOutlineUpCircle></Link></li>
                <li><Link className='link link-nav' to='/criartarefas'>Criar tarefas<AiOutlineUpCircle className='icon'></AiOutlineUpCircle></Link></li>
                <li><Link className='link link-nav' to='/tarefas'>Tarefas<AiOutlineUpCircle className='icon'></AiOutlineUpCircle></Link></li>
                <li><Link className='link link-nav' to='/contato'>Contato<AiOutlineUpCircle className='icon'></AiOutlineUpCircle></Link></li>
            </ul>
            </nav>

            <div id='button'>
                <button onClick={activeMenu}><AiOutlineAppstore className='icon-menu'></AiOutlineAppstore></button>
            </div>

            <ul>
                <li><Link className='link' to='/'>Início<AiOutlineUpCircle className='icon'></AiOutlineUpCircle></Link></li>
                <li><Link className='link' to='/criartarefas'>Criar tarefas<AiOutlineUpCircle className='icon'></AiOutlineUpCircle></Link></li>
                <li><Link className='link' to='/tarefas'>Tarefas<AiOutlineUpCircle className='icon'></AiOutlineUpCircle></Link></li>
                <li><Link className='link' to='/contato'>Contato<AiOutlineUpCircle className='icon'></AiOutlineUpCircle></Link></li>
            </ul>
        </header>
    )
}

export default Header;