import {getDocs, collection, doc, getDoc} from 'firebase/firestore';
import React, {FC, useEffect, useState} from 'react';
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
  AddFriendButton,
} from '../HOME/home.styled';
import {SearchInput} from '../HOME/home.styled';
import {db, firebaseAuth} from '../../config/db';
import {SubText} from '../AUTH/register/register.styled';
import {Icon} from '@rneui/themed';
import {LargeLabel} from './event.styled';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ModalStackParamList} from '../../../App';

interface SocialRowProps {
  name: string;
  user: boolean;
  setFriends: any;
  setUsers: any;
  setSearchText: any;
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

const SocialRow: FC<SocialRowProps> = ({
  name,
  user,
  setFriends,
  setUsers,
  setSearchText,
}) => {
  const handleFriendChange = () => {
    setSearchText('');
    if (user) {
      // add friend
      setFriends((currentFriends: string[]) => [...currentFriends, name]);
      setUsers((currentUsers: string[]) =>
        currentUsers.filter((currentUser: string) => currentUser !== name),
      );
      // handle backend
    } else {
      // remove friend
      setUsers((currentUsers: string[]) => [...currentUsers, name]);
      setFriends((currentFriends: string[]) =>
        currentFriends.filter(
          (currentFriend: string) => currentFriend !== name,
        ),
      );
      // handle backend
    }
  };
  return (
    <UserRow>
      <Pin letter={name.charAt(0)} />
      <UsernameText>{name}</UsernameText>
      <AddFriendButton onPress={handleFriendChange}>
        <Icon
          name={user ? 'plus-circle-outline' : 'minus-circle-outline'}
          color="black"
          type="material-community"
        />
      </AddFriendButton>
    </UserRow>
  );
};

const getUsers = async (setUsers: any, setLoading: any) => {
  const user = firebaseAuth.currentUser;
  const localUsers: string[] = [];
  const querySnapshot = await getDocs(collection(db, 'users'));
  querySnapshot.forEach(firestoreUser => {
    if (firestoreUser.id !== user?.email?.toLowerCase()) {
      localUsers.push(firestoreUser.data().username);
    }
  });
  setUsers(localUsers);
  setLoading(false);
};

const getFriends = async (setFriends: any, setLoading: any) => {
  const user = firebaseAuth.currentUser;
  if (user != null) {
    const email = user.email as string;
    const userRef = doc(db, 'users', email.toLowerCase());
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      const friends = data.friends;
      setFriends(friends);
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
    setLoading(false);
  }
};

const InviteHosts = () => {
  const [searchText, setSearchText] = useState('');
  const [friends, setFriends] = useState<string[]>([]);
  const [users, setUsers] = useState<string[]>([]);
  const [filteredFriends, setFilteredFriends] = useState<string[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<string[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingFriends, setLoadingFriends] = useState(true);
  const navigation = useNavigation<StackNavigationProp<ModalStackParamList>>();

  useEffect(() => {
    getFriends(setFriends, setLoadingFriends);
    getUsers(setUsers, setLoadingUsers);
  }, []);

  useEffect(() => {
    setFilteredFriends(friends);
    setFilteredUsers(users);
  }, [friends, users]);

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
        <LargeLabel>Invite Additional Host(s)</LargeLabel>
        <SearchContainer>
          <SearchInput
            onChangeText={(text: string) => handleChange(text)}
            placeholder="Find friends..."
            placeholderTextColor="black"
            value={searchText}
          />
        </SearchContainer>
        <SocialHeader>Invited</SocialHeader>
        {loadingFriends ? (
          <SubText>Loading...</SubText>
        ) : (
          <>
            {filteredFriends.slice(0, 3).map(friend => (
              <SocialRow
                name={friend}
                user={false}
                setFriends={setFriends}
                setUsers={setUsers}
                setSearchText={setSearchText}
              />
            ))}
          </>
        )}
        <SocialHeader>Add Friends</SocialHeader>
        {loadingUsers ? (
          <SubText>Loading...</SubText>
        ) : (
          <>
            {filteredUsers.slice(0, 3).map(friend => (
              <SocialRow
                name={friend}
                user={true}
                setFriends={setFriends}
                setUsers={setUsers}
                setSearchText={setSearchText}
              />
            ))}
          </>
        )}
        <InviteButton
          onPress={() => {
            navigation.navigate('AddHosts', {});
          }}>
          <InviteText>Next</InviteText>
        </InviteButton>
      </SocialContainer>
    </SafeAreaView>
  );
};

export default InviteHosts;
