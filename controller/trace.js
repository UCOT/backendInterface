export default class Trace {
  /**
   * Description: get trace information
   * @access     public
   * @param {Array} pid product id
   * @returns {Array}:
   *      Returns result of query
   */
  static async trace_getInfo(pid)

  /**
   * Description: Bond box with product ids
   * @access     public
   * @param {string} token Authentication token
   * @param {string} box_id Box id
   * @param {array[String]} product_ids list of product ids
   * @returns {Object}:
   *      Returns status and message
   */
  static async trace_bondBox(token, box_id, product_ids)

  /**
   * Description: get caller history
   * @access     public
   * @param {string} uid user id
   * @returns {Object}:
   *      Returns list of the history
   */
  static async trace_getCallerHistory(uid) 

  /**
   * Description: get caller history
   * @access     public
   * @param {string} pid product id
   * @param {string} source source of the caller
   * @param {string} ip ip of the user
   * @param {string} ipAddress address of this ip
   * @param {string} uid user id
   * @param {string} city city name
   * @param {string} state state name
   * @param {string} country country name
   * @param {string} lang language
   * @returns {Object}:
   *      Returns list trace information
   */
  static async trace_getProductAndTrace(pid, source, ip, ipAddress, uid, city, state, country, lang) 

  /**
   * Description: get trace data for a node
   * @access     public
   * @param {string} company_id company id
   * @param {string} start start date
   * @param {string} end end date
   * @returns {Object}:
   *      Returns list trace information
   */
  static async trace_getNodeRecord(company_id, start, end) 

  /**
   * Description: get past on chain data statics
   * @access     public
   * @param {string} company_id company id
   * @param {string} start start date
   * @param {string} end end date
   * @returns {Object}:
   *      Returns list trace information
   */
  static async trace_getPastBlockchain(company_id, start, end)

  /**
   * Description: get top scanned products
   * @access     public
   * @param {string} company_id company id
   * @param {string} start start date
   * @param {string} end end date
   * @returns {Object}:
   *      Returns list of products
   */
  static async trace_getTopScanned(company_id, start, end)

  /**
   * Description: get gender statistics
   * @access     public
   * @param {string} company_id company id
   * @returns {Object}:
   *      Returns list of gendewr statistics
   */
  static async trace_getGender(company_id) 

  /**
   * Description: get China city trace statistics
   * @access     public
   * @param {string} company_id company id
   * @returns {Object}:
   *      Returns list of city distribution statistics
   */
  static async trace_getCityInChina(company_id) 

  /**
   * Description: get Overseas city trace statistics
   * @access     public
   * @param {string} company_id company id
   * @returns {Object}:
   *      Returns list of city distribution statistics
   */
  static async trace_getCityOversea(company_id) 

  /**
   * Description: get count of trace
   * @access     public
   * @param {string} company_id company id
   * @returns {Object}:
   *      Returns count of total trace
   */
  static async trace_getTraceCount(company_id)

  /**
   * Description: get total product number that uploaded to the chain
   * @access     public
   * @param {string} company_id company id
   * @returns {Object}:
   *      Returns count of products
   */
  static async trace_getTotalProductOnChain(company_id)

  /**
   * Description: get product trace count per day
   * @access     public
   * @param {string} company_id company id
   * @returns {Object}:
   *      Returns count of trace
   */
  static async trace_getProductPerDay(company_id)

  /**
   * Description: list product past trace record measured by month
   * @access     public
   * @param {string} company_id company id
   * @returns {Object}:
   *      Returns list of trace ordered by month and year
   */
  static async trace_listProductPast(company_id)

  /**
   * Description: get customer scanning record per day
   * @access     public
   * @param {string} company_id company id
   * @returns {Object}:
   *      Returns list of scanning record
   */
  static async trace_getScanPerDay(company_id)

  /**
   * Description: get customer scanning record by month and year
   * @access     public
   * @param {string} company_id company id
   * @returns {Object}:
   *      Returns list of scanning record ordered by month and year
   */
  static async trace_listScanPast(company_id)

  /**
   * Description: get customer scanning record per customer
   * @access     public
   * @param {string} company_id company id
   * @returns {Object}:
   *      Returns list of scanning record count
   */
  static async trace_scanPerCus(company_id) 

  /**
   * Description: get customer scanning record per customer for last month
   * @access     public
   * @param {string} company_id company id
   * @returns {Object}:
   *      Returns list of scanning record count
   */
  static async trace_scanPerCusPrev(company_id)

  /**
   * Description: get total scanning count
   * @access     public
   * @param {string} company_id company id
   * @returns {Object}:
   *      Returns total scanning count
   */
  static async trace_getTotalCustomerScanned(company_id) 

  /**
   * Description: get types of trace of a good
   * @access     public
   * @param {string} company_id company id
   * @param {string} good_id id of the good
   * @param {string} country country to look at
   * @returns {Object}:
   *      Returns types of trace of a good with counts
   */
  static async trace_getGoodTraceType(company_id, good_id, country) 

  /**
   * Description: get trace data of a good monthly
   * @access     public
   * @param {string} good_id id of the good
   * @param {string} country country to look at
   * @returns {Object}:
   *      Returns trace data of a good monthly
   */
  static async trace_getGoodTraceMonth(good_id, country)

  /**
   * Description: get trace data of a good according to the state
   * @access     public
   * @param {string} good_id id of the good
   * @param {string} state country to look at
   * @returns {Object}:
   *      Returns trace data of a good according to the state
   */
  static async trace_getGoodTraceState(good_id, state) 

  /**
   * Description: get trace data of a good according to the country
   * @access     public
   * @param {string} good_id id of the good
   * @param {string} country country to look at
   * @returns {Object}:
   *      Returns trace data of a good according to the country
   */
  static async trace_getTraceByCountry(country, good_id)

  /**
   * Description: get trace data of goods
   * @access     public
   * @param {string} company_id id of the company_id
   * @returns {Object}:
   *      Returns trace data of goods
   */
  static async trace_getTraceByGood(company_id) 

  /**
   * Description: get user distribution in states
   * @access     public
   * @param {string} company_id id of the company_id
   * @returns {Object}:
   *      Returns users distribution in states
   */
  static async trace_getUseInState(company_id) 

  /**
   * Description: get user distribution in countries
   * @access     public
   * @param {string} company_id id of the company_id
   * @param {string} country country to get
   * @returns {Object}:
   *      Returns users distribution in countries
   */
  static async trace_getDistributionByCountry(company_id, country)

  /**
   * Description: get user distribution in cities
   * @access     public
   * @param {string} company_id id of the company_id
   * @returns {Object}:
   *      Returns users distribution in cities
   */
  static async trace_getUseInCity(company_id)
}