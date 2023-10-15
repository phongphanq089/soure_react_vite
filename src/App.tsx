import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className='bg-black min-h-[100vh]'>
      <div className='max-w-2xl flex items-center justify-center  flex-col h-full  mx-auto text-center pt-20'>
        <div className='flex gap-8 justify-center items-center mb-6'>
          <a href='https://vitejs.dev' target='_blank'>
            <img src={viteLogo} className='logo w-20' alt='Vite logo' />
          </a>
          <span className='text-5xl'>+</span>
          <a href='https://react.dev' target='_blank'>
            <img src={reactLogo} className='logo react w-20' alt='React logo' />
          </a>
        </div>
        <h1 className='style-text__gradient'>Vite + React The future of fast, light, leading technology</h1>
        <div className='card'>
          <p>Get ready for a development environment that can finally catch up with you.</p>
        </div>
        <div className='flex flex-wrap justify-center mt-10'>
          <a href='https://vitejs.dev' target='_blank'>
            <button className='bg-deep-purple-600 px-8 py-3 m-2 text-lg font-semibold rounded  dark:text-gray-900'>
              Get started
            </button>
          </a>
          <a href='https://vitejs.dev' target='_blank'>
            <button className='px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700'>
              Learn more
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
