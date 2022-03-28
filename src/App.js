import Header from './MyComponent/Header'
import Footer from './MyComponent/Footer'
import Country from './MyComponent/Country'
import img1 from './image/India.jpg'
import img2 from './image/Nepal.png'
import img3 from './image/Bhutan.png'
import img4 from './image/Shrilanka.png'


import React,{useState} from 'react' 
import AddCountry from './MyComponent/AddCountry'

const App = () => {

  const onDelete=(sanjay)=>{
    console.log( "i am ondelete of country",sanjay)
  
  setCountry(country.filter((e)=>{
       return e!==sanjay;
  }));
}

const addCountry=(name,code,flag)=>{
  console.log('i am adding this to country',name,code,flag)
  let sno=country[country.length-1].sno+1;
  const myCountry={
    sno:sno,
    name:name,
    code:code,
    flag:flag,
  }
  console.log(myCountry)
  setCountry([...country,myCountry])
}
  const [country,setCountry]=useState([
    {
      sno:1,
      name:"India",
      code:91,
      flag:img1

    },
    {
      sno:2,
      name:"Nepal",
      code:997,
      flag:img2
    },
    {
      sno:3,
      name:"Bhutan",
      code:975,
      flag:img3
    },
  ])
  return (
    <>
     <Header title="MyCountryList" searchBar={false}/>
     <AddCountry addCountry={addCountry}/>
     <Country rahul={country} onDelete={onDelete}/>
     <Footer/>
     
    </>
  )
}

export default App
