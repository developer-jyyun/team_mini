import { atom } from 'recoil';

export const allUserState = atom<string[]>({
  key: 'allUserState',
  default: [],
});
