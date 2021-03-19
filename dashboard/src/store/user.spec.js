import useStore from '../hooks/useStore'
import {
  resetUserStore,
  setApiKey,
  cleanCurrentUser,
  setCurrentUser
} from './user'

describe('UserStore', () => {
  afterEach(() => {
    resetUserStore()
  })

  it('should set current user', () => {
    const store = useStore()
    setCurrentUser({ name: 'Felipe' })
    expect(store.User.currentUser.name).toBe('Felipe')
  })

  it('should set api_key on current user', () => {
    const store = useStore()
    setApiKey('123456')
    expect(store.User.currentUser.apiKey).toBe('123456')
  })

  it('should clean current user', () => {
    const store = useStore()
    setCurrentUser({ name: 'Felipe' })
    expect(store.User.currentUser.name).toBe('Felipe')
    cleanCurrentUser()

    expect(store.User.currentUser.name).toBeFalsy()
  })
})
