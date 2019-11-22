export default class Info {
  /**
   * Description: get invitation code
   * @access     public
   * @param {string} company_id id of company
   * @returns {Object}:
   *      Returns invitation code
   */
  static async company_getInvitation(company_id)

  /**
   * Description: get partner list
   * @access     public
   * @param {string} company_id id of company
   * @returns {Array}:
   *      Returns list of companies
   */
  static async company_getPartners(company_id) 

  /**
   * Description: get company list
   * @access     public
   * @returns {Array}:
   *      Returns list of companies
   */
  static async company_getAllCompanies()

  /**
   * Description: get batch list
   * @access     public
   * @param {string} company_id id of company
   * @returns {Array}:
   *      Returns list of batches
   */
  static async company_getBatch(company_id)

  /**
   * Description: get files of the company
   * @access     public
   * @param {string} company_id id of company
   * @returns {Array}:
   *      Returns list of files
   */
  static async company_getFile(company_id)

  /**
   * Description: get all companys' id
   * @access     public
   * @returns {Array}:
   *      Returns list of company ids
   */
  static async company_getAll()

  /**
   * Description: get product list of the company
   * @access     public
   * @param {string} company_id id of company
   * @returns {Array}:
   *      Returns list of products
   */
  static async company_getProduct(company_id) 

  /**
   * Description: get profile information of the company
   * @access     public
   * @param {string} company_id id of company
   * @returns {Array}:
   *      Returns list of information
   */
  static async company_getProfile(company_id)

  /**
   * Description: get factory list of the company
   * @access     public
   * @param {string} company_id id of company
   * @returns {Array}:
   *      Returns list of factories
   */
  static async company_getFactory(company_id)

  /**
   * Description: get third party list of the company
   * @access     public
   * @param {string} company_id id of company
   * @returns {Array}:
   *      Returns list of third parties
   */
  static async company_getThirdParty(company_id) 

  /**
   * Description: get issue list of the company
   * @access     public
   * @param {string} company_id id of company
   * @returns {Array}:
   *      Returns list of issues
   */
  static async company_getIssue(company_id)
}