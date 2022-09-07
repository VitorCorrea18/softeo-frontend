import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

const fetchPatientsApi = async () => {
  const endpoint = '/patients';
  const { data } = await api.get(endpoint);

  return data;
};

export default fetchPatientsApi;
