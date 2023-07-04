import React from 'react'
import Income from './Income'
import Spend from './Spend'

function Add() {
  return (
    <div className='flex flex-col h-[550px] justify-center lg:flex-row'>
        <Spend />
        <Income />
    </div>
  )
}

export default Add