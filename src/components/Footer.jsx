import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaXTwitter,
  FaYoutube
} from 'react-icons/fa6'
import { footerLinks } from '../constant/footer'

const Footer = () => {
  return (
    <div className='pt-10 mt-32'>
      {/* Footer Links */}
      <section className='grid grid-cols-1 px-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        <div className='flex flex-col gap-y-2'>
          <h1 className='font-bold text-2xl'>Abay Real Esate</h1>
          <p className='text-sm'>
            Commited to simple, fast and reliable solutions. Stay connected we
            here for your every need.
          </p>

          <div className='flex gap-x-4 mt-4 text-2xl'>
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
            <FaPinterest />
            <FaXTwitter />
          </div>
        </div>

        {/* Company */}
        <div className=''>
          {<h1 className='font-semibold text-xl mb-1'>Company</h1>}

          {['About Us', 'Services', 'Projects', 'Experts'].map(
            (link, index) => (
              <p key={index} className='text-sm mt-2'>
                {link}
              </p>
            )
          )}
        </div>

        {/* Addresses */}
        <div className=''>
          <h1 className='font-semibold text-xl mb-1'>Addresses</h1>

          <ul>
            {footerLinks.map(
              (
                { id, title, icon: Icon } // eslint-disable-line no-unused-vars
              ) => (
                <p key={id} className='text-sm mt-2 flex items-center gap-x-2'>
                  {<Icon />} {title}
                </p>
              )
            )}
          </ul>
        </div>

        {/* Subscribe */}
        <div className=''>
          <h1 className='font-semibold text-xl mb-1'>Subscribe</h1>
          <p className='text-sm'>
            Stay updated with our latest news and exclusive offers.
          </p>

          <div className='flex flex-col'>
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full p-2 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
            />
            <button className='mt-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors'>
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer End */}
      <div className='bg-green-800 p-4 mt-12 text-white flex flex-col gap-y-8 sm:flex-row justify-between px-8'>
        <h2 className='font-bold text-lg'>&copy; 2025 Abay Real Estate</h2>

        <div className='flex gap-x-8 items-center'>
          <p>Terms of User</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}
export default Footer
