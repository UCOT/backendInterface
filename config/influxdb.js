/**
 * Description: Write multiple iot data into influx db
 * @access     public
 * @param {string} deviceID device id
 * @param {string} data data to be inserted
 * @returns {Boolean}:
 *      status of insertion
 */
async function influx_multiple_write(deviceID, data) 

/**
 * Description: Write single iot data into influx db
 * @access     public
 * @param {string} measurement device id
 * @param {string} data data to be inserted
 * @returns {Boolean}:
 *      status of insertion
 */
function influx_write(measurement, data)

/**
 * Description: Get all data of a device
 * @access     public
 * @param {string} measurement device id
 * @returns {Array}:
 *      list of iot data
 */
function influx_query(measurement) 

/**
 * Description: Get latest data of a device
 * @access     public
 * @param {string} measurement device id
 * @returns {Array}:
 *      Latest data
 */
function influx_query_last(measurement) 

module.exports = {
    influx_write: influx_write,
    influx_multiple_write: influx_multiple_write,
    influx_query: influx_query,
    influx_query_last: influx_query_last
}