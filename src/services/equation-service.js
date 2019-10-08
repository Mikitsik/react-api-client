export default class EqationService {

  _apiBase = 'https://rails-api-serv.herokuapp.com/api/v1'

  async postData(url, data) {
    const res = await fetch(`${this._apiBase}${url}`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(data),
    });
    return await res.json();
  }

  async calculateLinear(data) {
    const resp = await this.postData('/linear', data);
    return this._fetchedData(resp);
  }

  async calculateQuadratic(data) {
    const resp = await this.postData('/quadratic', data);
    return this._fetchedData(resp);
  }

  _fetchedData(data) {
    return data
  }
}
