import { BiBath } from 'react-icons/bi'
import { RxCopy } from 'react-icons/rx'
import { LiaBedSolid } from 'react-icons/lia'
import { listings } from '../constant/listings'
import { HiArrowRight, HiOutlineLocationMarker } from 'react-icons/hi'

const Listings = () => {
  return (
    <div className='my-32'>
      <div className='text-center mb-14'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>
          Featured Listings
        </h1>
        <p>Carefully Selected Listings in Prime Locations</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4'>
        {listings.map(listing => (
          <div
            key={listing.id}
            className='border border-slate-300 shadow dark:border-gray-600 mb-4 rounded-lg relative'
          >
            {/* image */}
            <img
              src={listing.image}
              alt={listing.type}
              className='w-full h-48 object-cover mb-2 rounded-lg'
            />

            {/* badges */}
            <div className='flex items-center gap-6 absolute top-4 left-2'>
              <button className='bg-green-600 text-white px-4 py-1.5 rounded-md'>
                {listing.status}
              </button>
              {listing.featured && (
                <button className='bg-amber-200 text-slate-900 px-4 py-1.5 rounded-md'>
                  Featured
                </button>
              )}
            </div>

            <div className='mt-4 p-4'>
              {/* Type and Price */}
              <div className='flex items-center justify-between'>
                <h2 className='text-base font-bold'>{listing.type}</h2>
                <p className='text-green-600'>{listing.price}</p>
              </div>

              {/* Location */}
              <div className='flex items-center gap-x-2 mt-2 text-sm'>
                <HiOutlineLocationMarker
                  size={20}
                  className='inline-block mr-2'
                />
                <p className='text-gray-600'>{listing.location}</p>
              </div>

              {/* Details */}
              <div className='flex gap-x-4 items-center mt-4'>
                <div className='flex items-center gap-x-0.5'>
                  <LiaBedSolid size={20} className='inline-block' />
                  <p className='text-gray-600 text-sm'>
                    {listing.details.beds} Beds
                  </p>
                </div>

                <div className='flex items-center gap-x-0.5'>
                  <BiBath size={20} className='inline-block' />
                  <p className='text-gray-600 text-sm'>
                    {listing.details.baths} Baths
                  </p>
                </div>

                <div className='flex items-center gap-x-0.5'>
                  <RxCopy size={20} className='inline-block' />
                  <p className='text-gray-600 text-sm'>
                    {listing.details.sqft} sqft
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex gap-x-2 text-green-500 font-bold items-center justify-center py-8 mx-auto'>
        See more <HiArrowRight size={20} className='inline-block' />
      </div>
    </div>
  )
}
export default Listings
