import styled from "styled-components";

const SearchInput = styled.input`
  width: 250px;
  height: 20px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
`;

interface SearchProps {
  value: string;
  onValueChange: (val: string) => void;
}

const Search = (props: SearchProps): JSX.Element => {
  const { value, onValueChange } = props;

  return (
    <SearchInput
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onValueChange(e.target.value)
      }
    />
  );
};

export default Search;
