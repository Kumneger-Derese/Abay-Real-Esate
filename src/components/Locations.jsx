import '../styles/customStyles.css'
import { locationImages } from '../assets/locationImages'

const Locations = () => {
  return (
    <div className='my-32 py-16 sm:px-8 bg-green-100 dark:bg-green-900 '>
      <div className='text-center mb-14'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>
          Popular Locations
        </h1>
        <p>Find Properties in Areas Everyone Talking About.</p>
      </div>

      {/* Image Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 px-4'>
        {/* large part 1 */}
        <div className='relative overflow-hidden rounded-3xl'>
          <img
            src={locationImages[0].image}
            alt={locationImages[0].city}
            className='rounded-3xl h-64 object-cover w-full'
          />

          {/* Overlay on the edge*/}
          <div className='absolute bg-black  blur-2xl top-0 left-0 w-full h-20 rounded-3xl' />

          {/* Overlay on the text*/}
          <div className='flex flex-col gap-y-1 absolute top-4 left-4 text-white'>
            <h3 className=''>{locationImages[0].properties} properties</h3>
            <h1 className='font-bold'>{locationImages[0].city}</h1>
          </div>
        </div>

        {/* small part 1 */}
        <div className='flex items-center gap-x-4'>
          <div className='bg-red-500 flex-1/2 relative overflow-hidden rounded-3xl'>
            <img
              src={locationImages[1].image}
              alt={locationImages[1].city}
              className='rounded-3xl h-64 object-cover w-full'
            />

            {/* Overlay on the edge*/}
            <div className='absolute bg-black  blur-2xl top-0 left-0 w-full h-20 rounded-3xl' />

            {/* Overlay on the text*/}
            <div className='flex flex-col gap-y-1 absolute top-4 left-4 text-white'>
              <h3 className=''>{locationImages[1].properties} properties</h3>
              <h1 className='font-bold'>{locationImages[1].city}</h1>
            </div>
          </div>

          {/* ========--------= */}
          <div className='bg-orange-500 flex-1/2 relative overflow-hidden rounded-3xl'>
            <img
              src={locationImages[2].image}
              alt={locationImages[2].city}
              className='rounded-3xl h-64 object-cover w-full'
            />

            {/* Overlay on the edge*/}
            <div className='absolute bg-black  blur-2xl top-0 left-0 w-full h-20 rounded-3xl' />

            {/* Overlay on the text*/}
            <div className='flex flex-col gap-y-1 absolute top-4 left-4 text-white'>
              <h3 className=''>{locationImages[2].properties} properties</h3>
              <h1 className='font-bold'>{locationImages[2].city}</h1>
            </div>
          </div>
        </div>

        {/* small part 2 */}
        <div className='flex items-center gap-x-4'>
          <div className='bg-purple-500 flex-1/2 relative overflow-hidden rounded-3xl'>
            <img
              src={locationImages[3].image}
              alt={locationImages[3].city}
              className='rounded-3xl h-64 object-cover w-full'
            />

            {/* Overlay on the edge*/}
            <div className='absolute bg-black  blur-2xl top-0 left-0 w-full h-20 rounded-3xl' />

            {/* Overlay on the text*/}
            <div className='flex flex-col gap-y-1 absolute top-4 left-4 text-white'>
              <h3 className=''>{locationImages[3].properties} properties</h3>
              <h1 className='font-bold'>{locationImages[3].city}</h1>
            </div>
          </div>
          <div className='bg-yellow-500 flex-1/2 relative overflow-hidden rounded-3xl'>
            <img
              src={locationImages[4].image}
              alt={locationImages[4].city}
              className='rounded-3xl h-64 object-cover w-full'
            />

            {/* Overlay on the edge*/}
            <div className='absolute bg-black  blur-2xl top-0 left-0 w-full h-20 rounded-3xl' />

            {/* Overlay on the text*/}
            <div className='flex flex-col gap-y-1 absolute top-4 left-4 text-white'>
              <h3 className=''>{locationImages[4].properties} properties</h3>
              <h1 className='font-bold'>{locationImages[4].city}</h1>
            </div>
          </div>
        </div>

        {/* large part 2 */}
        <div className='relative overflow-hidden rounded-3xl'>
          <img
            src={locationImages[5].image}
            alt={locationImages[5].city}
            className='rounded-3xl w-full h-64 object-cover'
          />

          {/* Overlay on the edge*/}
          <div className='absolute bg-black  blur-2xl top-0 left-0 w-full h-20 rounded-3xl' />

          {/* Overlay on the text*/}
          <div className='flex flex-col gap-y-1 absolute top-4 left-4 text-white'>
            <h3 className=''>{locationImages[5].properties} properties</h3>
            <h1 className='font-bold'>{locationImages[5].city}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Locations
