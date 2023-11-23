/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-blue-100'>
      	<div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
			<Link to="/">
				<h1 className='font-bold'>Auth App</h1>
			</Link>
			<ul className='flex gap-4'>
				<Link to="/home">
					<li>Home</li>
				</Link>
				<Link to="/about">
					<li>About Us</li>
				</Link>
				<Link to="/signin">
					<li>Sign In</li>
				</Link>
			</ul>
		</div>
    </div>
  )
}
