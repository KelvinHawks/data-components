import React from 'react';
//import ReactDOM  from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Contacts from './components/Contacts';
import data from "./components/Data"

function App(){
  // const date = new Date()
  // const hours = date.getHours()
  // let timeOfDay

  // if(hours < 12){
  //   timeOfDay = "morning"
  // }else if(hours >= 12 && hours < 17){
  //   timeOfDay = "afternoon"
  // }else{
  //   timeOfDay = "night"
  // }
 
//   const nums = ["bulbasaur","charmander","squirtle"]
//  const sqrt = nums.map(capsLock); 
// console.log(sqrt);
//   function capsLock(num){
//     // for(var i = 0; i<=num.length; i++)
//       return `<p>${num}</p>`
//   }
const items = data.map(item => {
  return(
    <Contacts
      key={item.id}
      {...item}
  />
  )
})
  return (
    <div>
       <Navbar/>
      <div className='container'>
      {items}
      </div>
    </div>
    
    
  );

}

export default App;

{/* <div className="image-header">
      <img src={HeaderImg} alt="lion"/>
      <div>
          <h2>Kelvin Kimani</h2>
          <h5>front-end developer</h5>
          <p>Freelancer</p>
      </div>
</div> */}