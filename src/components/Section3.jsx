import React from 'react'

function Section3() {
  return (
    <div className="flex w-full px-4 sm:px-6 lg:px-8">
  <div className="bg-[#fdf6e4] p-6 sm:p-8 lg:p-12 rounded-lg shadow-lg w-full flex flex-col lg:flex-row my-10">
    <div className="flex flex-col lg:flex-row w-full">
      
      {/* Left Section */}
      <div className="lg:p-16 p-6 lg:border-r border-gray-300 w-full lg:w-2/3 mb-6 lg:mb-0">
        <h4 className="text-sm text-gray-600 mb-2">TESTIMONIALS</h4>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 lg:w-56">
          What people say about our blog
        </h2>
        <p className="text-gray-600 lg:w-72">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
      </div>

      {/* Right Section */}
      <div className="lg:p-16 p-6 w-full">
        <p className="text-base sm:text-lg lg:text-xl mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        
        <div className="flex flex-col sm:flex-row lg:justify-between lg:items-center mt-4 space-y-4 sm:space-y-0">
          
          {/* Profile Info */}
          <div className="flex items-center">
            <img src="https://placehold.co/40x40" alt="Profile picture of Jonathan Vallem" className="rounded-full w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mr-4" />
            <div>
              <h4 className="font-bold text-sm sm:text-base lg:text-lg">Jonathan Vallem</h4>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base">New York, USA</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center sm:justify-start mt-4 lg:mt-0 space-x-2">
            <button className="bg-gray-200 p-2 sm:p-3 lg:p-4 rounded-full">
              <i className="fas fa-arrow-left"></i>
            </button>
            <button className="bg-black text-white p-2 sm:p-3 lg:p-4 rounded-full">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</div>

  )
}

export default Section3