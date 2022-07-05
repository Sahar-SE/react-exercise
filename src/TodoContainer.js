import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
class TodoContainer extends React.Component {
  state = {
 todos: [
   {
     id: 1,
     title: "Setup development environment",
     completed: true
   },
   {
     id: 2,
     title: "Develop website and add content",
     completed: false
   },
   {
     id: 3,
     title: "Deploy to live server",
     completed: false
   }
 ]
};

handleChange = id => {
  this.setState(prevState => {
  return {
    todos: prevState.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
      return todo
    }),
  }
});
};
delTodo = id => {
  console.log("deleted", id);
};


  render() {
  return (
    <div>
     <Header />
      <TodosList todos={this.state.todos} />
    </div>
  );
}
}
export default TodoContainer;