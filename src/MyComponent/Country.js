import React from 'react'
import CountryDetail from './CountryDetail'

const Country = (props) => {

  return (
    <div className='container'>
      <h3 className='text-center my-3'>Country Detials</h3>
  {props.rahul.length===0?"No Countries to display": 
      props.rahul.map((country)=>{
        return  <CountryDetail sanjay={country} key={country.sno} onDelete={props.onDelete} />
})
}
     
    </div>
  )
}

export default Country
