export default class Feedback {
  /**
   * Description: get feedbacks
   * @access     public
   * @returns {Array}:
   *      Returns feedback list
   */
  static async feedback_getAll()

  /**
   * Description: add new feedback
   * @access     public
   * @param {string} uid id of user
   * @param {string} content content
   * @param {string} ip ip of end users
   * @param {string} email email of users
   * @returns {Array}:
   *      Returns workloads list
   */
  static async feedback_addFeedback(uid, content, ip, email)
}