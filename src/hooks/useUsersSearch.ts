import { useState, useEffect } from "react";
import { IUser } from "../types/types";
import { getUsersByQuery } from "../utils/api";
import useDebounceQuery from "./useDebounceQuery";

export default function useUsersSearch(searchQuery: string) {
  const [users, setUsers] = useState<IUser[]>([]);
  const { debounceQuery } = useDebounceQuery(searchQuery);

  useEffect(() => {
    if (!debounceQuery) return;

    const searchUsers = async () => {
      try {
        const data = await getUsersByQuery(debounceQuery);
        setUsers(data.items);
      } catch (error) {
        console.error("Failed to fetch", error);
      }
    };

    searchUsers();
  }, [debounceQuery]);

  return { users, setUsers };
}
