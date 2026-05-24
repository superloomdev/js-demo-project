// Info: AWS Lambda handler bootstrap.
// Initializes the server loader on cold start, caches Lib and Config for warm invocations.
// All per-entity AWS Lambda handler files use this as their entry wrapper.
'use strict';


// Cached initialization state
let _initialized = false;


/********************************************************************
Initialize dependencies on first invocation (cold start).
Subsequent invocations reuse the cached global.Lib (warm container).

@return {void}
*********************************************************************/
const _initIfNeeded = async function () {

  if (_initialized) {
    return;
  }

  // Load project dependencies and configuration
  const loader = require('./loader');
  const runtime = await loader();

  // Make Lib and Config available globally for all handlers
  global.Lib = runtime.Lib;
  global.Config = runtime.Config;

  // Add shared functions to Lib
  Lib.Functions = require('./functions');

  _initialized = true;

};


/********************************************************************
Node entry function before any logic is executed.
Wraps the initiator function with initialization logic.

@param {Function} initiator_function - The main async function to process the request

@return {Function} - Wrapped handler function
*********************************************************************/
const Handler = module.exports = function (initiator_function) {

  return async function (event, context, callback) {

    // Initialize on cold start
    await _initIfNeeded();

    // Execute the handler function
    const response = await initiator_function(event, context, callback);

    // Merge Set-Cookie headers from result.cookies into the response
    const result_cookies = response && response._cookies;
    if (result_cookies) {
      const set_cookie = Lib.Functions.serializeCookieHeaders(result_cookies);
      if (set_cookie.length > 0) {
        response.headers = response.headers || {};
        response.headers['Set-Cookie'] = set_cookie.length === 1
          ? set_cookie[0]
          : set_cookie;
      }
      delete response._cookies;
    }

    return response;

  };

};
