import React from 'react';
interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
}
interface Iprops {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: Iprops['param']) => void;
}
export const Search = ({ users, param, setParam }: Iprops) => {
  return (
    <form>
      <div>
        <input
          type='text'
          value={param.name}
          onChange={e => {
            setParam({
              ...param,
              name: e.target.value,
            });
          }}
        />
        <select
          value={param.personId}
          onChange={e => {
            setParam({
              ...param,
              personId: e.target.value,
            });
          }}
        >
          <option value=''>负责人</option>
          {users.map(item => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
