import React, { useState } from "react";
import "./styles.css";
import Header from "./componentes/Header";
import Lista from "./componentes/Lista";
import AddUser from "./componentes/AddUser";
import EditUser from "./componentes/EditUser";

const App = () => {
  //dados armazenados no componente pai
  //array de objetos
  //o unico componente que pode alterar o objeto state
  //é aquele no qual o state foi definido
  const usersData = [
    { id: 1, name: "Tania Silva1", username: "tania" },
    { id: 2, name: "Craig Larman", username: "craig" },
    { id: 3, name: "Ben Jonhson", username: "ben" },
  ];
  //state é um termo generico para designar um objeto destinado a armazenar dados
  const [users, setUsers] = useState(usersData);
  const initialFormState = { id: null, name: "", username: "" };
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };
  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };
  return (
    <div className="container">
      <Header />
      <div className="flex-row">
        <div className="flex-large">
          <h4>Cadastrar Usuario</h4>
          <AddUser addUser={addUser} />
        </div>
        <h4>Editar usuário</h4>
        <EditUser
          editing={editing}
          setEditing={setEditing}
          currentUser={currentUser}
          updateUser={updateUser}
        />
        <div className="flex-large">
          <h4>Lista de Usuarios</h4>
          <Lista users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};
export default App;
