const Profile = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
      <img src="/profile-pic.jpg" alt="Profile Picture" className="w-40 h-40 rounded-full object-cover mb-4" />
      <h1 className="text-2xl font-bold text-gray-800 mb-2">John Doe</h1>
      <p className="text-gray-600 text-center">A passionate developer with expertise in Next.js and React.</p>
    </div>
  );
};

export default Profile;
