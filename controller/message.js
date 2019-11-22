export default class Message {

  /**
   * Description: get connection list of the company
   * @access     public
   * @param {string} company_id id of company
   * @returns {Array}:
   *      Returns list of connections
   */
  static async getConnection(company_id)

  /**
   * Description: check issues count of a company
   * @access     public
   * @param {string} company_id id of company
   * @returns {Array}:
   *      Returns count of issues
   */
  static async checkIssue(company_id)

  /**
   * Description: get number of connected companies in trouble
   * @access     public
   * @param {string} company_id id of company
   * @returns {Array}:
   *      Returns number of connected companies in trouble
   */
  static async msg_getInTrouble(company_id)

  /**
   * Description: get issue types
   * @access     public
   * @param {string} company_id id of company
   * @returns {Array}:
   *      Returns issue types
   */
  static async msg_getTypeIssues(company_id) 

  /**
   * Description: get notification lists
   * @access     public
   * @param {string} company_id id of company
   * @returns {Array}:
   *      Returns list of notifications
   */
  static async msg_getNotification(company_id)

  /**
   * Description: get alarm list
   * @access     public
   * @param {string} company_id id of company
   * @returns {Array}:
   *      Returns list of alarms
   */
  static async msg_getAlarm(company_id)

  /**
   * Description: change notification status
   * @access     public
   * @param {string} type type of notification
   * @param {string} value value of changed notification
   * @param {string} id id of the notification
   * @returns {Array}:
   *      Returns status of changes
   */
  static async msg_setNotification(type, value, id)

  /**
   * Description: change alarm status
   * @access     public
   * @param {string} type type of notification
   * @param {string} value value of changed notification
   * @param {string} id id of the notification
   * @returns {Array}:
   *      Returns status of changes
   */
  static async alarm_Action(type, value, id) 
}