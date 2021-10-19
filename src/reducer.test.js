import reducer from './reducer';

import {
  changeLoginField,
  setAccessToken,
} from './actions';

describe('reducer', () => {
  it('changeLoginField', () => {
    context('when email is changed', () => {
      const initialState = {
        loginFields: {
          email: 'email',
          password: 'password',
        },
      };

      const state = reducer(
        initialState,
        changeLoginField({ name: 'email', value: 'test' }),
      );

      expect(state.loginFields.email).toBe('test');
      expect(state.loginFields.password).toBe('password');
    });

    context('when password is changed', () => {
      const initialState = {
        loginFields: {
          email: 'email',
          password: 'password',
        },
      };

      const state = reducer(
        initialState,
        changeLoginField({ name: 'password', value: 'test' }),
      );

      expect(state.loginFields.email).toBe('email');
      expect(state.loginFields.password).toBe('test');
    });
  });

  describe('setAccessToken', () => {
    const initialState = {
      accessToken: '',
    };

    const state = reducer(initialState, setAccessToken('TOKEN'));

    expect(state.accessToken).toBe('TOKEN');
  });
});
