import { useState, useEffect } from "react";
import { IUser } from "../types/types";
import { getUsersByQuery } from "../utils/api";

export default function useUsersSearch(searchQuery: string) {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    if (!searchQuery) return;

    const searchUsers = async () => {
      try {
        const data = await getUsersByQuery(searchQuery);
        setUsers(data.items);
      } catch (error) {
        console.error("Failed to fetch", error);
      }
    };

    searchUsers();
  }, [searchQuery]);

  return { users, setUsers };
}
