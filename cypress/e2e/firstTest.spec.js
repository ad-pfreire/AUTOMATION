
import { mockusers } from "./cypress/usersinfo";

describe('Job Link Microsite Automation Test', () => {

  it('Log In', () => {
    cy.log('Yaay we logged in');
  });


  it('Account Registration', () => {

    cy.visit('https://microsite-dev6.automateddecision.com/login');

    cy.get('[class="btn btn-primary-outline card-form-btn secondary-btn"]').click();

    cy.get('[placeholder="Enter your name"]').type(mockusers.userOne.firstName);
    cy.get('[placeholder="Enter your last name"]').type(mockusers.userOne.lastName);
    cy.get('[placeholder="Enter your email address"]').type(mockusers.userOne.emailAddress);
    cy.get('[placeholder="Re-enter your email address"]').type(mockusers.userOne.confirmEmail);
    cy.get('[placeholder="Enter your phone number"]').type(mockusers.userOne.confirmEmail);
    cy.get('[placeholder="Enter your username"]').type(mockusers.userOne.userName);
    cy.get('[placeholder="Enter a password"]').type(mockusers.userOne.password);
    cy.get('[placeholder="Re-enter password"]').type(mockusers.userOne.passwordConf);
    cy.get('[name="terms"]').click();
    cy.get('[class="btn btn-primary card-form-btn primary-btn register-btn"]').click();
    //cy.url().should('include', 'https://microsite-dev6.automateddecision.com/settings#/subscription') // NO SIRVE ESTO

  });



  it('Verify Case insensitivity', () => {

    cy.loginToApplication();

    //BY EMAIL:
    cy.get('[class="dropdown-toggle"]').click();
    cy.get('[href="/logout"]').click();

    cy.get('[placeholder="Enter your username or email address"]').type('PAUL.FREIRE+CY@CRIFA.COM');
    cy.get('[placeholder="Enter your password"]').type('123456');
    cy.get('form').submit();

    cy.get('[class="dropdown-toggle"]').click();
    cy.get('[href="/logout"]').click();

    //BY USERNAME: 
    cy.get('[placeholder="Enter your username or email address"]').type('paulfreirecy'); // I NEED HERE A CY.WAIT!
    cy.get('[placeholder="Enter your password"]').type('123456');
    cy.get('form').submit();

    cy.get('[class="dropdown-toggle"]').click();
    cy.get('[href="/logout"]').click();

    cy.get('[placeholder="Enter your username or email address"]').type('PAULFREIRECY');
    cy.get('[placeholder="Enter your password"]').type('123456');
    cy.get('form').submit();

    cy.get('[class="dropdown-toggle"]').click();
    cy.get('[href="/logout"]').click();
  });



  it('Account Duplication Check (E-MAIL)', () => {

    cy.visit('https://microsite-dev6.automateddecision.com/login');

    cy.get('[class="btn btn-primary-outline card-form-btn secondary-btn"]').click();
    cy.get('[placeholder="Enter your name"]').type(mockusers.userOne.firstName);
    cy.get('[placeholder="Enter your last name"]').type(mockusers.userOne.lastName);
    cy.get('[placeholder="Enter your email address"]').type(mockusers.userOne.emailAddress);
    cy.get('[placeholder="Re-enter your email address"]').type(mockusers.userOne.confirmEmail);
    cy.get('[placeholder="Enter your phone number"]').type(mockusers.userOne.phoneNumber);
    cy.get('[placeholder="Enter your username"]').type(mockusers.userOne.userName);
    cy.get('[placeholder="Enter a password"]').type(mockusers.userOne.password);
    cy.get('[placeholder="Re-enter password"]').type(mockusers.userOne.passwordConf);
    cy.get('[name="terms"]').click();
    cy.get('[class="btn btn-primary card-form-btn primary-btn register-btn"]').click();

    cy.contains('The email has already been taken.')
      .should('be.visible');

  })

  it('Account Duplication Check (USERNAME)', () => {

    cy.visit('https://microsite-dev6.automateddecision.com/login');

    cy.get('[class="btn btn-primary-outline card-form-btn secondary-btn"]').click();
    cy.get('[placeholder="Enter your name"]').type(mockusers.userOne.firstName);
    cy.get('[placeholder="Enter your last name"]').type(mockusers.userOne.lastName);
    cy.get('[placeholder="Enter your email address"]').type(mockusers.userOne.emailAddress);
    cy.get('[placeholder="Re-enter your email address"]').type(mockusers.userOne.confirmEmail);
    cy.get('[placeholder="Enter your phone number"]').type(mockusers.userOne.phoneNumber);
    cy.get('[placeholder="Enter your username"]').type(mockusers.userOne.userName);
    cy.get('[placeholder="Enter a password"]').type(mockusers.userOne.password);
    cy.get('[placeholder="Re-enter password"]').type(mockusers.userOne.passwordConf);
    cy.get('[name="terms"]').click();
    cy.get('[class="btn btn-primary card-form-btn primary-btn register-btn"]').click();

    cy.contains('The username has already been taken.')
      .should('be.visible');

  })

  it('E-mail Mismatch Error Message Validation', () => {
    cy.visit('https://microsite-dev6.automateddecision.com/login');

    cy.get('[class="btn btn-primary-outline card-form-btn secondary-btn"]').click();
    cy.get('[placeholder="Enter your name"]').type(mockusers.userOne.firstName);
    cy.get('[placeholder="Enter your last name"]').type(mockusers.userOne.lastName);
    cy.get('[placeholder="Enter your email address"]').type(mockusers.userOne.emailAddress);
    cy.get('[placeholder="Re-enter your email address"]').type(mockusers.userOne.confirmEmail);
    cy.get('[placeholder="Enter your phone number"]').type(mockusers.userOne.phoneNumber);
    cy.get('[placeholder="Enter your username"]').type(mockusers.userOne.userName);
    cy.get('[placeholder="Enter a password"]').type(mockusers.userOne.password);
    cy.get('[placeholder="Re-enter password"]').type(mockusers.userOne.passwordConf);
    cy.get('[name="terms"]').click();
    cy.get('[class="btn btn-primary card-form-btn primary-btn register-btn"]').click();

    cy.contains('The email confirmation does not match.').should('be.visible');

  })

  it('(NEW) Password Mismatch Error Message Validation', () => {
    cy.visit('https://microsite-dev6.automateddecision.com/login');
    cy.get('[class="btn btn-primary-outline card-form-btn secondary-btn"]').click();
    cy.get('[placeholder="Enter your name"]').type(mockusers.userOne.firstName);
    cy.get('[placeholder="Enter your last name"]').type(mockusers.userOne.lastName);
    cy.get('[placeholder="Enter your email address"]').type(mockusers.userOne.emailAddress);
    cy.get('[placeholder="Re-enter your email address"]').type(mockusers.userOne.confirmEmail);
    cy.get('[placeholder="Enter your phone number"]').type(mockusers.userOne.phoneNumber);
    cy.get('[placeholder="Enter your username"]').type(mockusers.userOne.userName);
    cy.get('[placeholder="Enter a password"]').type(mockusers.userOne.password);
    cy.get('[placeholder="Re-enter password"]').type(mockusers.userOne.passwordConf);
    cy.get('[name="terms"]').click();
    cy.get('[class="btn btn-primary card-form-btn primary-btn register-btn"]').click();

    cy.contains('The password confirmation does not match.').should('be.visible');

  })


  it('(TBD) Contact Information Update', () => {
    cy.visit('https://microsite-dev6.automateddecision.com/login');
    cy.get('[class="btn btn-primary-outline card-form-btn secondary-btn"]').click()

  })



  it('(TBD) Member Invitation Validation', () => {
    //TBD
  })



})


// como eliminar la cuenta? (ojo no se puede desde el microsite)(ASK DEVs FOR HELP for a script to delete the accounts.)


// crear un archivio de JSON 
// tener varios usuarios , por cada usuario va ser un objeto con sus propiedades.
// llamo aqui al archivo JSON 

// Expresion regular test casess.  (TO DO) EL FORMA\TO DEL EMAIL. 
// TEST CASES EL TIPO DE DATO. 
// EXPONENCIAL TIPO DE DA



