class MainApi {
    constructor({ baseUrl, headers }) {
      this._headers = headers;
      this._baseUrl = baseUrl;
    }

    getCategories() {
      return fetch(`${this._baseUrl}/api/categories/`, {
        method: 'GET',
        headers: this._headers,
      }).then(this._getResponseData)
    }

    
    getSales() {
      return fetch(`${this._baseUrl}/api/sales/?sku=c7b711619071c92bef604c7ad68380dd&store=c81e728d9d4c2f636f067f89cc14862c`, {
        method: 'GET',
        headers: this._headers,
      }).then(this._getResponseData)
    }

    // getStores() {
    //   return fetch(`${this._baseUrl}/api/stores/`, {
    //     method: 'GET',
    //     headers: this._headers,
    //   }).then(this._getResponseData)
    // }

    getForecast() {
      return fetch(`${this._baseUrl}/api/forecast/`, {
        method: 'GET',
        headers: this._headers,
      }).then(this._getResponseData)
    }

    setHeaders(headers) {
      this._headers = headers;
    }

    async _getResponseData(res) {
      const resJson = await res.json();
        if (!res.ok) {
          return Promise.reject(resJson.message);
        }
        return resJson;
      }

  }
  
  export const mainApi = new MainApi({
    baseUrl: "http://localhost:8080",
  });
