/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');
var msRest = require('ms-rest');
var WebResource = msRest.WebResource;

/**
 * @class
 * CodePushAcquisition
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AppCenterClient.
 * Initializes a new instance of the CodePushAcquisition class.
 * @constructor
 *
 * @param {AppCenterClient} client Reference to the service client.
 */
function CodePushAcquisition(client) {
  this.client = client;
}

/**
 * Check for updates
 *
 * @param {string} deploymentKey
 * 
 * @param {string} appVersion
 * 
 * @param {object} [options] Optional Parameters.
 * 
 * @param {string} [options.packageHash]
 * 
 * @param {string} [options.label]
 * 
 * @param {string} [options.clientUniqueId]
 * 
 * @param {boolean} [options.isCompanion]
 * 
 * @param {string} [options.previousLabelOrAppVersion]
 * 
 * @param {string} [options.previousDeploymentKey]
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object.
 *                      See {@link UpdateCheckResponse} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
CodePushAcquisition.prototype.updateCheck = function (deploymentKey, appVersion, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  var packageHash = (options && options.packageHash !== undefined) ? options.packageHash : undefined;
  var label = (options && options.label !== undefined) ? options.label : undefined;
  var clientUniqueId = (options && options.clientUniqueId !== undefined) ? options.clientUniqueId : undefined;
  var isCompanion = (options && options.isCompanion !== undefined) ? options.isCompanion : undefined;
  var previousLabelOrAppVersion = (options && options.previousLabelOrAppVersion !== undefined) ? options.previousLabelOrAppVersion : undefined;
  var previousDeploymentKey = (options && options.previousDeploymentKey !== undefined) ? options.previousDeploymentKey : undefined;
  // Validate
  try {
    if (deploymentKey === null || deploymentKey === undefined || typeof deploymentKey.valueOf() !== 'string') {
      throw new Error('deploymentKey cannot be null or undefined and it must be of type string.');
    }
    if (appVersion === null || appVersion === undefined || typeof appVersion.valueOf() !== 'string') {
      throw new Error('appVersion cannot be null or undefined and it must be of type string.');
    }
    if (packageHash !== null && packageHash !== undefined && typeof packageHash.valueOf() !== 'string') {
      throw new Error('packageHash must be of type string.');
    }
    if (label !== null && label !== undefined && typeof label.valueOf() !== 'string') {
      throw new Error('label must be of type string.');
    }
    if (clientUniqueId !== null && clientUniqueId !== undefined && typeof clientUniqueId.valueOf() !== 'string') {
      throw new Error('clientUniqueId must be of type string.');
    }
    if (isCompanion !== null && isCompanion !== undefined && typeof isCompanion !== 'boolean') {
      throw new Error('isCompanion must be of type boolean.');
    }
    if (previousLabelOrAppVersion !== null && previousLabelOrAppVersion !== undefined && typeof previousLabelOrAppVersion.valueOf() !== 'string') {
      throw new Error('previousLabelOrAppVersion must be of type string.');
    }
    if (previousDeploymentKey !== null && previousDeploymentKey !== undefined && typeof previousDeploymentKey.valueOf() !== 'string') {
      throw new Error('previousDeploymentKey must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var baseUrl = this.client.baseUri;
  var requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v0.1/apps/deployments/releases/updateCheck';
  var queryParameters = [];
  queryParameters.push('deployment_key=' + encodeURIComponent(deploymentKey));
  queryParameters.push('app_version=' + encodeURIComponent(appVersion));
  if (packageHash !== null && packageHash !== undefined) {
    queryParameters.push('package_hash=' + encodeURIComponent(packageHash));
  }
  if (label !== null && label !== undefined) {
    queryParameters.push('label=' + encodeURIComponent(label));
  }
  if (clientUniqueId !== null && clientUniqueId !== undefined) {
    queryParameters.push('client_unique_id=' + encodeURIComponent(clientUniqueId));
  }
  if (isCompanion !== null && isCompanion !== undefined) {
    queryParameters.push('is_companion=' + encodeURIComponent(isCompanion.toString()));
  }
  if (previousLabelOrAppVersion !== null && previousLabelOrAppVersion !== undefined) {
    queryParameters.push('previous_label_or_app_version=' + encodeURIComponent(previousLabelOrAppVersion));
  }
  if (previousDeploymentKey !== null && previousDeploymentKey !== undefined) {
    queryParameters.push('previous_deployment_key=' + encodeURIComponent(previousDeploymentKey));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          var resultMapper = new client.models['Failure']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody ' + 
                         '- "%s" for the default response.', defaultError.message, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      var parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          var resultMapper = new client.models['UpdateCheckResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        var deserializationError = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
};

/**
 * Report download of specified release
 *
 * @param {object} releaseMetadata Deployment status metric properties
 * 
 * @param {string} releaseMetadata.deploymentKey
 * 
 * @param {string} [releaseMetadata.label]
 * 
 * @param {string} [releaseMetadata.appVersion]
 * 
 * @param {string} [releaseMetadata.previousDeploymentKey]
 * 
 * @param {string} [releaseMetadata.previousLabelOrAppVersion]
 * 
 * @param {string} [releaseMetadata.status]
 * 
 * @param {string} [releaseMetadata.clientUniqueId]
 * 
 * @param {object} [options] Optional Parameters.
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {null} [result]   - The deserialized result object.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
CodePushAcquisition.prototype.updateDownloadStatus = function (releaseMetadata, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (releaseMetadata === null || releaseMetadata === undefined) {
      throw new Error('releaseMetadata cannot be null or undefined.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var baseUrl = this.client.baseUri;
  var requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v0.1/apps/deployments/releases/report_status/download';

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  // Serialize Request
  var requestContent = null;
  var requestModel = null;
  try {
    if (releaseMetadata !== null && releaseMetadata !== undefined) {
      var requestModelMapper = new client.models['CodePushStatusMetricMetadata']().mapper();
      requestModel = client.serialize(requestModelMapper, releaseMetadata, 'releaseMetadata');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    var serializationError = new Error(util.format('Error "%s" occurred in serializing the ' + 
        'payload - "%s"', error.message, util.inspect(releaseMetadata, {depth: null})));
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          var resultMapper = new client.models['Failure']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody ' + 
                         '- "%s" for the default response.', defaultError.message, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;

    return callback(null, result, httpRequest, response);
  });
};

/**
 * Report Deployment status metric
 *
 * @param {object} releaseMetadata Deployment status metric properties
 * 
 * @param {string} releaseMetadata.deploymentKey
 * 
 * @param {string} [releaseMetadata.label]
 * 
 * @param {string} [releaseMetadata.appVersion]
 * 
 * @param {string} [releaseMetadata.previousDeploymentKey]
 * 
 * @param {string} [releaseMetadata.previousLabelOrAppVersion]
 * 
 * @param {string} [releaseMetadata.status]
 * 
 * @param {string} [releaseMetadata.clientUniqueId]
 * 
 * @param {object} [options] Optional Parameters.
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {null} [result]   - The deserialized result object.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
CodePushAcquisition.prototype.updateDeployStatus = function (releaseMetadata, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (releaseMetadata === null || releaseMetadata === undefined) {
      throw new Error('releaseMetadata cannot be null or undefined.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var baseUrl = this.client.baseUri;
  var requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v0.1/apps/deployments/releases/report_status/deploy';

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  // Serialize Request
  var requestContent = null;
  var requestModel = null;
  try {
    if (releaseMetadata !== null && releaseMetadata !== undefined) {
      var requestModelMapper = new client.models['CodePushStatusMetricMetadata']().mapper();
      requestModel = client.serialize(requestModelMapper, releaseMetadata, 'releaseMetadata');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    var serializationError = new Error(util.format('Error "%s" occurred in serializing the ' + 
        'payload - "%s"', error.message, util.inspect(releaseMetadata, {depth: null})));
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          var resultMapper = new client.models['Failure']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody ' + 
                         '- "%s" for the default response.', defaultError.message, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;

    return callback(null, result, httpRequest, response);
  });
};


module.exports = CodePushAcquisition;
