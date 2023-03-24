import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 7oKQhEBOrVWLiPv4EWXjzCRF5vJuVOMzWqYC1wjej5Q',
  },
})
