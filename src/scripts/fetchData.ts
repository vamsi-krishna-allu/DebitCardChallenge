import fetch from 'react-native-fetch-polyfill';

export type methodType = 'GET' | 'POST' | 'PUT' | 'DELETE';

type Options = {
  method?: methodType;
  headers?: any;
  body?: string;
};
export default async function fetchData(url: string, options?: Options) {
  return fetch(url, options).catch((Error: any) => {
    console.log(Error);
  });
}
