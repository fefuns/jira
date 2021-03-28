import { useState, useEffect } from 'react';

/** 自定义hooks */
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};
export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // 每次在value变化以后，设置一个定时器
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    // 每次在上一个useEffect处理完后再运行
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedValue;
};

/** 常用 bom 操作 */
export const getParams = (url: any) => {
  let params: any = {};
  let _url = url || window.location.href;
  if (window.URLSearchParams) {
    new URL(_url).searchParams.forEach(
      (value: string, key: string) => (params[key] = decodeURIComponent(value))
    );
  } else {
    _url.replace(/[#|?&]+([^=#|&]+)=([^#|&]*)/gi, function (m: any, key: string, value: string) {
      params[key] = decodeURIComponent(value);
    });
  }
  return params;
};

/* 常用数据操作 */
/**
 * 判断是否是假值
 * @param val
 * @returns
 */
export const isFalsy = (val: unknown) => (val === 0 ? false : !val);
/**
 * 清楚掉对象中值为空的项
 * @param obj
 * @returns
 */
export const cleanObject = (obj: object) => {
  const result = { ...obj };
  Object.keys(obj).forEach(key => {
    // @ts-ignore
    const value = obj[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};
