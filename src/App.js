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
    name: "Kimbab",    
    image: "http://placeimg.com/200/100/any"
  },
  {
    name: "Dotori",    
    image: "http://placeimg.com/200/100/any"
  },
  {
    name: "Chukumi",    
    image: "http://placeimg.com/200/100/any"
  },
  {
    name: "Donkasu",    
    image: "http://placeimg.com/200/100/any"
  }
];

function App() {
  return (
    <div className="App">
     Hello!!~~~     
      {foodILike.map(dish => 
        <Food name={dish.name} 
              image={dish.image}/>
        )}
      
    </div>
  );
}

export default App;
