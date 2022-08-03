import React, {FC, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  InviteButton,
  InviteText,
  PinCircle,
  PinContainer,
  PinStick,
  PinText,
  SearchContainer,
  SocialContainer,
  UsernameText,
  UserRow,
  SocialHeader,
} from '../home.styled';
import {SearchInput} from '../home.styled';

const friends = ['Nick', 'Iglesias', 'Greg'];
const users = ['Guy', 'Ewan', 'Ray', 'faggot'];

interface SocialRowProps {
  name: string;
}
interface PinProps {
  letter: string;
}

const Pin: FC<PinProps> = ({letter}) => {
  return (
    <PinContainer>
      <PinCircle>
        <PinText>{letter.toUpperCase()}</PinText>
      </PinCircle>
      <PinStick />
    </PinContainer>
  );
};

const SocialRow: FC<SocialRowProps> = ({name}) => {
  return (
    <UserRow>
      <Pin letter={name.charAt(0)} />
      <UsernameText>{name}</UsernameText>
    </UserRow>
  );
};

const Social = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredFriends, setFilteredFriends] = useState(friends);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const handleChange = (text: string) => {
    setSearchText(text);
    if (text === '') {
      setFilteredFriends(friends);
      setFilteredUsers(users);
    } else {
      setFilteredFriends(
        friends.filter(
          friend => friend.toLowerCase().indexOf(text.toLowerCase()) === 0,
        ),
      );
      setFilteredUsers(
        users.filter(
          user => user.toLowerCase().indexOf(text.toLowerCase()) === 0,
        ),
      );
    }
  };
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <SocialContainer>
        <SearchContainer>
          <SearchInput
            onChangeText={text => handleChange(text)}
            placeholder="Find friends..."
            placeholderTextColor="black"
            value={searchText}
          />
        </SearchContainer>
        <InviteButton>
          <InviteText>Invite Friends on PopPin</InviteText>
        </InviteButton>
        <SocialHeader>My Friends</SocialHeader>
        {filteredFriends.slice(0, 3).map(friend => (
          <SocialRow name={friend} />
        ))}
        <SocialHeader>Add Friends</SocialHeader>
        {filteredUsers.slice(0, 3).map(friend => (
          <SocialRow name={friend} />
        ))}
      </SocialContainer>
    </SafeAreaView>
  );
};

export default Social;
