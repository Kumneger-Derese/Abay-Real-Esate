import Benefits from './components/Benefits'
import CTAForm from './components/CTAForm'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Listings from './components/Listings'
import Locations from './components/Locations'
import Navbar from './components/Navbar'
import Testimonial from './components/Testimonial'
import { useTheme } from './context/ThemeContext'

const App = () => {
  const { isDark } = useTheme()

  return (
    <div
      className={`${isDark && 'dark'} transition-colors duration-500 bg-white
         dark:bg-slate-900 dark:text-white text-slate-800 min-h-screen`}
    >
      <Navbar />
      <Hero />
      <div className='px-8'>
        <Listings />{' '}
      </div>
      <Locations />
      <div className='p-8'>
        <Benefits />
        <Testimonial />
      </div>
      <CTAForm />
      <Footer />
    </div>
  )
}
export default App
