import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8081/api/v1/note'
});

const NoteService = {
    get: async (url) => {
      try {
        const response = await axiosInstance.get(url);
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    },
  
    post: async (url, data) => {
      try {
        const response = await axiosInstance.post(url, data);
        return response.data;
      } catch (error) {
        console.error('Error creating data:', error);
        throw error;
      }
    },
  
    update: async (url, data) => {
      try {
        const response = await axiosInstance.put(url, data);
        return response.data;
      } catch (error) {
        console.error('Error updating data:', error);
        throw error;
      }
    },
  
    delete: async (url) => {
      try {
        const response = await axiosInstance.delete(url);
        return response.data;
      } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
      }
    }
    
}

export default NoteService;