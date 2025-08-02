import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6'
import { testimonialsData } from '../constant/testimonials'

const Testimonial = () => {
  return (
    <div>
      {/* Testimonial Header */}
      <div className='flex flex-col sm:flex-row gap-y-8 justify-between items-center'>
        <h1 className='font-bold text-3xl text-center sm:text-left sm:text-4xl mb-4'>
          What Our Customers Are <br className='hidden sm:block' />
          Saying To Us?
        </h1>

        <div className='flex gap-x-8'>
          <div>
            <h1 className='font-bold text-4xl'>10m+</h1>
            <h2>Happy Customer</h2>
          </div>

          <div>
            <h1 className='font-bold text-4xl'>4.8</h1>
            <h2>Overall Rating</h2>

            {/* Star Rating */}
            <div className='flex items-center gap-x-2'>
              {[...Array(5)].map((_, index) => (
                <span key={index} className=' text-yellow-500'>
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Content */}
      <div className='mb-32'>
        <div className='flex flex-col sm:flex-row gap-8 mt-8'>
          {testimonialsData.map(testimonial => (
            <div
              key={testimonial.id}
              className='bg-green-100 dark:bg-slate-800 p-6 rounded-lg border border-slate-300 dark:border-slate-700'
            >
              <div className='mb-4 flex gap-x-4'>
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className='w-16 h-16 rounded-full mb-4 border object-cover'
                />

                <div className='flex flex-col gap-y-1'>
                  <h3 className='font-semibold text-lg'>
                    {testimonial.author}
                  </h3>
                  <p className='text-sm text-gray-500'>{testimonial.title}</p>
                </div>
              </div>
              <p className='mt-2'>
                <span className='inline-block text-green-500 mr-2'>
                  <FaQuoteLeft />
                </span>
                {testimonial.quote}

                <span className='inline-block text-green-500 ml-2'>
                  <FaQuoteRight />
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Testimonial
