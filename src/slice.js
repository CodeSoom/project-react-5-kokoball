import { createSlice } from '@reduxjs/toolkit';
import {
  postLogin,
} from './services/api';

import { saveItem } from './services/storage';

import { equal } from './utils';

const initialReviewFields = {
  score: '',
  descriptions: '',
};

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    loginFields: {
      email: '',
      password: '',
    },
    accessToken: '',
  },
  reducers: {
    changeLoginField(state, { payload: { name, value } }) {
      return {
        ...state,
        loginFields: {
          ...state.loginFields,
          [name]: value,
        },
      };
    },

    setAccessToken(state, { payload: accessToken }) {
      return {
        ...state,
        accessToken,
      };
    },
    logout(state) {
      return {
        ...state,
        accessToken: '',
      };
    },
  },

});

export const {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  selectRegion,
  selectCategory,
  changeLoginField,
  setAccessToken,
  logout,
  changeReviewField,
  clearReviewFields,
  setReviews,
} = actions;

export function loadInitialDate() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));

    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const {
      selectedRegion: region,
      selectedCategory: category,
    } = getState();

    if (!region || !category) {
      return;
    }
    const restaurants = await fetchRestaurants({
      regionName: region.name,
      categoryId: category.id,
    });
    dispatch(setRestaurants(restaurants));
  };
}

export function loadRestaurant({ restaurantId }) {
  return async (dispatch) => {
    dispatch(setRestaurant(null));

    const restaurant = await fetchRestaurant({ restaurantId });

    dispatch(setRestaurant(restaurant));
  };
}

export function requestLogin() {
  // state = email, password
  // HTTP POST <- email, password
  return async (dispatch, getState) => {
    const { loginFields: { email, password } } = getState();

    const accessToken = postLogin({ email, password });
    // TODO: 로그인 성공하면 -> localstorage에 저장
    saveItem('accessToken', accessToken);

    dispatch(setAccessToken(accessToken));
  };
}

export function loadRebiew({ restaurantId }) {
  return async (dispatch) => {
    const restaurant = await fetchRestaurant({ restaurantId });

    dispatch(setReviews(restaurant.reviews));
  };
}

export function sendReview({ restaurantId }) {
  return async (dispatch, getState) => {
    const { accessToken, reviewFields: { score, description } } = getState();

    // 1. 먼저 지운다.
    await postReview({
      accessToken,
      restaurantId,
      score,
      description,
    });
    // 2. 완료가 되면 지운다.
    dispatch(loadRebiew({ restaurantId }));

    // 3. 업데이트가 끝나면 지운다.
    dispatch(clearReviewFields());
  };
}

export default reducer;
