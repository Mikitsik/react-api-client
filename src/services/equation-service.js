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
    return await this.postData('/linear', data)
  }

  async calculateQuadratic(data) {
    return await this.postData('/quadratic', data)
  }
}
