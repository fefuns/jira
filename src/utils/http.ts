import { stringify } from "qs";
import * as auth from "auth-provider";

const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  token?: string;
  data?: object;
}
export const http = async (
  endpoint: string,
  { data, token, headers, ...customConfig }: Config
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };
  if (config.method.toLocaleLowerCase() === "get") {
    endpoint += `${stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }
  return window.fetch(`${apiUrl}/${endpoint}`, config).then(async (res) => {
    if (res.status === 401) {
      await auth.logout();
      window.location.reload();
      return Promise.reject({ message: "请重新登录" });
    }
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      // 和axios的不同之处在于，如果不ok（比如401,500）的时候，fetch必须手动 reject，并不会进入catch异常中。fetch的catch只会出现在断网，网络连接失败的情况下
      // 而axios可以直接在返回状态不为2xx的时候抛出异常（进入catch回调）
      return Promise.reject(data);
    }
  });
};
