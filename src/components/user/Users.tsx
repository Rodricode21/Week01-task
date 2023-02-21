import { useState } from "react";
import styled from "styled-components";
import { useDebounce } from "../../hooks/useDebounce";
import { useSearchUser } from "../../hooks/useSearchuser";
import type { GithubUser } from "../../types/globalTypes";

import Search from "../search/Search";
import User from "./User";

const UsersWrapper = styled.div`
  /* TODO: add display flex to split items */
  width: 70%;
  padding: 20px;
  box-shadow: 4px 8px 5px 10px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 4px 8px 5px 10px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 4px 8px 5px 10px rgba(0, 0, 0, 0.2);
`;

const UsersTitle = styled.h1`
  font-weight: 600;
  text-align: center;
`;

const Users = (): JSX.Element => {
  const [user, setUsers] = useState<string>("");

  // debounce searched nickname so we're not firing the API request on every key press
  const debouncedSearchUser = useDebounce<string>(user, 2000);
  const { userData, loading } = useSearchUser<GithubUser, boolean>(
    debouncedSearchUser
  );

  const onChangeHandler = (value: string) => setUsers(value);

  return (
    <UsersWrapper>
      <UsersTitle>Search by user's login name</UsersTitle>
      <Search value={user} onValueChange={onChangeHandler} />
      {userData ? (
        <User
          name={userData.name}
          image={userData.avatar_url}
          location={userData.location}
          url={userData.html_url}
        />
      ) : (
        "el usuario no se ha encontrado"
      )}
    </UsersWrapper>
  );
};

export default Users;
