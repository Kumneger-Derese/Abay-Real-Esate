import ListingImage1 from '../assets/listings/listing1.jpg'
import ListingImage2 from '../assets/listings/listing2.jpg'
import ListingImage3 from '../assets/listings/listing3.jpg'
import ListingImage4 from '../assets/listings/listing4.jpg'
import ListingImage5 from '../assets/listings/listing5.jpg'
import ListingImage6 from '../assets/listings/listing6.jpg'

export const listings = [
  {
    id: 1,
    image: ListingImage1,
    type: 'Luxury Family Home',
    price: '$395,000',
    status: 'For Sale',
    featured: true,
    location: '1800-1818 79th St',
    details: {
      beds: 4,
      baths: 1,
      sqft: 400
    }
  },
  {
    id: 2,
    image: ListingImage2,
    type: 'Skyper Pool Apartment',
    price: '$280,000',
    status: 'For Sale',
    location: '1020 Bloomingdale Ave',
    details: {
      beds: 4,
      baths: 2,
      sqft: 450
    }
  },
  {
    id: 3,
    image: ListingImage3,
    type: 'North Dillard Street',
    price: '$250/month',
    status: 'For Rent',
    location: '4330 Bell Shoals Rd',
    details: {
      beds: 4,
      baths: 2,
      sqft: 450
    }
  },
  {
    id: 4,
    image: ListingImage4,
    type: 'Eaton Garth Penthouse',
    price: '$180,000',
    status: 'For Sale',
    featured: true,
    location: '7722 18th Ave, Brooklyn',
    details: {
      beds: 4,
      baths: 2,
      sqft: 450
    }
  },
  {
    id: 5,
    image: ListingImage5,
    type: 'New Apartment',
    price: '$350/month',
    status: 'For Rent',
    featured: true,
    location: '42 Avenue O, Brooklyn',
    details: {
      beds: 4,
      baths: 1,
      sqft: 460
    }
  },
  {
    id: 6,
    image: ListingImage6,
    type: 'Diamond Manor Apartment',
    price: '$259,000',
    status: 'For Sale',
    featured: true,
    location: '7802 20th Ave, Brooklyn',
    details: {
      beds: 4,
      baths: 2,
      sqft: 500
    }
  }
]
