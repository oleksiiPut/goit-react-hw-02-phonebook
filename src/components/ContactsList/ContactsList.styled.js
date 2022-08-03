import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 10px;
  width: 400px;
  padding: 10px;
  border-radius: 4px;
  background-color: lightgray;
`;

export const H2 = styled.h2`
  margin-top: 0;
  font-size: 24px;
  color: teal;
`;

export const Ul = styled.ul`
  padding: 0;
  margin-bottom: 0;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;

export const P = styled.p`
  font-size: 20px;
`;

export const Span = styled.span`
  font-weight: 700;
`;

export const ListBtn = styled.button`
  width: 80px;
  height: 30px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 600;
  &:hover {
    background-color: rgba(200, 255, 255, 0.4);
  }
`;
