import { API_URL, token } from "./config";

const apiUrl = () => {
    return fetch(`${API_URL}/todos`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": 'application/json'
        }
      })
        .then(response => response.json())
}

export default apiUrl;