import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 16px;
  margin-bottom: 40px;
  border-bottom: 2px solid slateblue;
  color: slateblue;
  background-color: lightsteelblue;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  ,
  > nav {
    display: flex;
  }
`;
export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Link = styled(NavLink)`
  width: 80px;
  padding: 8px 16px;
  border-radius: 5px;
  text-decoration: none;
  color: slateblue;
  font-weight: 500;

  &.active {
    color: white;
    background-color: slateblue;
  }
`;
