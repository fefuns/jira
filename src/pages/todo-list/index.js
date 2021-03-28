import { useState, useEffect } from 'react';
export const TodoList = () => {
  const [param, setParam] = useState({ name: '', personId: '' });
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch('').then(async res => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [param]);
  return <div></div>;
};
