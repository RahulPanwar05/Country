import React from 'react'
import './CountryDetail.css'

const CountryDetail = ({sanjay,onDelete}) => {

  return (
    <div className='container'>
    <div className='country-detail'>
      <div className='sno'>{sanjay.sno}</div>
      <div className='name'>{sanjay.name}</div>
      <div className='code'>Phone code +{sanjay.code}</div>
      <div className='flagurl'><img src={sanjay.flag} width="150px" height="120px"/></div>
      <button className='btn btn-danger' onClick={()=>{onDelete(sanjay)}}>Delete</button>
     </div>
    </div>
  )
}

export default CountryDetail
