/// <reference types="cypress" />

describe('scan for security context', () => {
  var data=""
  beforeEach(() => {
    cy.readFile('kubernetes.yaml').should('exist')
    const YAML = require('yamljs')
      cy
        .readFile('./kubernetes.yaml')
        .then((str) => {
          // parse the string into object literal
          const english = YAML.parse(str)
          data=str         
      })
  })

  it('scan for security context', () => {
          expect(data).to.contains('securityContext')     
  })

  it('scan for security context allowPrivilegeEscalation', () => {
    expect(data).to.contains('allowPrivilegeEscalation: false')
  })

  it('scan for security context runAsUser: 1000', () => {
    expect(data).to.contains('runAsUser: 1000')
  })

  it('scan for security context runAsGroup: 3000', () => {
    expect(data).to.contains('runAsGroup: 3000')
  })

  it('scan for security context fsGroup: 2000', () => {
    expect(data).to.contains('fsGroup: 2000')
  })

})