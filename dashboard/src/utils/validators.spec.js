import {
  validateEmail,
  validatePassword
} from './validators'

describe('Validators utils', () => {
  it('should give an error with empty payload', () => {
    expect(validatePassword()).toBe('*Este campo é obrigatório')
  })

  it('should give an error with less then 6 character payload', () => {
    expect(validatePassword('12')).toBe('*Mínimo de 6 caracteres')
  })

  it('should returns true when pass a correct param', () => {
    expect(validatePassword('123456')).toBe(true)
  })

  it('should give an error with empty payload', () => {
    expect(validateEmail()).toBe('*Este campo é obrigatório')
  })

  it('should give an error with a invalid param', () => {
    expect(validateEmail('myemail@')).toBe('*Este campo precisa ser um email')
  })

  it('should returns true when pass a correct param', () => {
    expect(validateEmail('felipekdra@gmail.com')).toBe(true)
  })
})
