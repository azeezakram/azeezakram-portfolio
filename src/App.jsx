
import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MobileMenu from './components/MobileMenu'

function App() {
  
  // useEffect(() => {
  //   let isScrolling = false;
  //   let currentSection = 0;
  //   const sections = document.querySelectorAll('section');
    
  //   const handleWheel = (e) => {
  //     if (isScrolling) return;
  //     isScrolling = true;
      
  //     // Determine scroll direction
  //     const direction = e.deltaY > 0 ? 1 : -1;
      
  //     // Calculate new section index
  //     const newSection = Math.min(
  //       Math.max(0, currentSection + direction),
  //       sections.length - 1
  //     );
      
  //     if (newSection !== currentSection) {
  //       currentSection = newSection;
  //       sections[currentSection].scrollIntoView({
  //         behavior: 'smooth'
  //       });
  //     }
      
  //     // Reset after scroll completes
  //     setTimeout(() => {
  //       isScrolling = false;
  //     }, 1000);
  //   };

  //   window.addEventListener('wheel', handleWheel);
  //   return () => window.removeEventListener('wheel', handleWheel);
  // }, []);

  return (
    <>  
        <div className="fixed inset-0 radial-gradient-animation -z-10"></div>
        <div className="fixed inset-0 bg-[#171719] -z-20"></div>
        <div className='relative'>
          <Navbar/>
          <Hero/>
          <main className="relative z-1 ">
            <About/>
          </main>
        </div>
    </>
  )
}

export default App
