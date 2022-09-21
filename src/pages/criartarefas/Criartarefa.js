import Footer from '../../components/footer';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import './stylecriartarefa.css';

function Criartarefa() {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm()

    const preventDefault = (e) => {
        e.preventDefault()
    }

    const addActivity = (data) => {
        axios.post('http://localhost:5000/tarefas', data)
        .then(Response => navigate('/tarefas'))
        .catch(error => console.log(error))
        }

    return(
        <>
        <Header />
        <main>
            <form className='form' onSubmit={handleSubmit(addActivity, preventDefault)}>
                <legend><h1>Agende sua atividade</h1></legend>
                <input className='input' type="text" placeholder='Dê um nome a sua atividade' required name='name' {...register('name')}></input>
                <input className='input' type='text' placeholder='Descreva sua atividade' required name='description' {...register('description')}></input>
                <input className='input' type='date' placeholder='aaaa/mm/dd' required name='date' {...register('date')}></input>
                <input className='input' type='time' placeholder='' min='00:00' max='23:59' required name='hour' {...register('hour')}></input>
                <button className='button' type='submit'>Agendar atividade</button>
            </form>
        </main>
        <Footer className='footer'/>
        </>
    )
}

export default Criartarefa;