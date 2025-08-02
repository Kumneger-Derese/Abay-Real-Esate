import { HiSearch } from 'react-icons/hi'
import { heroImages } from '../assets/heroImages'

const Hero = () => (
  <div
    className={`bg-green-100 dark:bg-green-900 px-8 py-12 flex flex-col md:flex-row gap-4`}
  >
    <section className='flex flex-col gap-4 flex-1/2 mb-12'>
      <h1 className={'font-black text-6xl my-4'}>
        Live Where <span>Luxury</span> <br />
        Meets Lifestyle.
      </h1>

      <p className='font-medium'>
        Discover Hand-Picked High-End Properties Tailored To your Taste,
        Location And Lifestyle.
      </p>

      <div className='p-3 rounded-xl bg-white dark:bg-slate-800 flex items-center gap-x-2'>
        <select className='p-2 rounded-md border dark:bg-slate-800 dark:text-white border-slate-500 w-3/12'>
          <option value=''>Type</option>
          <option value='house'>House</option>
          <option value='apartment'>Apartment</option>
          <option value='condo'>Condo</option>
          <option value='land'>Land</option>
          <option value='commercial'>Commercial</option>
        </select>

        <input
          type='text'
          className='p-2 rounded-md dark:text-slate-200 border border-slate-500 w-6/16 flex-1'
          placeholder='Keywords'
        />

        <button className='bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition-colors duration-300 w-3/12 flex items-center justify-center gap-x-2'>
          <HiSearch size={24} /> <span className='hidden lg:block'>Search</span>
        </button>
      </div>
    </section>

    <section className='flex-1/2'>
      <div className='grid grid-cols-2 gap-4 w-fit '>
        {heroImages.map(heroImage => (
          <img
            key={heroImage.id}
            src={heroImage.image}
            alt='hero image'
            style={{
              borderTopLeftRadius: heroImage.id === 1 && '64px',
              borderBottomRightRadius: heroImage.id === 4 && '64px'
            }}
            className='size-56 object-cover'
          />
        ))}
      </div>
    </section>
  </div>
)

export default Hero
