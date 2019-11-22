export default class StaffIndustrial {
    /**
     * Description: add photos to multiple workloads
     * @access     public
     * @param {Array} workloads workloads to be updated
     * @param {Array} photo_list photos for the workloads
     * @returns {Array}:
     *      Returns added list
     */
    static async addWorkloadPhotos(workloads, photo_list) 

    /**
     * Description: get report list of staff
     * @access     public
     * @param {string} staff_id id of staff, is the sender
     * @returns {Array}:
     *      Returns report list
     */
    static async getReportList(staff_id)

    /**
     * Description: store payload data into database
     * @access     public
     * @param {Array} productList 
     * @param {Array} photoList
     * @param {integer}  packageId
     * @returns {String}:
     *      Returns response message
     */
    static async sendPayload(productList, productList, packageID)

    /**
     * Description: Add report to alarm tables
     * @access     public
     * @param {string} staff_id id of staff, is the sender
     * @param {string} company_id id of company, is the receiver
     * @param {string} label label or topic
     * @param {string} batch_id batch_number field
     * @param {string} longitude lon field
     * @param {string} latitude lat field
     * @param {string} detail detail of the report
     * @param {string} pid optional product id 
     * @param {Array} photo_list optional photo list
     * @param {string} product_name optional product name
     * @returns {Array}:
     *      Returns inserted list
     */
    static async addReport(staff_id, company_id, label, batch_id, longitude, latitude, detail, pid, photo_list, product_name) 

    /**
     * Description: Get banners for companies
     * @access     public
     * @returns {Array}:
     *      Returns banner list
     */
    static async getCompanyBanners()

    /**
     * Description: Add more information to multiple workloads
     * @access     public
     * @param {string} address Address of next distributor
     * @param {string} distributor Name of next Distributor
     * @param {string} contact Contact detail of next distributor
     * @param {string} staff_id Staff id
     * @param {Array} workloads Workloads to be updated
     * @returns {Array}:
     *      Returns product info
     */
    static async addInfoMulti(address, distributor, contact, staff_id, workloads) 

    /**
     * Description: Get staff workloads and related meta values
     * @access     public
     * @param {string} staff_id Staff id
     * @returns {Object}:
     *      Returns workload list
     */
    static async getAllWorksheet(staff_id) 

    /**
     * Description: Get product name, product id and metadatas
     * @access     public
     * @param {string} pid product id
     * @returns {Object}:
     *      Returns product info
     */
    static async getProduct(pid) 
}