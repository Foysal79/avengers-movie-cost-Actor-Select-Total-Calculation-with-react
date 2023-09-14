
import './Cart.css'
const Cart = ({selectedActors, remaining, totalCost}) => {
    console.log(selectedActors);
    return (
        
        <div>
           <h1 className='text-2xl font-bold'>Total Actors: {selectedActors.length}</h1>
           <h5>remaining : {remaining}</h5>
           <h5>Total Cost : {totalCost}</h5>
           {
            selectedActors.map((actor) => (
                <li key={actor.id}>{actor.name}</li>
            ))
           } 
        </div>
    );
};

export default Cart;