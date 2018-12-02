import reducer from "./index";

describe('REDUCER', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  it('should handle "GET_NEWS" action', () => {
    expect(reducer({}, { type: 'GET_NEWS' })).toEqual({ loading: true })
  })

  it('should handle "NEWS_RECEIVED" action', () => {
    const mockData = [{
      "author": "Analysis by Stephen Collinson, CNN",
      "title": "Mueller starts tzzle in most signimove yet",
      "description": "Silent for so long"
    }];
    expect(reducer({}, { type: "NEWS_RECEIVED", json: mockData }))
      .toEqual({ news: mockData[0], loading: false })
  })

})
