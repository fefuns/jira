import { useAuth } from "context/auth-context";
import { FormEvent } from "react";

export const LoginScreen = () => {
  const { login, user } = useAuth();
  // HTMLFormElement extends Element
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const username = e.currentTarget.element[0].value;
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    login({ username, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      {user ? (
        <div>
          登录成功，用户名{user.name} token: {user.token}
        </div>
      ) : null}
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" name="password" id="password" />
      </div>
      <button type="submit">登录</button>
    </form>
  );
};
