import { LOGIN } from './const';
import api from '../utils/api'

function action (payload) {
  return { type: LOGIN, payload: login (payload) };
}


function login  (payload) {
  return api().post ({resource: 'authenticate'}, payload, {})
}
module.exports = action;
