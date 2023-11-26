/**
 * Checks if the given email is valid.
 *
 * @param {string} email - The email to be validated.
 * @returns {boolean} - true if the email is valid, false otherwise.
 */
function validEmail(email) {
  // Check if the email parameter is not a string
  if (typeof email !== "string") return false;

  // Regular expression pattern to validate email format
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // Test if the email matches the regular expression pattern
  return emailRegex.test(email);
}

module.exports = validEmail