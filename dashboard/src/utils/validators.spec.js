import {
  validateEmail,
  validatePassword
} from './validators'

describe('Validators utils', () => {
  it('should give an error with empty payload', () => {
    expect(validatePassword()).toBe('*Este campo é obrigatório')
  })

  it('should give an error with less then 3 character payload', () => {
    expect(validatePassword('12')).toBe('*Este campo precisa de no mínimo 3 caracteres')
  })

  it('should returns true when pass a correct param', () => {
    expect(validatePassword('123456')).toBe(true)
  })

  it('should give an error with empty payload', () => {
    expect(validateEmail()).toBe('*Este campo é obrigatório')
  })

  it('should give an error with a invalid param', () => {
    expect(validateEmail('myemail@')).toBe('*Este campo precisa ser um e-mail')
  })

  it('should returns true when pass a correct param', () => {
    expect(validateEmail('felipekdra@gmail.com')).toBe(true)
  })
})
