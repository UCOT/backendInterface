/**
 * Description: check alarm of devices
 * @access     public
 * @param {string} data data to check 
 * @param {string} deviceID id of device
 * @returns {Array}:
 *      Returns result of checking
 */
async function checkAlarm(data, deviceID)

export default class IoT {

    /**
     * Description: get information to display on the marker
     * @access     public
     * @param {string} batch_id data to check 
     * @param {string} company_id id of company
     * @returns {Array}:
     *      Returns list of information
     */
    static async iot_getMarkerInfo(batch_id, company_id)

    /**
     * Description: get information of a single device
     * @access     public
     * @param {string} clientID id of client
     * @param {string} deviceID id of device
     * @returns {Array}:
     *      Returns list of information
     */
    static async iot_getSingleDeviceInfo(clientID, deviceID) 

    /**
     * Description: get information of all devices
     * @access     public
     * @param {string} clientID id of client
     * @returns {Array}:
     *      Returns list of information
     */
    static async iot_getAllDevicesInfo(clientID) 

    /**
     * Description: get history information of a single device
     * @access     public
     * @param {string} clientID id of client
     * @param {string} deviceID id of device
     * @returns {Array}:
     *      Returns list of information
     */
    static async iot_getSingleDeviceHistory(clientID, deviceID)

    /**
     * Description: get history information of a all devices
     * @access     public
     * @param {string} batch_id id of batch
     * @returns {Array}:
     *      Returns list of information
     */
    static async iot_getAllDevicesHistory(batch_id) 

    /**
     * Description: get device info from batch
     * @access     public
     * @param {string} batch_id id of batch
     * @returns {Array}:
     *      Returns list of device ids
     */
    static async iot_getDeviceFromBatch(obj) 

    /**
     * Description: get all batches
     * @access     public
     * @returns {Array}:
     *      Returns list of batches
     */
    static async iot_getAllBatch()

    /**
     * Description: get recent update data
     * @access     public
     * @returns {Array}:
     *      Returns list of recent data
     */
    static async iot_recvUpdateData(obj)

    /**
     * Description: get current information of all devices
     * @access     public
     * @param {string} batch_id id of batch
     * @returns {Array}:
     *      Returns list of information
     */
    static async iot_getAllDeviceCurrentInfo(batch_id)

    /**
     * Description: get client related to the device
     * @access     public
     * @param {string} deviceID id of device
     * @returns {Array}:
     *      Returns list of clinets
     */
    static async iot_getClientFromDevice(deviceID) 

    /**
     * Description: get alarm info related to the device
     * @access     public
     * @param {string} deviceID id of device
     * @returns {Array}:
     *      Returns list of alarms
     */
    static async iot_getAlarmFromDevice(deviceID)

    /**
     * Description: update alarm flag
     * @access     public
     * @param {string} type type of alarm
     * @param {string} value value to be updated
     * @param {stirng} id id of the alarm
     * @returns {Array}:
     *      Returns list of alarms
     */
    static async iot_alarmAction(obj)
}