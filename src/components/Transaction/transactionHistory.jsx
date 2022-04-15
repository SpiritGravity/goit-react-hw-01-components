import PropTypes from 'prop-types';
import transactions from './transactions.json';

const Transaction = ({transaction}) => {
    return (
    <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      {transactions.map(transaction => (
          <tr key = {transaction.id}>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </tr>
      ))
    
}
    
  </tbody>
</table>
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