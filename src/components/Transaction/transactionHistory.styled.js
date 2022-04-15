import styled from 'styled-components';

export const Wrapper = styled.div`
margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 700px;
  margin: 15px auto;
  border: 1px solid black;
`;
export const TransactionsTable = styled.table`
    width: 100%;
    margin-top: 30px;
    border-spacing: 0;
    
`;

export const TableHead = styled.thead`
    height: 40px;
    background-color: #00acdc;
    
`;

export const TableRow = styled.tr`
    height: 40px;
    
    &:nth-child(2n) {
        background-color: #ebebeb;
    }
`;

export const TableColumnName = styled.th`
    font-size: 18px;
    color: #ffffff;
    text-transform: uppercase;
    
`;

export const TableBody = styled.tbody`
    
`;

export const TableData = styled.td`
    font-size: 16px;
    text-transform: capitalize;
    text-align: center;
    color: #717171;
    border-bottom: 1px solid #717171;
    border-left: 1px solid #717171;
    &:last-child {
        border-right: 1px solid #717171;
    }
`;
