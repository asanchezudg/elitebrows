// config.js
export const GOOGLE_CLIENT_ID = '179297632607-2ras813vgen8ib4hlm26qfvkf1l9cun9.apps.googleusercontent.com';
export const GOOGLE_API_KEY = 'AIzaSyCzmVlo4j_sN7hvvCs4qUbaok0HIKmj7eg';
export const REDIRECT_URI = process.env.NODE_ENV === 'production' 
  ? 'https://tudominio.com/oauth2callback'
  : 'http://localhost:3000/oauth2callback';