import styled from "styled-components";

export const DesignerWidget = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 2fr 1fr;
  column-gap: 1.8rem;
  row-gap: 0.7rem;
  border-radius: 15px;
  background-color: var(--lime-yellow);
  padding: 20px 50px 34px 20px;
  height: fit-content;
`;

export const DesignerPhoto = styled.img`
  height: 160px;
  width: 160px;
  border-radius: 5px;
  object-fit: cover;
`;

export const TagsWrapper = styled.div`
  display: grid;
  grid-column: 1 / span 2;
`;

export const DesignerTags = styled.div`
  display: flex;
  column-gap: 0.7rem;
  margin-bottom: 0.7rem;
  height: auto;
  width: fit-content;
  grid-column: 1 / span 2;
`;

export const Tag = styled.p`
  height: fit-content;
  width: 106px;
  color: var(--white-color);
  font-size: bold;
  background-color: var(--black);
  border-radius: 5px;
  padding: 0.4rem 1rem 0.4rem 1rem;
  text-align: center;
`;

export const DesignerTagsSecond = styled.div`
  display: flex;
  gap: 0.7rem;
  height: 80px;
  width: fit-content;
  grid-column: 1 / span 2;
`;

export const TagSecond = styled.p`
  height: fit-content;
  width: 106px;
  color: var(--black);
  font-size: bold;
  background-color: var(--very-light-grey-color);
  border: 1px solid var(--dark-grey-color);
  border-radius: 5px;
  padding: 0.4rem 1rem 0.4rem 1rem;
  text-align: center;
`;

export const DesignerContent = styled.div`
  height: fit-content;
  padding: 1.7rem;
  display: flex;
  flex-direction: column;
`;