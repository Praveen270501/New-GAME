import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "dfdc64a1b59c42979350ea08ffc36f00",
  },
});
