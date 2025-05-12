import React from 'react'

function LandingPage() {
  return (
    <div className="bg-gray-100 text-black font-sans min-h-screen px-4 py-6">
    {/* Header */}
    <header className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white shadow-md gap-4">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <img src="kfhLOGO.png" alt="kcal for health Logo" className="h-10" />
      </div>
      <div> 
        <nav className="flex flex-col sm:flex-row gap-2 sm:gap-21 text-center ">
          <a href="#" className="text-sm font-semibold">Home</a>
          <a href="#" className="text-sm font-semibold">Blogs</a>
          <a href="#" className="text-sm font-semibold">Body Matrix</a>
          <a href="#" className="text-sm font-semibold">Mission</a>
        </nav>
      </div>
      <div className="flex items-center gap-2 font-thin">
        Need to add
      </div>
    </header>
    </div>
  )
}

export default LandingPage;