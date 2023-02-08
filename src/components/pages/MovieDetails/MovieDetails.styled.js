import styled from 'styled-components';
const { Link } = require('react-router-dom');

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: slateblue;
  width: 80px;
  padding: 8px 16px;
  border-radius: 5px;
  font-weight: 500;
  margin-bottom: 20px;
`;
export const ItemLink = styled.li`
  width: 80px;
  padding: 8px 16px;
  border-radius: 5px;
  font-weight: 500;
  border: 2px solid slateblue;
  &.active {
    color: white;
    background-color: slateblue;
  }
`;
