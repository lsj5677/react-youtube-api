import axios from "axios";

export default class LocalYoutubeClient {
  async search({ params }) {
    return params.relatedId
      ? axios.get("/data/related.json")
      : axios.get("/data/search.json");
  }

  async videos() {
    return axios.get("/data/popular.json");
  }

  async channels() {
    return axios.get("/data/channel.json");
  }
}
