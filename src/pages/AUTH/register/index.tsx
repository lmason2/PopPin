import React, {useEffect, useState} from 'react';
import {LoginInput} from '../../../shared/form.styled';
import {Icon, SearchBar} from '@rneui/themed';
import {
  BackButton,
  MainText,
  InputContainer,
  SignUpText,
  SignUpButton,
  InfoText,
  InputText,
  SubText,
  SearchContainer,
  CollegeText,
  CollegeSubText,
} from './register.styled';
import {
  CenteredXTopYColumnContainer,
  LeftXTopYColumnContainer,
} from '../../../shared/containers.styled';
import {useNavigation} from '@react-navigation/native';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {db, firebaseAuth} from '../../../config/db';
import {setDoc, doc, getDocs, collection} from 'firebase/firestore';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../App';
import {styles} from '../../../shared/colors';
import {College} from '../../../shared/types';

let globalEmail = '';
let globalPassword = '';
let globalCollege: string = '';

export const AddEmail = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  return (
    <>
      <LeftXTopYColumnContainer>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrow-left-top" color="black" type="material-community" />
        </BackButton>
        <MainText>Enter Email</MainText>
        <InputContainer>
          <LoginInput
            keyboardType="email-address"
            textContentType="emailAddress"
            onChangeText={(newEmail: React.SetStateAction<string>) =>
              setEmail(newEmail)
            }
            defaultValue={email}
          />
        </InputContainer>
        <SignUpButton
          onPress={() => {
            globalEmail = email;
            navigation.navigate('AddPassword', {});
          }}>
          <SignUpText>ENTER</SignUpText>
        </SignUpButton>
      </LeftXTopYColumnContainer>
    </>
  );
};

export const AddPassword = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <>
      <LeftXTopYColumnContainer>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrow-left-top" color="black" type="material-community" />
        </BackButton>
        <MainText>Create Password</MainText>
        <SubText>At least 8 characters</SubText>
        <InputContainer>
          <LoginInput
            textContentType="password"
            secureTextEntry={true}
            onChangeText={(newPassword: React.SetStateAction<string>) =>
              setPassword(newPassword)
            }
            defaultValue={password}
          />
        </InputContainer>
        <InputText>New Password</InputText>
        <InputContainer>
          <LoginInput
            textContentType="password"
            secureTextEntry={true}
            onChangeText={(newConfirm: React.SetStateAction<string>) =>
              setConfirmPassword(newConfirm)
            }
            defaultValue={confirmPassword}
          />
        </InputContainer>
        <InputText>Confirm New Password</InputText>
        <SignUpButton
          onPress={() => {
            globalPassword = password;
            navigation.navigate('AddUsername', {});
          }}>
          <SignUpText>ENTER</SignUpText>
        </SignUpButton>
      </LeftXTopYColumnContainer>
    </>
  );
};

export const AddUsername = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [username, setUsername] = useState('');

  const handleSignUp = () => {
    createUserWithEmailAndPassword(firebaseAuth, globalEmail, globalPassword)
      .then(async userCredential => {
        // Signed in
        const user = userCredential.user;
        const userData = {
          username: username,
          college: globalCollege,
          friends: [],
        };
        await setDoc(doc(db, 'users', globalEmail.toLowerCase()), userData);
        navigation.navigate('Welcome', {});
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
  };
  return (
    <>
      <LeftXTopYColumnContainer>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrow-left-top" color="black" type="material-community" />
        </BackButton>
        <MainText>Choose a username</MainText>
        <InputContainer>
          <LoginInput
            onChangeText={(newUsername: React.SetStateAction<string>) =>
              setUsername(newUsername)
            }
            defaultValue={username}
          />
        </InputContainer>
        <SignUpButton onPress={handleSignUp}>
          <SignUpText>SIGN UP</SignUpText>
        </SignUpButton>
        <InfoText>
          By signing up, you agree to the Terms of Service and Privacy Policy.
        </InfoText>
      </LeftXTopYColumnContainer>
    </>
  );
};

export const SearchColleges = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [collegesLoaded, setCollegesLoaded] = useState(false);
  const [colleges, setColleges] = useState<College[]>([]);
  const [searchText, setSearchText] = useState('');
  const [listedColleges, setListedColleges] = useState<College[]>([]);

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, 'colleges'));
      const localColleges: College[] = [];
      querySnapshot.forEach(college => {
        const name = college.id;
        const data = college.data();
        const typedCollege: College = {
          name,
          coordinates: {
            lat: data.coords.latitude,
            long: data.coords.longitude,
          },
        };
        localColleges.push(typedCollege);
      });
      setColleges(localColleges);
      setCollegesLoaded(true);
    }
    fetchData();
  }, []);

  const handleSearchChange = (value: string) => {
    setSearchText(value);
    if (value === '') {
      setListedColleges([]);
      return;
    }
    const localColleges = colleges.filter(college => {
      console.log(value);
      console.log(college.name);
      return college.name.toLowerCase().includes(value.toLowerCase());
    });
    setListedColleges(localColleges.slice(0, 3));
  };

  return (
    <>
      {collegesLoaded ? (
        <LeftXTopYColumnContainer>
          <BackButton
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon
              name="arrow-left-top"
              color="black"
              type="material-community"
            />
          </BackButton>
          <MainText>Search for Your College</MainText>
          <SearchContainer>
            <SearchBar
              placeholder="Search colleges..."
              platform="ios"
              placeholderTextColor={styles.colors.accent}
              onChangeText={newValue => handleSearchChange(newValue)}
              value={searchText}
            />
          </SearchContainer>
          {searchText !== '' && listedColleges.length === 0 ? (
            <CenteredXTopYColumnContainer>
              <CollegeSubText>
                Sorry we haven't added your college yet
              </CollegeSubText>
              <CollegeSubText>
                Follow @PopPin on Instagram to request your school be added
              </CollegeSubText>
            </CenteredXTopYColumnContainer>
          ) : (
            listedColleges.map(college => (
              <SignUpButton
                onPress={() => {
                  globalCollege = college.name;
                  navigation.navigate('AddEmail', {});
                }}>
                <CollegeText>{college.name}</CollegeText>
              </SignUpButton>
            ))
          )}
        </LeftXTopYColumnContainer>
      ) : (
        <CenteredXTopYColumnContainer>
          <MainText>Loading Colleges...</MainText>
        </CenteredXTopYColumnContainer>
      )}
    </>
  );
};
