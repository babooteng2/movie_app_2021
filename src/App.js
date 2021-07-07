
import PropTypes from "prop-types"

const foodILike = [
  {
    id:0,
    name: "Kimbab",    
    image: "http://placeimg.com/200/100/any/1",
    rating: 4.2
  },
  {
    id:1,
    name: "Dotori",    
    image: "http://placeimg.com/200/100/any/2",
    rating: 4.1
  },
  {
    id:2,
    name: "Chukumi",    
    image: "http://placeimg.com/200/100/any/3",
    rating: 4.3
  },
  {
    id:3,
    name: "Donkasu",    
    image: "http://placeimg.com/200/100/any/4",
    rating: 5.0
  }
];

function Food({name, image, rating}) {  
  return (
    <div>
      <h1>we love {name}</h1>
      <a href={image}><img src={image} alt={name}/></a>
      <h4>rating: {rating}/5.0</h4>
    </div>
  ); 
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>     
      {foodILike.map(dish => (
        <Food key  = {dish.id}
              name = {dish.name} 
              image= {dish.image}
              rating={dish.rating}/>
      ))}      
    </div>
  );
}

export default App;
