/// <reference types="cypress" />

describe('Registro de Usuario', () => {
  it('Debe completar todos los datos y registrar la cuenta', () => {
    // Página inicial
    cy.visit('https://automationexercise.com/');

    // Primer formulario: registro inicial
    cy.contains('Signup / Login').click();

    const email = `testuser${Date.now()}@example.com`;

    // Rellenar nombre y email
    cy.get('input[data-qa="signup-name"]', { timeout: 15000 }).should('be.visible').type('Test User');
    cy.get('input[data-qa="signup-email"]', { timeout: 15000 }).should('be.visible').type(email);
    cy.get('button[data-qa="signup-button"]').click();

    // La prueba continúa automáticamente sin pausa

    // Segunda página: completar datos adicionales
    cy.get('input[data-qa="name"]', { timeout: 15000 }).should('be.visible').type('Juan');
    cy.get('input[data-qa="email"]', { timeout: 15000 }).should('be.visible').and('have.value', email);

    // Seleccionar título
    cy.get('#id_gender1', { timeout: 15000 }).should('be.visible').check({force:true});
    // Para Sra., usar: cy.get('#id_gender2').check({force:true})

    // Contraseña
    cy.get('input[data-qa="password"]').should('be.visible').type('Test1234');

    // Fecha de nacimiento
    cy.get('select[data-qa="days"]').should('be.visible').select('10');
    cy.get('select[data-qa="months"]').should('be.visible').select('May');
    cy.get('select[data-qa="years"]').should('be.visible').select('1990');

    // Campos dirección
    cy.get('input[data-qa="first_name"]').should('be.visible').type('Juan');
    cy.get('input[data-qa="last_name"]').should('be.visible').type('Perez');
    cy.get('input[data-qa="company"]').should('be.visible').type('MiEmpresa');
    cy.get('input[data-qa="address"]').should('be.visible').type('Calle Falsa 123');
    cy.get('select[data-qa="country"]').should('be.visible').select('Canada');
    cy.get('input[data-qa="state"]').should('be.visible').type('California');
    cy.get('input[data-qa="city"]').should('be.visible').type('Los Angeles');
    cy.get('input[data-qa="zipcode"]').should('be.visible').type('90001');
    cy.get('input[data-qa="mobile_number"]').should('be.visible').type('1234567890');

    // Crear cuenta
    cy.get('button[data-qa="create-account"]').should('be.visible').click();

    // Verifica mensaje de cuenta creada en la página
    cy.get('[data-qa="account-created"]', { timeout: 25000 }).should('contain.text', 'Account Created!');
  });
});
