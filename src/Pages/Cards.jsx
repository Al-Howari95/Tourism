import React, { useState } from 'react';
import '../CSS/App.css'
const blogData = [
    { name: "jarash", author: "Author 1", image: "https://www.intrepidtravel.com/adventures/wp-content/uploads/2019/01/shutterstock_174061010.jpg" },
    { name: "Ded sea", author: "Author 2", image: "https://alittleadrift.com/wp-content/uploads/2011/05/dead-sea-jordan.jpeg" },
    { name: "aqaba", author: "Author 3", image: "https://api.time.com/wp-content/uploads/2023/03/Worlds-Greatest-Places-Aqaba-Jordan.jpg" },

    // Add more blog data here
];

const Blogs = () => {
    const itemsPerPage = 3; // Number of blogs per page
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastBlog = currentPage * itemsPerPage; 
    const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
    const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

    const renderBlogs = currentBlogs.map((blog, index) => (
        <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.name} />
            <h3>{blog.name}</h3>
            <p>{blog.author}</p>
        </div>
    ));

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <div className="blog-list">{renderBlogs}</div>
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={blogData.length}
                currentPage={currentPage}
                paginate={paginate}
            />
        </div>
    );
};

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li key={number} className={number === currentPage ? "active" : ""}>
                        <a href="!#" onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Blogs;
