import React from 'react';

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}
interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
}
interface Iprops {
  list: Project[];
  users: User[];
}
export const List = ({ list, users }: Iprops) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{users.find(user => user.id === item.personId)?.name || '未知'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
