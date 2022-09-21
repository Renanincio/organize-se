import axios from 'axios';
import Header from '../../components/header/Header';
import Footer from '../../components/footer';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './style.css';

function Editar() {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5000/tarefas/${id}`)
            .then(Response => reset(Response.data))
            .catch(error => console.log(error))
    }, [id])

    const preventDefault = (e) => e.preventDefault;
    const editActivity = (data) => {
        axios.put(`http://localhost:5000/tarefas/${id}`, data)
            .then(Response => navigate('/tarefas'))
            .catch(error => console.log(error))
    };

    return (
        <>
            <Header />
            <main>
                <form className='form' onSubmit={handleSubmit(editActivity, preventDefault)}>
                    <legend><h1>Edite sua atividade</h1></legend>
                    <input className='input' type="text" placeholder='Dê um nome a sua atividade' required name='name' {...register('name')}></input>
                    <input className='input' type='text' placeholder='Descreva sua atividade' required name='description' {...register('description')}></input>
                    <input className='input' type='date' placeholder='aaaa/mm/dd' required name='date' {...register('date')}></input>
                    <input className='input' type='time' placeholder='' min='00:00' max='23:59' required name='hour' {...register('hour')}></input>
                    <button className='button' type='submit'>Editar atividade</button>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default Editar;