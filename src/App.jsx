
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  

  return (
    <>
      
        <div class="fixed inset-0 radial-gradient-animation -z-10"></div>
        <div class="fixed inset-0 bg-[#171719] -z-20"></div>
        <div className='w-[100vw] h-[100vh] backdrop-blur-2xl'>
          <Header/>
          <main>
            <Hero/>
          </main>
        </div>
          
      
      
    </>
  )
}

export default App
