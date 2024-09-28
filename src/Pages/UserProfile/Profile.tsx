import React from 'react';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../Recoil/User';

const Profile = () => {
  const user = useRecoilValue(userAtom);
  // @ts-ignore
  const {username, email} = user;
  return (
    <div className="bg-gray-100 min-h-[88.5vh]">
      <div className='w-[60%] mx-auto bg-white'>
        <div>
          <div>{user?.username}</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
