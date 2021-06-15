import axios from "axios";
import React from 'react';
const DataGit = {
  get: async (username, page) => {
    const res = await axios.get(`https://api.github.com/users/${username}/repos?page=${page}`);
    // const data = await res
    return res.data
  },
  getStar: async (username,namerepos) => {
    const res = await axios.get(`https://api.github.com/repos/${username}/${namerepos}/stargazers`);
    return res.data
  }
};
export default DataGit;
