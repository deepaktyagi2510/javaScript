import logo from './logo.svg';
import './App.css';
import Data from './Data/Data';
import FunctionalComponent from './Components/FunctionalComponent/FunctionalComponent';
import ClassComponent from './Components/ClassComponent/ClassComponent';
import AnimalCard from './Components/AnimalCard/AnimalCard';
import Product from './Components/Product/Product';
 import ControlledForm from './Components/ControlledForm/Controlled';
 
function App() {
  return(
   <div>
    <FunctionalComponent/>
    <ClassComponent/>
    {/* <AnimalCard/> */}
 
    <h1>Animals List</h1>{
      Data.map(animal=> (
      <AnimalCard name={animal.name}
                  scientificName={animal.ScientificName}
                  size={animal.size}
                  diet={animal.diet}
    />
  ))
    }
    <Product></Product>
    <ControlledForm></ControlledForm>
    </div>
   
  );
}
export default App;