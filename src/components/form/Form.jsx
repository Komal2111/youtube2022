import React from 'react'

export default function Form() {
  return (
    <div className='form'>
      <form action="">
        <fieldset className='fromContainer'>
            <div className='formItem'>

            <label className='formInfo' htmlFor='username'>Enter Name</label>
            <input type="text" placeholder="Enter Name" className='formInfo' 
            autoComplete='off'
            
            name="username"></input>
            </div>
            <div className='formItem'>
            <label className='formInfo' htmlFor='email'>Enter Email</label>
            <input type="email" placeholder="Enter email" 
            autoComplete='off'
            
            name="email"className='formInfo'></input>
            </div>
            <div className='formItem'>
            <label className='formInfo' htmlFor='Phone'>Phone Number</label>
            <input type="number" placeholder="Number" 
            
            autoComplete='off'
            name="Phone"className='formInfo'></input>
            </div>
            <div className='formItem'>
            <label className='formInfo' htmlFor='password'>Enter Password</label>
            <input type="password" placeholder="Your Password" 
          
            autoComplete='off'
            name="password" className='formInfo'></input>
            </div>
            {/* <div className='formItem'>
            <label className='formInfo'>Confirm Password</label>
            <input type="password" placeholder="Confirm Your Password"
             className='formInfo'></input>
            </div> */}
            <div className='formItem'>
            <button type ="submit" >Register</button>
            </div>

        </fieldset>
        </form>
    </div>
  )
}

