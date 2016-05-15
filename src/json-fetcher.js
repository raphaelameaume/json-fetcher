function call(config) {
  const url = config.baseUrl + config.endpoint;
  const method = config.method;
  const body = JSON.stringify(config.body);
  const options = config.options;
  const optionalHeaders = config.options.headers || {};

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    ...config.headers,
    ...optionalHeaders
  };

  const fetchConfig = {
    method : method,
    body : body,
    headers : headers
  };

  return fetch(url, fetchConfig)
    .then( response => response.json())
    .then( response => {
      if ( response.status !== 200 || !response.success ) {
        return Promise.reject(error);
      }
      return response;
    })
    .catch( error => {
      console.error(error);
      return Promise.reject(error);
    });
}

const jsonFetcher = {
  baseUrl: '',
  headers: {},

  create (options) {
  	if ( options.baseUrl ) {
  		this.baseUrl = options.baseUrl;
  	}

  	if ( options.headers ) {
  		this.headers = options.headers;
  	}

  	return this;
  },

  get ( endpoint, options = {} ) {
  	return call({
      baseUrl : this.baseUrl,
      headers : this.headers,
      endpoint : endpoint,
      method : 'get',
      options : options
	});
  },

  post ( endpoint, body = {} , options = {}  ) {
  	return call({
      baseUrl : this.baseUrl,
      headers : this.headers,
      endpoint : endpoint,
      method : 'post',
      body : body,
      options : options
	});
  },

  put ( endpoint, body = {} , options = {}  ) {
    return call({
      baseUrl : this.baseUrl,
      headers : this.headers,
      endpoint : endpoint,
      method : 'put',
      body : body,
      options : options
    });
  },

  remove ( endpoint, body = {}, options = {} ) {
    return call({
      baseUrl : this.baseUrl,
      headers : this.headers,
      endpoint : endpoint,
      method : 'delete',
      body : body,
      options : options
    });
  }
};

export default jsonFetcher;
