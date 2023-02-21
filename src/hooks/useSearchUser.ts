import { useCallback, useEffect, useState } from "react";

export const useSearchUser = <T, _>(
  nickname: string
): { userData: null | T; loading: boolean } => {
  const [userData, setUserData] = useState<null | T>(null);
  // const [loading, setLoading] = useState<boolean>(false)
  const [loading] = useState<boolean>(false);

  // useCallback is required here so I don't generate a new reference of the function on every render
  // This is the equivalent of defining the function within the useEffect (will also prevent multiple references on every render, only the ones in the dep array)
  const fetchUser = useCallback(async (userSearch: string) => {
    const res = await fetch(`https://api.github.com/users/${userSearch}`);
    const currentUser = await res.json();
    setUserData(currentUser);
  }, []);

  useEffect(() => {
    if (nickname) {
      fetchUser(nickname);
    }
  }, [nickname, fetchUser]);

  return {
    userData,
    loading,
  };
};
