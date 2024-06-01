import Hero from '../../../components/Hero';
import Features from '../../../components/Features';
import SummaryProfile from '../components/SummaryProfile';
import AboutExp from '../components/AboutExp'
import LastProject from '../components/LastProject';

const HomePage = () => {
  const profile = {
    name: "Tuan Tran's",
    description: "Welcome to my creative. I'm Tuan Tran and I'm an enthusiastic developer with a passion for crafting mobile (iOS, Android) and web (Nuxt.js, Vue.js) applications for real estate and brokerage projects. This blog is a hub for sharing my knowledge and experiences in programming, entrepreneurship, and life in general. Join me on this journey of learning and exploration!",
    imageSrc: '/images/img_developer.jpeg',
    imageAlt: 'Profile Image',
    socialLinks: {
      facebook: 'https://www.facebook.com/johndoe',
      ins: 'https://www.instagram.com/tuantran.dev97/',
      tiktok: 'https://www.tiktok.com/@johndoe',
      linked: 'https://www.linkedin.com/in/tuantran-tuan-02586a119/'
      // Thêm các liên kết khác nếu cần
    },
  };



  return (
    <>
      <SummaryProfile profile={profile} />
      <AboutExp />
      <LastProject/>
      <Hero />
      <Features />
    </>
  );
}

export default HomePage;