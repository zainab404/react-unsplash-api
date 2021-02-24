import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID s1SdOTps_ylI1r2SrSczqOBqiLWjMTqLzEs72EQMobo'
  }
});