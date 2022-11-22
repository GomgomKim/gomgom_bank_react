import { atom } from 'recoil';

export const state = atom({
  key: 'key',
  default: {
    "value": "value",
    "value2": "value2",
  }, 
});