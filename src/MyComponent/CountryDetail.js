import React from 'react'

const CountryDetail = ({sanjay,onDelete}) => {

  return (
    
    <div>
      <div>{sanjay.sno}</div>
      <div>{sanjay.name}</div>
      <div>{sanjay.phncode}</div>
      <div><img src={sanjay.flagurl} width="50" height="50"/></div>
      <button className='btn btn-danger' onClick={()=>{onDelete(sanjay)}}>delete</button>

    </div>
  )
}

export default CountryDetail
