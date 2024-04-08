import styled from "styled-components";

export const Table = styled.table`
margin:1rem 0;
`;

export const TableRow = styled.tr`
border-radius: 1px solid grey;
`;

export const TableHead = styled.th`
padding: 1rem;
border-radius: 1px solid grey;
`;

export const TableCol = styled.td`
padding: 1rem;
border-bottom: 1px solid grey;
`;

export const TableColAction = styled(TableCol)`
button {
  margin-right: 1rem;
}`