import Hero from '../../../components/Hero';
import Features from '../../../components/Features';
import SummaryProfile from '../components/SummaryProfile';

const HomePage = () => {
const profile = {
    name: 'John Doe',
    description: 'Software Engineer at XYZ Corp',
    imageSrc: '/images/developer-logo.png',
    imageAlt: 'Profile Image',
    socialLinks: {
      facebook: 'https://www.facebook.com/johndoe',
      youtube: 'https://www.youtube.com/johndoe',
      tiktok: 'https://www.tiktok.com/@johndoe',
      // Thêm các liên kết khác nếu cần
    },
  };


  return (
    <>
      <SummaryProfile profile={profile}/>
      <Hero />
      <Features />
    </>
  );
}

export default HomePage;