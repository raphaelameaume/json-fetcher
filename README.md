# json-fetcher

Simple fetch wrapper.

## /!\ None of this code has been tested. Do not use it for now. Work in progress.

[![Travis build status](http://img.shields.io/travis/raphaelameaume/json-fetcher.svg?style=flat)](https://travis-ci.org/raphaelameaume/json-fetcher)
[![Dependency Status](https://david-dm.org/raphaelameaume/json-fetcher.svg)](https://david-dm.org/raphaelameaume/json-fetcher)
[![devDependency Status](https://david-dm.org/raphaelameaume/json-fetcher/dev-status.svg)](https://david-dm.org/raphaelameaume/json-fetcher#info=devDependencies)

## Requirements
`json-fetcher` doesn't provide any fetch and Promise polyfills. You need to provide your own before using `json-fetcher`s. If you are using `json-fetcher` in a browser environment, you can use [Github's fetch polyfill](https://github.com/github/fetch). For a node environment, use [Matthew Andrews polyfill](https://github.com/matthew-andrews/isomorphic-fetch/).

## How to use
```npm install json-fetcher --save```
```javascript
import jsonFetcher from 'json-fetcher';

// You can create a new instance of json-fetcher
const api = new jsonFetcher({
	baseUrl: '/api',
	headers: ...
});
const users = api.get('/users');

// or directly use
const users = jsonFetcher.get('/api/users');
```

## Response as a promise
json-fetcher always returns a promise, that can be rejected if the server didn't respond or if the response doesn't contains any of these informations `response.success || response.statusCode === 200 || response.status === 200`.

```javascript
jsonFetcher.get('/api/users')
  .then( response => {
	console.log(response);
  })
  .catch( error => {
  	console.error(error);
  })
```



