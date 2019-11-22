export default class Verification {
  /**
   * Description: edit company profile
   * @access     public
   * @param {string} company_id id of the company_id
   * @param {string} information_status status of company verification
   * @returns {Object}:
   *      Returns status of the update
   */
  static async verification_profileEdit(company_id, information_status)

  /**
   * Description: submit verification documents
   * @access     public
   * @param {string} company_id id of the company_id
   * @param {string} description description of the company
   * @param {string} name company name
   * @param {string} type type of the company
   * @param {string} country country of the company
   * @param {string} certificate certificate document
   * @param {string} asic asic document
   * @param {string} supportive supportive files
   * @param {string} legal_country country of legal representative
   * @param {string} legal_id_type id type of legal representative
   * @param {string} legal_national_id_f front side of the id of the legal representative
   * @param {string} legal_national_id_b back side of the id
   * @param {string} legal_national_passport passport document of the legal representative
   * @param {string} ubo ubo document
   * @param {string} auth_person_type type of authorised person
   * @param {string} auth_person_country country of authorised person
   * @param {string} auth_id_type type of id
   * @param {string} national_id_f front side of id
   * @param {string} national_id_b back side of id
   * @param {string} auth_passport passport document
   * @param {string} auth_letter letter of the authorised person
   * @param {string} connection connection list
   * @param {string} legal_national_name nationnality of the legal representative
   * @param {string} legal_national_mail mail address
   * @param {string} auth_name authorized person name
   * @param {string} auth_mail mail address of authorized person
   * @returns {Object}:
   *      Returns status of the update
   */
  static async verification_submit(company_id, description, name, type, country, certificate, asic, supportive, legal_country, legal_id_type, legal_national_id_f, legal_national_id_b, legal_national_passport, ubo, auth_person_type, auth_person_country, auth_id_type, national_id_f, national_id_b, auth_passport, auth_letter, connection, legal_national_name, legal_national_mail, auth_name, auth_mail) 
}