import styled from "styled-components";
import type { UserData } from "../../types/globalTypes";

const UserWrapper = styled.div`
  border: 1px solid black;
  padding: 5px;
  border: 5px;
`;

const UserText = styled.p``;
const UserImage = styled.img``;
const VisitLink = styled.a`
  background: chocolate;
  color: #ffffff;
  padding: 10px 15px;
  text-decoration: none;
  text-transform: uppercase;
`;

const User = (props: UserData) => {
  const { name, image, location, url } = props;

  return (
    <UserWrapper>
      <UserText>{name}</UserText>
      <UserImage src={image} />
      <UserText>{location}</UserText>
      <VisitLink href={url}>Visit profile</VisitLink>
    </UserWrapper>
  );
};

export default User;
