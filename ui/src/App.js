import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { gql, useQuery } from "@apollo/client";

export const GET_TODOS = gql`
  query GetTodoList {
    todos {
      id
      title
    }
  }
`;

function App() {
  const { data, loading, error, fetchMore } = useQuery(GET_TODOS);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>error...</div>;
  }
  console.log("data: ", data);

  return (
    <div className="App">
      <header className="App-header">
        {data.todos.map((todo) => {
          return <h3 key={todo.id}>{todo.title}</h3>;
        })}
      </header>
    </div>
  );
}

export default App;
