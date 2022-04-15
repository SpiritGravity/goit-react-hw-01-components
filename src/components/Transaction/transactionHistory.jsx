import PropTypes from 'prop-types';
import transactions from './transactions.json';
import {
  TransactionsTable,
  TableHead,
  TableRow,
  TableColumnName,
  TableBody,
  TableData
} from './transactionHistory.styled';

const Transaction = ({ items }) => {
    return (
    <TransactionsTable>
  <TableHead>
    <TableRow>
      <TableColumnName>Type</TableColumnName>
      <TableColumnName>Amount</TableColumnName>
      <TableColumnName>Currency</TableColumnName>
    </TableRow>
  </TableHead>

  <TableBody>
    {items.map(({ id, type, amount, currency }) => (
        <TableRow key={id}>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
        </TableRow>
    ))}
  </TableBody>
</TransactionsTable>
    )
};

Transaction.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
        })
      ),
    };
    
export default Transaction;