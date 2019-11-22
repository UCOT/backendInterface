import TagModel from "../model/TagModel";
import BatchModel from "../model/BatchIdModel"
var sha256 = require("js-sha256");
var uniqid = require("uniqid");
var AlphaID = require("alpha-id");

export default class Tag {
  /**
   * Description: check if the combination of company and batch id are identical
   * @access     public
   * @param {string} company_id id of company
   * @param {string} batch_id id of batch
   * @returns {Array}:
   *      Returns list of batches have same values
   */
  static async tag_checkSameBatch(company_id, batch_id) 

  /**
   * Description: insert the tag
   * @access     public
   * @param {Array} tag_info information of the tag
   * @param {string} batch_num batch number
   * @param {string} date_manufactured date of manufacture
   * @param {string} date_expiry expiry date
   * @param {string} goodsId goods id
   * @param {string} company_id id of the company
   * @param {string} factory_id id of the factory
   * @param {string} receiver receiver name
   * @param {string} address address of the receiver
   * @param {string} email email address
   * @param {string} phone phone number
   * @param {string} orderID order ID
   * @returns {Array}:
   *      Returns result of insertion
   */
  static async tag_InsertTag(tag_info, batch_num, date_manufactured, date_expiry, goodsId, company_id, factory_id, receiver, address, email, phone, orderID)


  /**
   * Description: get all the tags of the company
   * @access     public
   * @param {Array} company_id company id
   * @returns {Array}:
   *      Returns result of query
   */
  static async tag_getAll(company_id) 

  /**
   * Description: get csv format of data
   * @access     public
   * @param {Array} batch_num batch id
   * @returns {Array}:
   *      Returns result of query
   */
  static async tag_getCsv(batch_num)

  /**
   * Description: set label of the tag
   * @access     public
   * @param {Array} label label
   * @param {string} batch_num batch id
   * @param {string} company_id id of the company
   * @returns {Array}:
   *      Returns result of query
   */
  static async tag_setLabel(label, batch_num, company_id) 

  /**
   * Description: hide tag
   * @access     public
   * @param {Array} hide hide status of the tag
   * @param {string} batch_num batch id
   * @param {string} company_id id of the company
   * @returns {Array}:
   *      Returns result of query
   */
  static async tag_hideTag(hide, batch_num, company_id) 
}