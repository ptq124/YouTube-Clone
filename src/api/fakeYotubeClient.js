import axios from 'axios';

export default class FakeYoutubeClient {
  async search({params}) {
    return params.relatedToVideoId
    ? axios.get('/mock/related.json')
    : axios.get('/mock/search.json')
  }
  async videos() {
    return axios.get('/mock/popular.json');
  }
  async channels() {
    return axios.get('/mock/channel.json');
  }
}
