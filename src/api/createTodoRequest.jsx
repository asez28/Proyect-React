import { API_URL, token } from "./config";

const createTodoRequest= (todo) => {
    return fetch(`${API_URL}/todos`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": 'application/json'
        },
        body : JSON.stringify({
          title: todo.title,
          subtitle: todo.subtitle,
          place: todo.place,
          url: todo.url,
          imgDescription: todo.imgDescription,
          country: todo.country,
          text: todo.text, 
        })
      })
        .then(response => response.json())
}

export default createTodoRequest;