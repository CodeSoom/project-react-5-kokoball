import reducer, {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  selectRegion,
  selectCategory,
  changeLoginField,
  setAccessToken,
  logout,
  setReviews,
  clearReviewFields,
  changeReviewField,
} from './slice';

import categories from '../fixtures/categories';
import regions from '../fixtures/regions';

describe('reducer', () => {
  describe('changeLoginField', () => {
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

  describe('logout', () => {
    it('clears access token', () => {
      const initialState = {
        accessToken: 'ACCESS_TOKEN',
      };
      const state = reducer(initialState, logout('TOKEN'));

      expect(state.accessToken).toBe('');
    });
  });
});
