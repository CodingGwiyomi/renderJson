import axios from "axios";


let getJsonUsers = () => {
  const config = {
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    withCredentials: false,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
    
  };
  return axios(config);
};

let getJsonUserPosts = (userId) => {
    const config = {
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts?userId=" + userId,
      withCredentials: false,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
      
    };
    return axios(config);
  };


export {  getJsonUsers, getJsonUserPosts };
