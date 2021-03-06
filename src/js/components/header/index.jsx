import React from 'react';

import Login from './Login';
import Navbar from './Navbar';
import dataArray from './DataGiver';


const Nav = () => {
  //console.log(dataArray)
  let loginToRender = dataArray[0].loginData.map((item, index) => {
    return (
      ///////// the array is being passed to the component for better results 
      <Login key={index} data={item} />
    )
  })
  return (
    <div className='header-wrapper'>
      <img className="header-logo" src="./images/logo.png" />
       <div className='my-nav'>
           {loginToRender}
          <Navbar dataArray={dataArray} />
          <div id="div4">
          </div>
      </div>
    </div>

  )
}

export default Nav