describe("User can log in", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "**/auth/**",
      response: "fixture:user_login.json"
    });
    cy.route({
      method: "GET",
      url: "**/auth/**",
      response: "fixture:user_login.json"
    });
    cy.visit("/");
  });

  it("show a login button and form", () => {
    cy.get("#login-button")
      .contains("Login")
      .click();
    cy.get("#email").type("user@mail.com");
    cy.get("#password").type("password");
    cy.get("#submit-login")
      .contains("Submit")
      .click();
    cy.get("#login-message").should(
      "contain",
      "Welcome back Awesome Possumsson"
    );
    cy.get("#close-login-form")
      .contains("Close")
      .click();
    cy.get("#email").should("not.exist");
    //add test that unauthenticated user can not see new trip and after close they can
    //add test to logout and that new trip disappears
  });
});

describe("User can not log in", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "**/auth/**",
      status: "401",
      response: {
        errors: ["Invalid login credentials. Please try again."],
        success: false
      }
    });
    cy.visit("/");
  });

  it("with invalid credentials", () => {
    cy.get("#login-button")
      .contains("Login")
      .click();
    cy.get("#email").type("wrongmail.com");
    cy.get("#password").type("wrong");
    cy.get("#submit-login")
      .contains("Submit")
      .click();
    cy.get("#login-message").should(
      "contain",
      "Invalid login credentials. Please try again."
    );
    cy.get("#close-login-form")
      .contains("Close")
      .click();
    cy.get("#login-form").should("not.exist");
  });
});
