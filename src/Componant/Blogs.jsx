import React, { useState } from 'react';
import axios from 'axios';

const Blogs = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    author: '',
    url: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the data to the server using Axios or another method
      const response = await axios.post('http://127.0.0.1:3000/addBlog', formData);

      // Handle the response as needed
      alert('Server Response:', response.data);

      // You can also redirect or show a success message to the user
    } catch (error) {
      alert('An error occurred while submitting the form:', error);
    }
  };

  return (
    <div>
      {/* Blogs component code */}
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Title
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Title Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="description"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="The Description"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="author"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Author
              </label>
              <input
                type="text"
                name="author"
                id="author"
                placeholder="Author Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={formData.author}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="url"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Image
              </label>
              <input
                type="url"
                name="url"
                id="url"
                placeholder="https://example.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={formData.url}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
