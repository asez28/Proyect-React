import { API_URL, token } from "./config";

const updateTodoRequest = (todo) => {
    return fetch(`${API_URL}/todos/${todo._id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": 'application/json'
        },
        body : JSON.stringify({
          title: todo.title,
          subtitle: todo.subtitle,
          place: todo.place,
          country: todo.country,
          text: todo.text, 
        })
      })
        .then(response => response.json())
}

export default updateTodoRequest;