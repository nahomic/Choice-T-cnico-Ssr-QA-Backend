describe('Pruebas de API', () => {
  const baseUrl = '/';

  it('GET /system/ping - verificar estado del sistema', () => {
    const startTime = performance.now(); 
    cy.request({
      method: 'GET',
      url: '/system/ping',
      timeout: 3000,
      failOnStatusCode: false 
    }).then((response) => {
      const endTime = performance.now(); 
      const responseTime = endTime - startTime; 

      // Validar el código de estado
      expect(response.status).to.eq(200); 
      // Validar que el tiempo de respuesta sea menor a 3 segundos
      expect(responseTime).to.be.lessThan(3000);
      // Validar el header
      expect(response.headers).to.have.property('content-type').and.include('application/json');
      // Validar cuerpo
      expect(response.body).to.have.property('ok');
      expect(response.body).to.have.property('date');
    });
  });

  it('GET /system/version - verificar versión del sistema', () => {
    const startTime = performance.now(); 
    cy.request({
      method: 'GET',
      url: '/system/version',
      timeout: 3000,
      failOnStatusCode: false
    }).then((response) => {
      const endTime = performance.now(); 
      const responseTime = endTime - startTime; 

      // Validar código de respuesta
      expect(response.status).to.eq(200);
      // Validar que el tiempo sea menor a 3 segundos
      expect(responseTime).to.be.lessThan(3000);
      // Validar headers
      expect(response.headers).to.have.property('content-type').and.include('application/json');
      // Validar contenido del response body
      expect(response.body).to.have.property('ok');
      expect(response.body).to.have.property('date');
    });
  });
});
