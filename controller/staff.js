export default class Staff {
  /**
   * Description: get workloads of the staff
   * @access     public
   * @param {string} staffId id of staff to get the workloads
   * @returns {Array}:
   *      Returns workloads list
   */
  static async getWorkloadFromStaffId(staffId)

  /**
   * Description: get staff info by login code
   * @access     public
   * @param {string} code login code
   * @returns {Array}:
   *      Returns token and information of the staff
   */
  static async getStaffInfoBycode(code)

  /**
   * Description: request code for login
   * @access     public
   * @param {string} mobile mobile number
   * @returns {Array}:
   *      Returns status of the request
   */
  static async requestCode(mobile)

  /**
   * Description: get staff list
   * @access     public
   * @param {string} company_id id of the company
   * @returns {Array}:
   *      Returns list of the staff
   */
  static async staff_getStaff(company_id)

  /**
   * Description: change node information
   * @access     public
   * @param {string} editedNode edited information
   * @param {string} node original node
   * @returns {Array}:
   *      Returns status of update
   */
  static async staff_changeNode(editedNode, node)

  /**
   * Description: send SMS to the staff
   * @access     public
   * @param {string} phone number
   * @param {string} code login code
   * @returns {Array}:
   *      Returns status of process
   */
  static staff_sendSMS(phone, code) 

  /**
   * Description: add new staff
   * @access     public
   * @param {string} manufacturerId id of manufacturer
   * @param {string} name name of the staff
   * @param {string} mobile mobile number of the staff
   * @param {string} code code of the staff
   * @param {string} type type of the user
   * @param {string} node node that user belongs to
   * @param {string} location locationof the staff
   * @returns {Array}:
   *      Returns insertion result
   */
  static async staff_addStaff(manufacturerId, name, mobile, code, type, node, location) 

  /**
   * Description: edit staff
   * @access     public
   * @param {string} name name of the staff
   * @param {string} phone mobile number of the staff
   * @param {string} node node that user belongs to
   * @param {string} location locationof the staff
   * @param {string} user_id user id
   * @returns {Array}:
   *      Returns edit result
   */
  static async staff_editStaff(node, name, phone, user_id, location) 

  /**
   * Description: delete staff
   * @access     public
   * @param {string} user_id user id
   * @returns {Array}:
   *      Returns edit result
   */
  static async staff_deleteStaff(user_id)
}