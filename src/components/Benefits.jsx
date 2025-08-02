import { HiArrowRight } from 'react-icons/hi'
import BenefitsImage from '../assets/benefits.png'

const Benefits = () => {
  return (
    <div
      id='offers'
      className='flex mb-32 py-12 px-4 bg-green-100 dark:bg-green-900 flex-col sm:flex-row gap-8'
    >
      <section className='flex-1/2'>
        <img
          src={BenefitsImage}
          alt='Benefits'
          className='object-cover w-full h-full rounded-2xl'
        />
      </section>

      {/* Left section */}
      <section className='flex-1/2 mt-12 sm:mt-0'>
        <h1 className='text-xl sm:text-4xl font-bold mb-2'>
          Why You Should Work <br /> With Us
        </h1>

        <p>
          More Than Just Service - We Build <br /> Relationships
        </p>

        <div className='flex flex-col sm:flex-row mt-16 gap-8'>
          {/* statement 1 */}
          <div className='order-2 sm:order-none'>
            <h2 className='text-xl font-bold mb-1'>Buy or Rent Homes</h2>
            <p>
              We sell homes at the best market price and very quickly as well.
            </p>

            <button className='bg-green-900 dark:bg-green-950 hover:bg-green-600 transition-colors duration-300 text-white py-2 px-4 rounded my-4'>
              Learn More{' '}
              <HiArrowRight size={20} className='inline-block ml-2' />
            </button>
          </div>

          {/* statement 1 */}
          <div className='order-1 sm:order-none'>
            <h2 className='text-xl font-bold mb-1'>Trusted by Thousands</h2>
            <p>
              We Offer you free consultancy to get a loan for your new home.{' '}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Benefits
