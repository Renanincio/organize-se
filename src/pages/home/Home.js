import './style.css';
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';
import imagem from '../../imgs/kisspng-time-management-time-attendance-clocks-organizat-5aded2d4b59704.2282081615245524047438.png';

function Home() {
    return (
        <>
            <Header />
            <main>
                <div className="content-left">
                    <div className="blob1">
                        <h1>Organize-se</h1>
                        <p>Organize-se é um site com o objetivo de funcionar como uma "to-do list" e fazer você organizar suas ativadades da semana e maximizar seu tempo!</p>
                    </div>

                    <div className="blob2">
                        <Link to="/criartarefas"><button>Crie uma atividade</button></Link>
                    </div>
                </div>

                <div className="content-right">
                    <div>
                        <img src={imagem} alt="imagem ilustrativa de gerenciamento de tempo"></img>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    )
};

export default Home;