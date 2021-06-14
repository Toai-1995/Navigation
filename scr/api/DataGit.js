import axios from "axios";
import React from 'react';
const DataGit = {
  get: async username => {
    const res = await axios.get(`https://api.github.com/users/${username}/repos`);
    return res.data
  },
};
export default DataGit;
