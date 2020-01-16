const chai = require('chai')
const expect = chai.expect

// Your Person test goes here!

const Person = require('../models/person.js')

describe('Person', () => {
    it('should init', () => {
        var person = new Person('Zach', 'Molony', '09/07/2001')

        expect(person.first).to.equal('Zach')
        expect(person.last).to.equal('Molony')
        expect(person.dob).to.equal('09/07/2001')

        expect(person.email).to.deep.equal([])
    })

    it('should capitalise', () => {
        var person = new Person('abby', 'yeah', '09/07/2001')

        expect(person.first).to.equal('Abby')
    })

    it('should return a full name', () => {
        var person = new Person('Zach', 'Molony', '09/07/2001')

        expect(person.fullName()).to.equal('Zach Molony')
    })

    it('should accept new emails', () => {
        var person = new Person('Zach', 'Molony', '09/07/2001')

        person.addEmail('zach@gmail.com')
        expect(person.email).to.deep.equal(['zach@gmail.com'])
    })
})