import axios from "axios";

export default async () => {
  const { data } = await axios("https://www.js-budapest.com/api/somedata");
  return data.somedata;
}