import { uniqueId } from "lodash";
import { atom } from "recoil";

export const userPositionState = atom({
  key: `userPositionState${uniqueId()}`,
  default: {
    lat: "",
    lng: "",
  },
});

export const deviceState = atom({
  key: `deviceState${uniqueId()}`,
  default: false,
});

export const accessTokenState = atom({
  key: `accessTokenState${uniqueId()}`,
  default: "",
});

export const sidebarState = atom({
  key: `sidebarState${uniqueId()}`,
  default: false,
});

export const userState = atom({
  key: `userState${uniqueId()}`,
  default: {
    isLoggedIn: false,
    isArtist: false,
  },
});
