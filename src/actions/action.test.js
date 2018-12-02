import * as actions from './index'

describe('ACTIONS', () => {
  it('should create an action with correct type', () => {
    const expectedAction = {
      type: 'GET_NEWS'
    }
    expect(actions.getNews()).toEqual(expectedAction)
  })
})
