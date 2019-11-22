let apiUrl
const apiUrls = {
  production: 'https://api.punkapi.com/v2/beers',
  development: 'https://api.punkapi.com/v2/beers'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
