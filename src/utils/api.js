import request from './request';

/**
 * @function Network
 * @description Factory function to create a object that can send
 * requests to a specific resource on the server.
 * @param {string} resource The resource used for config
 */
const api = resource => {
  let buildURL = ({ id, resource } = {}) => {
    let parameters = [
      'http://localhost:8080',
      'api'
    ];
    console.log ('resource', resource)
    if (resource !== undefined && resource !== null) {
      console.log ('resouce not null')
      console.log (resource, id)
      parameters.push(resource);
    }
    if (id !== undefined && id !== null) {
       parameters.push (id);
     }
    console.log ('parameters', parameters)
    return parameters.join('/');
  }

  // Default options used for every request
  const defaultOptions = {
    // mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };

  return {

    /**
     * @function post
     * @description Make a POST request.
     * @param {string} path
     * @param {object} body
     * @param {object} options
     * @returns {promise}
     */
    post: (path, body, options = {}) => {
      return request(buildURL(path), Object.assign(
        options,
        defaultOptions,
        {
          method: 'POST',
          body: JSON.stringify(body)
        }
      ));
    },

    /**
     * @function post
     * @description Make a GET request.
     * @param {string} path
     * @param {object} options
     * @returns {promise}
     */
    get: (path, options = {}) => {
      return request(buildURL(path), Object.assign(
        options,
        defaultOptions,
        { method: 'GET' }
      ));
    },

    /**
     * @function edit
     * @description Make a PUT request.
     * @param {string} path
     * @param {object} body
     * @param {object} options
     * @returns {promise}
     */
    edit: (path, body, options = {}) => {
      return request(buildURL(path), Object.assign(
        options,
        defaultOptions,
        { method: 'PUT' }
      ));
    },

    /**
     * @function delete
     * @description Make a DELETE request.
     * @param {string} path
     * @param {object} options
     * @returns {promise}
     */
    delete: (path, options = {}) => {
      return request(buildURL(path), Object.assign(
        options,
        defaultOptions,
        { method: 'DELETE' }
      ));
    },

    ping: () => request(buildURL(), { method: 'GET' })
  };
};

export default api;
