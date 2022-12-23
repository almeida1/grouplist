import React from "react";
import * as C from "./styles";

const Lista = (props) => (
  <table>
    <thead>
      <tr>
        <th>
          <C.TitleColuna>Id</C.TitleColuna>
        </th>
        <th>
          <C.TitleColuna>Name</C.TitleColuna>
        </th>
        <th>
          <C.TitleColuna>Username</C.TitleColuna>
        </th>
        <th>
          <C.TitleColuna>Actions</C.TitleColuna>
        </th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>
              <C.Linha>{user.id}</C.Linha>
            </td>
            <td>
              <C.Linha>{user.name}</C.Linha>
            </td>
            <td>{user.username}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user);
                }}
                className="button muted-button"
              >
                Edit
              </button>

              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default Lista;
