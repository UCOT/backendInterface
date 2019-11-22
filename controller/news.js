export default class News {

  /**
   * Description: get news by its id
   * @access     public
   * @param {string} id id of the news
   * @returns {Array}:
   *      Returns list of found news
   */
  static async get_newsByid(id)

  /**
   * Description: get news by company id
   * @access     public
   * @param {string} company_id id of the news
   * @returns {Array}:
   *      Returns list of found news
   */
  static async get_newsByCompany(company_id) 

  /**
   * Description: get all news
   * @access     public
   * @returns {Array}:
   *      Returns list of news
   */
  static async get_AllNews() 

  /**
   * Description: get all videos of news
   * @access     public
   * @returns {Array}:
   *      Returns list of videos
   */
  static async get_AllVideos() 
}
