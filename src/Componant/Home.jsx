import React from 'react'
import {Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div>
    {/* component */}
    <div className="h-screen bg-gray-50 flex items-center">
      <section
        className="bg-cover bg-center py-32 w-full"
        style={{ backgroundImage: 'url("https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2020/11/shutterstock_1490981186-scaled-1.jpg?fit=1920%2C1320&ssl=1")' }}
      >
        <div className="container mx-auto text-left text-white">
          <div className="flex items-center">
            <div className="w-1/2">
              <h1 className="text-5xl font-medium mb-6">Welcome to Tourism in Jordan </h1>
              <p className="text-xl mb-12">
              Jordan, a land steeped in history and natural beauty, has emerged as a captivating tourist destination in the Middle East.
              </p>
              <Link
                to="/blogs" id='demo'
                className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600"
              >
                Add Blogs
              </Link>
            </div>
            <div className="w-1/2 pl-16">
              {/* <img
                src="https://source.unsplash.com/random?ux"
                className="h-64 w-full object-cover rounded-xl"
                alt="Layout Image"
              /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
 
  </div>
  )
} 

export default Hero