import PropTypes from 'prop-types';
import {
  SocialProfile,
  Description,
  Avatar,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  Stats,
  StatsInfo,
  StatisticsLabel,
  StatsQuantity,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats: {followers, views, likes} }) => {
    return (
        <SocialProfile>
        <Description>
          <Avatar
            src={avatar}
            alt="User avatar"
          />
          <ProfileName>{username}</ProfileName>
          <ProfileTag>@{tag}</ProfileTag>
          <ProfileLocation>{location}</ProfileLocation>
        </Description>
        <Stats>
        <StatsInfo>
          <StatisticsLabel>Followers</StatisticsLabel>
          <StatsQuantity>{followers}</StatsQuantity>
        </StatsInfo>
        <StatsInfo>
          <StatisticsLabel>Views</StatisticsLabel>
          <StatsQuantity>{views}</StatsQuantity>
        </StatsInfo>
        <StatsInfo>
          <StatisticsLabel>Likes</StatisticsLabel>
          <StatsQuantity>{likes}</StatsQuantity>
        </StatsInfo>
      </Stats>
      </SocialProfile> 
    );
};

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }
};