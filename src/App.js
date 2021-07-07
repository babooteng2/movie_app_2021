function Food({name, image}) {  
  return (
    <div>
      <h1>we love {name}</h1>
      <a href={image}><img src={image} alt={name}/></a>      
    </div>
  ); 
}

const foodILike = [
  {
    id:0,
    name: "Kimbab",    
    image: "http://placeimg.com/200/100/any"
  },
  {
    id:1,
    name: "Dotori",    
    image: "http://placeimg.com/200/100/any"
  },
  {
    id:2,
    name: "Chukumi",    
    image: "http://placeimg.com/200/100/any"
  },
  {
    id:3,
    name: "Donkasu",    
    image: "http://placeimg.com/200/100/any"
  }
];

function App() {
  return (
    <div>     
      {foodILike.map(dish => (
        <Food key  = {dish.id}
              name = {dish.name} 
              image= {dish.image}/>
      ))}      
    </div>
  );
}

export default App;
