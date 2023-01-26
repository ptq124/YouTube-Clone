import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {BsYoutube, BsSearch} from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom';
export default function Header() {
  const {keyword} = useParams()
  const [text, setText] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/videos/${text}`)
  }
  useEffect(()=>setText(keyword || ''), [keyword])
  return (
    <div className='flex p-4 border-b border-zinc-500 text-2xl'>
      <Link to='/' className='flex items-center w-3/12'>
        <BsYoutube className='text-4xl text-brand mr-2'/> 
        <span className='text-3xl'>YouTube</span>
      </Link>
      <form 
        className='flex items-center w-9/12 justify-start'
        onSubmit={handleSubmit}
      >
        <input 
          className='w-1/2 p-1' 
          type='text' 
          placeholder='Search...' 
          value={text} 
          onChange={(e)=>setText(e.target.value)}
        />
        <button className='bg-zinc-600 p-2'><BsSearch /></button>
      </form>
    </div>
  );
}

