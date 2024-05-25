import Profile from '../components/Profile';
import ProfileHeader from '../components/ProfileHeader';

const ProfilePage = () => {
  return (
    <div>
      <ProfileHeader />
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Profile />
      </div>
    </div>
  );
};

export default ProfilePage;
