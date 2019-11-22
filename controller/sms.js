export default class Sms {
  /**
   * Description: send code through sms
   * @access     public
   * @param {string} language language
   * @param {string} mobile mobile number
   * @param {string} uid user id
   * @returns {Array}:
   *      Returns status of the process
   */
  static async sms_sendcode(language, mobile, uid) 

  /**
   * Description: verify through sms code
   * @access     public
   * @param {string} code code sent to the mobile
   * @param {string} uid user id
   * @returns {Array}:
   *      Returns status of the verification
   */
  static async sms_verify(code, uid)
}