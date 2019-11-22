/**
 * Description: General token issue for IoT services
 * @access     public
 * @returns {Object}:
 *      Returns objects that contains the token
 */
export async function issueIotToken()

/**
 * Description: General token issue for Uphoto services
 * @access     public
 * @param {string} address blockchain address for users
 * @param {string} uid user id
 * @returns {Object}:
 *      Returns objects that contains the token
 */
export async function issueUphotoToken(address, uid)

/**
 * Description: General token issue for UTMS and Utracer
 * @access     public
 * @param {string} code random code for staff to login
 * @param {string} staff_id staff id
 * @returns {string}:
 *      Returns token with 30 valid days
 */
export async function issueStaffToken(code, staff_id, company_id)

/**
 * Description: General token issue for UTMS and Utracer
 * @access     public
 * @param {string} company_id i.e. manufacturer id
 * @param {string} uid user id
 * @returns {string}:
 *      Returns token
 */
export async function issueToken(company_id, uid)

/**
 * Description: Generate token for inviting others into the UTMS system
 * @access     public
 * @param {string} company_id i.e. manufacturer id
 * @param {string} time time when user applied
 * @returns {string}:
 *      Returns token
 */
export async function issueInvitationToken(company_id, time)

/**
 * Description: Check given token is valid or not, mainly for middle ware of UTMS and UTracer related controllers
 * @access     public
 * @param {Object} req Request send to api
 * @param {Object} res Result send to user
 * @param {Function} next Function to pass to next middleware
 */
export async function withAuth(req, res, next)

/**
 * Description: Check given token is valid or not, mainly for middle ware of UTracer Industrial controllers
 * @access     public
 * @param {Object} req Request send to api
 * @param {Object} res Result send to user
 * @param {Function} next Function to pass to next middleware
 */
export async function withStaffAuth(req, res, next)

/**
 * Description: Check given token is valid or not, mainly for middle ware of Uphoto controllers
 * @access     public
 * @param {Object} req Request send to api
 * @param {Object} res Result send to user
 * @param {Function} next Function to pass to next middleware
 */
export async function photoAuth(req, res, next)

/**
 * Description: Check given token is valid or not, mainly for middle ware of IoT controllers
 * @access     public
 * @param {Object} req Request send to api
 * @param {Object} res Result send to user
 * @param {Function} next Function to pass to next middleware
 */
export async function iotAuth(req, res, next)