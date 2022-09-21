import Footer from '../../components/footer';
import Header from '../../components/header/Header';
import axios from 'axios';
import ActivityCard from '../../components/ActivityCard/ActivityCard'
import './style.css';
import { useEffect, useState } from 'react';

function Tarefas() {

    const [activity, setActivity] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/tarefas')
        .then(Response => setActivity(Response.data))
        .catch(error => console.log(error))
    }, [])

    return(
        <>
        <Header />
        <main>
            <div className='content'>
                    {activity.map((activity) => 
                    <ActivityCard
                    name={activity.name} 
                    description={activity.description} 
                    date={activity.date} 
                    hour={activity.hour} 
                    id={activity.id}
                    />)}

                    {
                        activity.length === 0 &&
                        <h1 className='h1'>Não há atividades para serem exibidas</h1>
                    }
            </div>
        </main>
        <Footer />
        </>
    )
}

export default Tarefas;