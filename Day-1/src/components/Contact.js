import React from 'react'

const Contact = () => {
  return (
    <div >
      <h1 className='font-bold text-2xl p-2 m-2'>Contact Us Page</h1>
      <form>
        <input type='text' className='border border-black p-2 m-2 rounded-lg' placeholder='name'/>
        <input type='text' className='border border-black p-2 m-2  rounded-lg' placeholder='message'/>
        <button className='border border-black p-2 m-2  rounded-lg bg-slate-200'>Submit</button>
      </form>
    </div>
  )
}

export default Contact