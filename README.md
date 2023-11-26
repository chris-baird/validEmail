# Valid Email Helper Function

This helper function checks if a given email is valid.

## Usage

const validEmail = require("./index.js");

Test if an email is valid

const email = "test@example.com";\
const isValid = validEmail(email);\
console.log(isValid); // Output: true


## Parameters

- \`email\` (string): The email to be validated.

## Return Value

- \`true\` if the email is valid.
- \`false\` otherwise.

## Example

const validEmail = require("./index.js");

const email1 = "test@example.com";\
const isValid1 = validEmail(email1);\
console.log(isValid1); // Output: true

const email2 = "invalid.email";\
const isValid2 = validEmail(email2);\
console.log(isValid2); // Output: false


## Contributing

Feel free to contribute to this project by submitting a pull request or creating an issue.

## License

This project is licensed under the [ISC License](LICENSE).