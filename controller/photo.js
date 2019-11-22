export default class Photo {

	/**
	 * Description: update profile of a user
	 * @access     public
	 * @param {string} uid id of the user
	 * @param {string} gender
	 * @param {string} dob date of birth
	 * @param {string} nickName nick name
	 * @returns {Array}:
	 *      Returns status of update
	 */
	static async photo_updateMetaData(uid, gender, dob, nickName)

	/**
	 * Description: get blockchain address of the user
	 * @access     public
	 * @param {string} uid id of the user
	 * @returns {Array}:
	 *      Returns list of address
	 */
	static async photo_getAllAddress(uid)

	/**
	 * Description: reset user's private key
	 * @access     public
	 * @param {string} phone phone number of the user
	 * @returns {Array}:
	 *      Returns status of reset
	 */
	static async photo_resetPK(phone)

	/**
	 * Description: find user's private key
	 * @access     public
	 * @param {string} phone phone number of the user
	 * @returns {Array}:
	 *      Returns status of process
	 */
	static async photo_lostPK(phone)

	/**
	 * Description: change permission of the photo
	 * @access     public
	 * @param {string} object photo name
	 * @param {string} uid user id
	 * @param {string} request permissions to set
	 * @returns {Array}:
	 *      Returns status of changes
	 */
	static async photo_changePermission(object, uid, request)

	/**
	 * Description: write feedback
	 * @access     public
	 * @param {string} feedback feedback content
	 * @param {string} uid user id
	 * @param {string} ip ip of the user
	 * @param {string} rate rate of the feedback
	 * @returns {Array}:
	 *      Returns status of changes
	 */
	static async photo_provideFeedback(feedback, uid, ip, rate)

	/**
	 * Description: verify new registered mobile number
	 * @access     public
	 * @param {string} address blockchain address of the user
	 * @param {string} code code that sent to the user's phone
	 * @returns {Array}:
	 *      Returns status of changes
	 */
	static async photo_newMobileVerify(address, code)

	/**
	 * Description: register new phone
	 * @access     public
	 * @param {string} address blockchain address of the user
	 * @param {string} mobile phone number of the user
	 * @returns {Array}:
	 *      Returns status of sending code
	 */
	static async photo_NewRegister(address, mobile)

	/**
	 * Description: register new photo
	 * @access     public
	 * @param {string} address blockchain address of the user
	 * @param {string} account account of the user
	 * @returns {Array}:
	 *      Returns status of photo register
	 */
	static photo_Register(address, account)

	/**
	 * Description: get information regarding the photo
	 * @access     public
	 * @param {string} photoHash hash of the photo
	 * @returns {Array}:
	 *      Returns list of information
	 */
	static async photo_info(photoHash)

	/**
	 * Description: set password
	 * @access     public
	 * @param {string} mobile mobile number of the user
	 * @param {string} code code sent to the mobile number
	 * @param {string} newPWD new password to set on
	 * @returns {Array}:
	 *      Returns status of the update
	 */
	static async photo_newSetPWD(mobile, code, newPWD)

	/**
	 * Description: process for forget password
	 * @access     public
	 * @param {string} mobile mobile number of the user
	 * @returns {Array}:
	 *      Returns status of sending code to the number
	 */
	static async photo_forgetPWD(mobile)

	/**
	 * Description: process for forget password
	 * @access     public
	 * @param {string} categories categories of the report
	 * @param {string} photoAddress photo address
	 * @param {string} other other information to be upploaded
	 * @returns {Array}:
	 *      Returns list of information of email service
	 */
	static photo_report(categories, photoAddress, other)

	/**
	 * Description: get share link for the photo
	 * @access     public
	 * @param {string} photoHash categories of the report
	 * @param {string} lat photo address
	 * @param {string} lon other information to be upploaded
	 * @param {string} photoID id of the photo
	 * @param {string} username username
	 * @param {string} name name of the photo
	 * @param {string} date date of the photo that been taken
	 * @param {string} gasUsed used gas for blockchain
	 * @param {string} block block number
	 * @param {string} txHash transaction hash
	 * @param {string} smartContract smart contract that  been triggered
	 * @param {string} deviceType type of device
	 * @param {string} blockHash hash of block
	 * @param {string} photoAddress address of the photo
	 * @returns {Array}:
	 *      Returns status of the process
	 */
	static async photo_Share(photoHash, lat, lon, photoID, username, name, date, gasUsed, block, txHash, smartContract, deviceType, blockHash, photoAddress) 

	/**
	 * Description: daily reward for UPhoto users
	 * @access     public
	 * @param {string} address blockchain address
	 * @param {string} phone phone number
	 * @returns {Array}:
	 *      Returns status of the process
	 */
	static photo_DailyReward(address, phone) 

	/**
	 * Description: send code to the user
	 * @access     public
	 * @param {string} address blockchain address
	 * @param {string} phone phone number
	 * @returns {Array}:
	 *      Returns status of the process
	 */
	static photo_sendCode(address, phone) 

	/**
	 * Description: send code to the user
	 * @access     public
	 * @param {string} address blockchain address
	 * @param {string} phone phone number
	 * @returns {Array}:
	 *      Returns status of the process
	 */
	static photo_MobileVerify(address, phone)
}