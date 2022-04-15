import PropTypes from 'prop-types';
import data from 'components/Statistics/data.json';

<Statistics title="Upload stats" stats={data} />;
<Statistics stats={data} />;

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })),
};