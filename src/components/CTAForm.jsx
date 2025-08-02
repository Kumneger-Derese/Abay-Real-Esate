import CTAImage from '../assets/cta.png'

const CTAForm = () => {
  const handleSubmit = e => {
    e.preventDefault()
    alert('Form submitted successfully!')
  }

  return (
    <div className='flex flex-col bg-green-100 dark:bg-green-900 px-8 mb-32 py-10'>
      {/* CTA Header */}
      <div className='text-center mb-14'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>
          Lets Get Started
        </h1>
        <p>Ready to begin your journey? We Are here to guide you.</p>
      </div>

      {/* CTA Content */}
      <div className='flex flex-col items-center sm:flex-row gap-y-8 gap-x-16'>
        {/* Image */}
        <section className='w-full sm:w-5/12 flex justify-center items-center mb-16 sm:mb-0'>
          <img
            src={CTAImage}
            alt='cta-image'
            className='object-cover w-full h-[500px] shadow-md shadow-green-900 rounded-lg'
          />
        </section>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className='w-full sm:w-6/12 flex flex-col gap-y-2 border p-6 rounded-md
           border-green-700'
        >
          {/* Name and Phone */}
          <div className='flex gap-x-8 mb-4 items-center justify-between'>
            {/* Name Field */}
            <div className='flex flex-col gap-y-2 w-1/2 font-medium'>
              <label htmlFor='name'>Your name</label>
              <input
                type='text'
                id='name'
                placeholder='Your name here...'
                className='border-2 border-green-700 rounded-md p-2 w-full'
              />
            </div>

            {/* Phone Field */}
            <div className='flex flex-col gap-y-2 w-1/2 font-medium'>
              <label htmlFor='phone'>Your phone</label>
              <input
                type='tel'
                id='phone'
                placeholder='Phone number here...'
                className='border-2 border-green-700 rounded-md p-2 w-full'
              />
            </div>
          </div>

          {/* Email Field */}
          <div className='w-full flex flex-col gap-y-2 mb-4 font-medium'>
            <label htmlFor='email' className='font-medium'>
              Your email
            </label>
            <input
              type='email'
              id='email'
              placeholder='Type your email here...'
              className='border-2 border-green-700 rounded-md p-2 w-full'
            />
          </div>

          {/* Location and Property Type */}
          <div className='flex gap-x-8 mb-4 items-center justify-between'>
            {/* Location Field */}
            <div className='flex flex-col gap-y-2 w-1/2 font-medium dark:text-white'>
              <label htmlFor='location'>Your location</label>
              <select
                id='location'
                className='border-2 border-green-700 rounded-md p-2 w-full bg-transparent'
              >
                <option value='New York'>New York</option>
                <option value='Los Angeles'>Los Angeles</option>
                <option value='Chicago'>Chicago</option>
                <option value='Houston'>Houston</option>
                <option value='Phoenix'>Phoenix</option>
              </select>
            </div>

            {/* Property Type Field */}
            <div className='flex flex-col gap-y-2 w-1/2 font-medium'>
              <label htmlFor='property-type'>Property type</label>
              <select
                id='property-type'
                className='border-2 border-green-700 rounded-md p-2 w-full'
              >
                <option value='house'>House</option>
                <option value='apartment'>Apartment</option>
                <option value='condo'>Condo</option>
              </select>
            </div>
          </div>

          {/* Message Field */}
          <div className='w-full flex flex-col gap-y-2 mb-4 font-medium'>
            <label htmlFor='message'>Your message</label>
            <textarea
              id='message'
              ro4ws='6'
              placeholder='Type your message here...'
              className='border-2 border-green-700 rounded-md p-2 w-full'
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='bg-green-700 hover:bg-green-950 font-bold text-white rounded-md p-2 w-full'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
export default CTAForm
