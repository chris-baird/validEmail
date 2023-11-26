const validEmail = require("./index.js");

describe("validEmail", () => {
  // Test case: Returns false if email is undefined
  test("Returns false if email is undefined", () => {
    // Call validEmail without an email parameter
    // and expect it to return false
    expect(validEmail()).toBe(false);
  })

  // Test case: Returns false if email is not a string
  test("Returns false if email is not a string", () => {
    // Call validEmail with a non-string email parameter (1)
    // and expect it to return false
    expect(validEmail(1)).toBe(false);
  })

  // Test case: Returns false if email is empty
  test("Returns false if email is empty", () => {
    // Call validEmail with an empty string as the email parameter
    // and expect it to return false
    expect(validEmail("")).toBe(false);
  })

  // Test case: Returns false if email does not contain @
  test("Returns false if email does not contain @", () => {
    // Call validEmail with an email parameter that does not contain the @ symbol
    // and expect it to return false
    expect(validEmail("test")).toBe(false);
  })
})