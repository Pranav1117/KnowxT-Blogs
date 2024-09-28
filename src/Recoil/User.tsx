import { atom, selector } from "recoil";
import { fetchUser } from "../Services/UsersService";
import { getUserToken } from "../Utils";

interface User {
  id: number;
  email: string;
  username: string;
  password?: string;
}

export const userAtom = atom<User | null>({
  key: "userState",
  default: null,
});

export const userSelector = selector({
  key: "fetchUserSelector",
  get: async ({ get }) => {
    const user = get(userAtom);

    // If user is already in atom state, return it.
    if (user) {
      return user;
    }

    // Token should be fetched here to ensure it's up-to-date.
    const token = getUserToken();

    if (!token) {
      throw new Error("No token found, unable to fetch user.");
    }

    try {
      const { data } = await fetchUser(token);
      return data;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error; // Optionally rethrow the error to handle it further up in the component.
    }
  },
});


