import Profile from 'components/Profile/profile';
import Statistics from './Statistics/Statistics';
import user from '../components/Profile/user.json';
import data from 'components/Statistics/data.json';
import friends from 'components/FriendList/friends.json';
import FriendList from './FriendList/friendsList';
import transactions from './Transaction/transactions.json';
import TransactionHistory from './Transaction/transactionHistory';
import {Wrapper} from './Transaction/transactionHistory.styled';
export const App = () => {
  return (
    <div>
      <Wrapper> 
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics title="Upload stats" stats={data} />
<FriendList friends={friends} />
<TransactionHistory items={transactions} />
</Wrapper>
    </div>
  );
};
