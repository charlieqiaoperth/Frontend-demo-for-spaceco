import axios from 'axios';

export function fetchBusinesses(searchKeyword) {
  return axios
    .get('/businesses?pageSize=40?page=1', { params: { searchKeyword } })
    .then(response => {
      return response.data;
    });
}

export function fetchBusinessById(id) {
  return axios
    .get(`/businesses/${id}`)
    .then(response => {
      const business = response.data;
      return business;
    })
    .catch(error => {
      if (error.response) {
        const errorData = error.response;
        throw new Error(`${errorData.status}:${errorData.statusText}`);
      }
      throw new Error('Some error occurred');
    });
}

export function createBusiness(data) {
  return axios.post('/businesses', data);
}

export function updateBusiness(id, data) {
  return axios.put(`/businesses/${id}`, data, {
    'Access-Control-Allow-Origin': '*'
  });
}

export function deleteBusiness(id) {
  return axios.delete(`/businesses/${id}`);
}
