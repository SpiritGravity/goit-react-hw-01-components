import PropTypes from 'prop-types';
import { FriendItem, Status, Avatar,UserName } from './friendList.styled';

const FriendList = ({friends}) => {
    return ( 
        <div>
            {friends.map(({ id, name, avatar, isOnline }) => (
                <FriendItem key={id}>
                    <Status isOnline={isOnline}>{isOnline}</Status>
                    <Avatar src={avatar} alt="User avatar" width="48" />
                    <UserName>{name}</UserName>
                </FriendItem> 
            ))}
    </div>
)
};
    //     <ul className = "friend-list"> 
    //      <li className = "item" key = {friend.id}> 
    //     <span className = "status">{friend.isOnline} </span>
    //  <img className = "avatar" src = {friend.avatar} alt="User avatar" width="48"/>
    //  <p className = "name">{friend.name}</p>
    // </li>
    // </ul>)
   

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          isOnline: PropTypes.bool.isRequired,
          name: PropTypes.string.isRequired,
          avatar: PropTypes.string.isRequired,
        })
      ),
    };
    
export default FriendList;