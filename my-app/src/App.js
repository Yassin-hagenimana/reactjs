import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./airbnb project/Card";
import data from "./airbnb project/data";


function App() {


  const cards=data.map(item=>{
    return(
      <Card
      key={item.id}
      {...item}
     
     />
    )
  })
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
    <section className="cards--list">
      {cards}
    </section>

    </div>
  );
}

export default App;
