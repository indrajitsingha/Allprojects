import React from 'react'

const Table = (props) => {
    const{name, username, email}=props;
  return (
    <tr>
     <td>{name}</td>
      <td>{username}</td>
       <td>{email}</td>
     </tr>
  )
}

export default Table