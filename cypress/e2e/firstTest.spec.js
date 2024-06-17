
describe('Job Link Microsite Automation Test', () => {

  // beforeEach('login to application', () => {  // only if I use it on every TC.
  // cy.loginToApplication()
  // })

  it('Log In', () => {
    cy.log('Yaay we logged in');
  });


  it('Account Registration', () => {

    cy.visit('https://microsite-dev6.automateddecision.com/login');

    cy.get('[class="btn btn-primary-outline card-form-btn secondary-btn"]').click();

    cy.get('[placeholder="Enter your name"]').type('Paulcy');
    cy.get('[placeholder="Enter your last name"]').type('Freirecy');
    cy.get('[placeholder="Enter your email address"]').type('paul.freire+cy@crifa.com');
    cy.get('[placeholder="Re-enter your email address"]').type('paul.freire+cy@crifa.com');
    cy.get('[placeholder="Enter your phone number"]').type('1234567890');
    cy.get('[placeholder="Enter your username"]').type('paulfreirecy');
    cy.get('[placeholder="Enter a password"]').type('123456');
    cy.get('[placeholder="Re-enter password"]').type('123456');
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
    cy.get('[placeholder="Enter your name"]').type('Paul');
    cy.get('[placeholder="Enter your last name"]').type('Freire');
    cy.get('[placeholder="Enter your email address"]').type('paul.freire+cy@crifa.com');
    cy.get('[placeholder="Re-enter your email address"]').type('paul.freire+cy@crifa.com');
    cy.get('[placeholder="Enter your phone number"]').type('1234567890');
    cy.get('[placeholder="Enter your username"]').type('paulfreireEMAILDUP');
    cy.get('[placeholder="Enter a password"]').type('123456');
    cy.get('[placeholder="Re-enter password"]').type('123456');
    cy.get('[name="terms"]').click();
    cy.get('[class="btn btn-primary card-form-btn primary-btn register-btn"]').click();

    cy.contains('The email has already been taken.')
      .should('be.visible');

  })

  it('Account Duplication Check (USERNAME)', () => {

    cy.visit('https://microsite-dev6.automateddecision.com/login');

    cy.get('[class="btn btn-primary-outline card-form-btn secondary-btn"]').click();
    cy.get('[placeholder="Enter your name"]').type('Paul');
    cy.get('[placeholder="Enter your last name"]').type('Freire');
    cy.get('[placeholder="Enter your email address"]').type('paul.freire+cy@crifa.com');
    cy.get('[placeholder="Re-enter your email address"]').type('paul.freire+cy@crifa.com');
    cy.get('[placeholder="Enter your phone number"]').type('1234567890');
    cy.get('[placeholder="Enter your username"]').type('paulfreirecy');
    cy.get('[placeholder="Enter a password"]').type('123456');
    cy.get('[placeholder="Re-enter password"]').type('123456');
    cy.get('[name="terms"]').click();
    cy.get('[class="btn btn-primary card-form-btn primary-btn register-btn"]').click();

    cy.contains('The username has already been taken.')
      .should('be.visible');

  })

  it('E-mail Mismatch Error Message Validation', () => {
    cy.visit('https://microsite-dev6.automateddecision.com/login');

    cy.get('[class="btn btn-primary-outline card-form-btn secondary-btn"]').click();
    cy.get('[placeholder="Enter your name"]').type('Paul');
    cy.get('[placeholder="Enter your last name"]').type('Freire');
    cy.get('[placeholder="Enter your email address"]').type('paul.freire+cy2@crifa.com');
    cy.get('[placeholder="Re-enter your email address"]').type('paul.freire+cy3@crifa.com');
    cy.get('[placeholder="Enter your phone number"]').type('1234567890');
    cy.get('[placeholder="Enter your username"]').type('paulfreirecy2');
    cy.get('[placeholder="Enter a password"]').type('123456');
    cy.get('[placeholder="Re-enter password"]').type('123456');
    cy.get('[name="terms"]').click();
    cy.get('[class="btn btn-primary card-form-btn primary-btn register-btn"]').click();

    cy.contains('The email confirmation does not match.')
      .should('be.visible');

  })

  it('(TBD)Password Mismatch Error Message Validation', () => {
    //TBD
  })

  it('(TBD) Contact Information Update', () => {
    //TBD
  })

  it('(TBD) Member Invitation Validation', () => {
    //TBD
  })



})

// algun bucle para crear cuentas diferentes cada vez? (NO!) y luego borrar? 
// como eliminar la cuenta? (ojo no se puede desde el microsite)(ASK DEVs FOR HELP for a script to delete the accounts.)



