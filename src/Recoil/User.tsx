import { atom, selector } from "recoil";
import { fetchUser } from "../Services/UsersService";
import { getUserToken } from "../Utils";
import { AuthorProps } from "../Types/blogsTypes";

export const userAtom = atom<AuthorProps | null>({
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

    const token = getUserToken();

    if (!token) {
      throw new Error("No token found, unable to fetch user.");
    }

    try {
      const { data } = await fetchUser(token);
      return data;
    } catch (error) {
      throw error;
    }
  },
});
