import React, { FormEvent } from 'react';

export const Login = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[0] as HTMLInputElement).value;
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>用户名</label>
        <input type='text' id='username' />
      </div>
      <div>
        <label htmlFor='password'>密码</label>
        <input type='password' id='password' />
      </div>
      <button type='submit'>登录</button>
    </form>
  );
};
