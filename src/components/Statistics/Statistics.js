import PropTypes from 'prop-types';
import data from 'components/Statistics/data.json';
import { Section, Title, StatList, StatItem, StatLabel, StatData } from './Statistics.styled.jsx';

const Statistics = ({ title, stats }) => {
  return (
    <Section>
    { title && <Title>{title}</Title>}
    <StatList>
        {stats.map(({id, label, percentage}) => (
            <StatItem key={id} name={label}>
                <StatLabel>{label}</StatLabel>
                <StatData>{percentage}%</StatData>
            </StatItem>
        ))}
    </StatList>
</Section>
)
};

  export default Statistics;

  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })),
};
