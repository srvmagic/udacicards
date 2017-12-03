import { setDecksAPI, getDecksAPI,addDeckAPI } from "../utils/api";
import * as types from "./actionTypes";
import { AsyncStorage } from "react-native";

export function loadDecksSuccess(decks) {
  return {
    type: types.LOAD_DECKS_SUCCESS,
    decks
  };
}

export function loadDecks() {
  return function(dispatch) {
    return getDecksAPI()
      .then(decks => {
        dispatch(loadDecksSuccess(decks));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function addDeckSuccess(decks) {
  return {
    type: types.ADD_DECK_SUCCESS,
    decks
  };
}

export function addDeck(title) {
  return function(dispatch) {
    return addDeckAPI(title)
      .then(decks => {
        console.log('from api')
        console.log(decks)
        dispatch(addDeckSuccess(decks));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function setDecksSuccess(decks) {
  return {
    type: types.SET_DECKS_SUCCESS,
    decks
  };
}

export function setDecks() {
  setDecksAPI();
  return function(dispatch) {
    setDecksAPI();
    return AsyncStorage.getItem(types.DECK_STORAGE_KEY)
      .then(decks => {
        dispatch(setDecksSuccess(decks));
      })
      .catch(error => {
        throw error;
      });
  };
}
