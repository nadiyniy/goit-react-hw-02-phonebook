import { StyledFilterDiv } from './Filter.styled';

export const Filter = ({ filter, onFilterChange }) => {
  return (
    <StyledFilterDiv>
      <h3>Find contact by name</h3>
      <input
        onChange={onFilterChange}
        value={filter}
        placeholder="Enter filter value"
        name="filter"
      ></input>
    </StyledFilterDiv>
  );
};
