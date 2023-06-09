import styled from "styled-components";

export const MenuCategoriesButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  padding: 45px;
`;

export const MenuButton = styled.button`
  width: fit-content;
  height: 40px;
  padding: 20px 40px;
  font-weight: bold;
  color: var(--black);
  background-color: var(--white-color);
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s all ease-out;
  cursor: pointer;

  :hover {
    color: var(--black);
    background-color: var(--lime-yellow);
  }
`;
