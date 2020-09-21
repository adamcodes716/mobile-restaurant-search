import axios from 'axios';

export default axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer gtMqTw67zIFH3yTxiatDkEkRx68V5p6RG7iA-Kl7aJSnQG5V5wz_U1d99z3SJe54prC6Qno4AiBSSfN10ejNQbM2iWUrZlOgAkVbEWNyp-tSSBzYUrr1QAEpOwxmX3Yx'
  }
});
