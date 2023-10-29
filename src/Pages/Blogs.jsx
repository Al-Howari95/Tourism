// import React, { useState } from 'react';
// import '../CSS/App.css'
// const blogData = [
//     { name: "jarash", author: "Author 1", image: "https://www.intrepidtravel.com/adventures/wp-content/uploads/2019/01/shutterstock_174061010.jpg" },
//     { name: "Ded sea", author: "Author 2", image: "https://alittleadrift.com/wp-content/uploads/2011/05/dead-sea-jordan.jpeg" },
//     { name: "aqaba", author: "Author 3", image: "https://api.time.com/wp-content/uploads/2023/03/Worlds-Greatest-Places-Aqaba-Jordan.jpg" },

//     // Add more blog data here
// ];

// const Cards = () => {
//     const itemsPerPage = 3; // Number of blogs per page
//     const [currentPage, setCurrentPage] = useState(1);

//     const indexOfLastBlog = currentPage * itemsPerPage; 
//     const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
//     const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

//     const renderBlogs = currentBlogs.map((blog, index) => (
//         <div className="blog-card" key={index}>
//             <img src={blog.image} alt={blog.name} />
//             <h3>{blog.name}</h3>
//             <p>{blog.author}</p>
//         </div>
//     ));

//     const paginate = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     return (
//         <div>
//             <div className="blog-list">{renderBlogs}</div>
//             <Pagination
//                 itemsPerPage={itemsPerPage}
//                 totalItems={blogData.length}
//                 currentPage={currentPage}
//                 paginate={paginate}
//             />
//         </div>
//     );
// };

// const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
//     const pageNumbers = [];

//     for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
//         pageNumbers.push(i);
//     }

//     return (
//         <nav>
//             <ul className="pagination">
//                 {pageNumbers.map((number) => (
//                     <li key={number} className={number === currentPage ? "active" : ""}>
//                         <a href="!#" onClick={() => paginate(number)}>
//                             {number}
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     );
// };

// export default Cards;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []); 

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {currentBlogs.map((blog) => (
        <div key={blog.id} className="bg-white rounded-md p-4 shadow-lg">
          <img src={`https://via.placeholder.com/150`} alt={blog.title} className="w-full h-32 object-cover mb-4 rounded-md" />
          <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
          <p className="text-blue-950 mb-4">{blog.body}</p>
          <Link to={`/blog/${blog.id}`} className="text-blue-950 hover:underline">
            More Details
          </Link>
        </div>
      ))}
      <div className="col-span-full flex justify-center mt-4">
        {Array.from({ length: Math.ceil(blogs.length / blogsPerPage) }, (_, index) => index + 1).map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`mx-2 p-2 bg-blue-950 text-white hover:bg-blue-800 focus:outline-none ${
              currentPage === number ? "bg-blue-950" : ""
            }`}
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blogs;