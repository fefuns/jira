import React, { useState, useEffect } from 'react';
import { List } from './list';
import { Search } from './search';
import { useDebounce, useMount, cleanObject } from 'utils';
import { stringify } from 'qs';

const apiUrl = process.env.REACT_APP_API_URL;
export const TodoList = () => {
  const [param, setParam] = useState({ name: '', personId: '' });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const debounceParam = useDebounce(param, 200);
  useEffect(() => {
    fetch(`${apiUrl}/projects?${stringify(cleanObject(debounceParam))}`).then(async res => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [debounceParam]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async res => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  });
  return (
    <>
      <Search users={users} param={param} setParam={setParam}></Search>
      <List users={users} list={list}></List>
    </>
  );
};
