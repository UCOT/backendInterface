export default class Product {

    /**
	 * Description: change like status
	 * @access     public
	 * @param {string} uid user id
	 * @param {string} pid product id
     * @param {string} status status
	 * @returns {Array}:
	 *      Returns result of update
	 */
    static async product_changeLikeStatus(uid, pid, status) 

    /**
	 * Description: get likes of a user for a product
	 * @access     public
	 * @param {string} uid user id
	 * @param {string} pid product id
	 * @returns {Array}:
	 *      Returns amount of likes of the product and user's like status
	 */
    static async product_getLikes(uid, pid) 

    /**
	 * Description: get comments and likes of a product
	 * @access     public
	 * @param {string} uid user id
	 * @param {string} pid product id
	 * @returns {Array}:
	 *      Returns likes and comments of a product
	 */
    static async product_getComments(uid, pid) 

    /**
	 * Description: write comments of a product
	 * @access     public
	 * @param {string} uid user id
	 * @param {string} pid product id
     * @param {string} ip ip of the user
     * @param {string} content content of the comment
	 * @returns {Array}:
	 *      Returns insertion result
	 */
    static async product_writeComments(uid, pid, ip, content)

    /**
	 * Description: get product and attributes of it
	 * @access     public
	 * @param {string} company_id id of the company
	 * @returns {Array}:
	 *      Returns list of products
	 */
    static async product_productAndAttributes(company_id) 

    /**
	 * Description: update attributes of the product
	 * @access     public
	 * @param {string} attribute attribute name
     * @param {string} value value of the attribute
	 * @returns {Array}:
	 *      Returns status of the update
	 */
    static async product_updateAttribute(attribute, value) 

    /**
	 * Description: insert new product
	 * @access     public
	 * @param {string} post_name product name
     * @param {string} guid customized product id
     * @param {Array} attribute attribute list
     * @param {string} company_id id of the company
	 * @returns {Array}:
	 *      Returns insertion result
	 */
    static async product_insertProduct(post_name, guid, attribute, company_id) 

    /**
	 * Description: get product template list
	 * @access     public
	 * @returns {Array}:
	 *      Returns list of the templates
	 */
    static async product_getTemplatesList() 

    /**
	 * Description: get specific template
	 * @access     public
     * @param {string} template_id id of the template
	 * @returns {Array}:
	 *      Returns list of the templates
	 */
    static async product_getTemplate(template_id) 

    /**
	 * Description: get unit number of the product
	 * @access     public
     * @param {string} product_id product id
	 * @returns {Array}:
	 *      Returns list of the units
	 */
    static async product_getUnit(product_id) 

    /**
	 * Description: get attributes of the product
	 * @access     public
     * @param {string} product_id product id
	 * @returns {Array}:
	 *      Returns list of the attributes
	 */
    static async product_getAttributes(product_id) 
}