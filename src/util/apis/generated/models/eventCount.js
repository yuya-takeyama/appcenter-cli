/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the EventCount class.
 * @constructor
 * @member {number} [totalCount]
 * 
 * @member {number} [previousTotalCount]
 * 
 * @member {array} [count]
 * 
 */
function EventCount() {
}

/**
 * Defines the metadata of EventCount
 *
 * @returns {object} metadata of EventCount
 *
 */
EventCount.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'EventCount',
    type: {
      name: 'Composite',
      className: 'EventCount',
      modelProperties: {
        totalCount: {
          required: false,
          serializedName: 'total_count',
          type: {
            name: 'Number'
          }
        },
        previousTotalCount: {
          required: false,
          serializedName: 'previous_total_count',
          type: {
            name: 'Number'
          }
        },
        count: {
          required: false,
          serializedName: 'count',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'DateTimeCountsElementType',
                type: {
                  name: 'Composite',
                  className: 'DateTimeCounts'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = EventCount;
