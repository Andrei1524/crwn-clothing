import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 60%;
  margin: 0 auto;
`;

export const Table = styled.table`
  width: 100%;
`;

export const Tr = styled.tr`
  text-align: center;
`;
export const Th = styled.th`
  text-align: center;

  &:first-child {
    text-align: left;
  }
`;
export const Td = styled.td`
  text-align: center;
`;

export const ThAlignLeft = styled.th``;

export const Total = styled.span`
  display: block;
  text-align: right;
  font-size: 24px;
`;
