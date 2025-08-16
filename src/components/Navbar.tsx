"use client"

const Navbar = () => {
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold text-white">Shubham Mohapatra</h1>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => smoothScrollTo('about')} 
            className="text-white hover:text-pink-400 transition-colors duration-300"
          >
            About
          </button>
          <button 
            onClick={() => smoothScrollTo('projects')} 
            className="text-white hover:text-pink-400 transition-colors duration-300"
          >
            Projects
          </button>
          <button 
            onClick={() => smoothScrollTo('contact')} 
            className="text-white hover:text-pink-400 transition-colors duration-300"
          >
            Contact
          </button>
          <button 
            onClick={() => smoothScrollTo('skills')} 
            className="text-white hover:text-pink-400 transition-colors duration-300"
          >
            Skills
          </button>
        </div>

        <div className="md:hidden">
          <button className="text-white">Menu</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar