import {doc, getDoc} from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import {CircleComponent, BarComponent} from '../../components/welcome';
import {db, firebaseAuth} from '../../config/db';
import {CenteredXYColumnContainer} from '../../shared/containers.styled';

const getUser = async (setUserLoaded: any, setName: any) => {
  const user = firebaseAuth.currentUser;
  if (user != null) {
    // const email = user.email as string;
    const userRef = doc(db, 'users', 'Lukesamuelmason@gmail.com');
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      if (data.username != null) {
        setName(docSnap.data().username);
      }
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
    setUserLoaded(true);
  }
};

const Welcome = () => {
  const [userLoaded, setUserLoaded] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    getUser(setUserLoaded, setName);
  }, []);

  return (
    <CenteredXYColumnContainer>
      {userLoaded && (
        <>
          <CircleComponent name={name} />
          <BarComponent />
        </>
      )}
    </CenteredXYColumnContainer>
  );
};

export default Welcome;
