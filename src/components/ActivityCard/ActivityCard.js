import './style.css';
import { BsPencil, BsFillTrashFill} from 'react-icons/bs';
import axios from 'axios';
import { Link } from 'react-router-dom';


function ActivityCard({ name, description, date, hour, id }) {

    const remove = (e) => {
        axios.delete(`http://localhost:5000/tarefas/${id}`)
        .then(Response => window.location.reload(true))
        .catch(error => console.log(error))
    } ;


    return (
        <>
            <div className='card'>
                <h3>{name}</h3>
                <p><span>Descrição:</span> {description}</p>
                <p><span>Data:</span> {date}</p>
                <p><span>Hora:</span> {hour}</p>
                <div>
                <Link to={`/tarefas/${id}`}><button>Editar<BsPencil /></button></Link>
                <button onClick={remove}>Deletar<BsFillTrashFill /></button>
                </div>
            </div>
        </>
    )
}

export default ActivityCard;