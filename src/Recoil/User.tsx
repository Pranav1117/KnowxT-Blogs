import { atom, selector } from "recoil";
import { fetchUser } from "../Services/Users";
import { getUserToken } from "../Utils";

const token = getUserToken();

interface User {
  id:number;
  email:string;
  username:string;
  password?:string
}

export const userAtom = atom<User | null>({
  key: "userState",
  default: null,
});

export const userSelector = selector({
  key: "fetchUserSelector",
  get: async ({ get }) => {
    const user = get(userAtom);

    if (user) {
      return user;
    }

    try {
      const { data } = await fetchUser(token);
      return data;
    } catch (error) {
      console.log("error in userfetchSelector", error);
    }
  },
});
