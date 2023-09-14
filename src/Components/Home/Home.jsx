import React, { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Card/Cart';



const Home = () => {
    const[allActors, setAllActors] = useState([]);
    const [selectedActors, setSelectedActors ] = useState([]);
    const [remaining , setRemaing] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setAllActors(data));
    }, [])
   

    const handleSelectActor = (actor) => {
        const isExist = selectedActors.find(item => item.id === actor.id);
 
         let count = actor.salary;
        if(isExist)
        {
            alert("already book");
        }
        else
        {
           
           selectedActors.forEach((item)=> {
            count += item.salary;
           });
           

           const totalRemaing = 20000 - count;
           
           if(count >= 20000)
           {
                  return alert('boda tia ses');
           }
           else{
            setTotalCost(count);
               setRemaing(totalRemaing);
           const newSelectedActors = [...selectedActors, actor];
            setSelectedActors(newSelectedActors);
           }
        }
           
           
    }
    console.log(selectedActors);
    return (
        <div className='container w-9/12 mx-auto mt-10'>
            <div className='home-container'>

                <div className='card-container'>
                {
                    allActors.map((actor) =>(
                    <div key={actor.id} className="card text-center">
                    <div className="card-img ml-20">
                        <img className='photo' src={actor.image} alt="coming soon" />
                    </div>
                    <h2 className='text-2xl'>{actor.name}</h2>
                    <p><small className='text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, aliquid.</small></p>
                    <div className='info text-lg'>
                        <p>salary : {actor.salary}$ </p>
                        <p>{actor.role}</p>

                    </div>
                    <button onClick={() => handleSelectActor(actor)} className='border-2 p-1 rounded-lg bg-gray-700 mt-4'>Select</button>
                </div>
                    ) )
                }
                </div>

                <div className='cart'>
                    <Cart totalCost={totalCost} remaining = {remaining} selectedActors={selectedActors}></Cart>
                </div>
           
            </div>
        </div> 
    );
};

export default Home;