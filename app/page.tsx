import Banner from './components/Banner/index';
import MultiCours from './components/Courses';
import CallToActionWithVideo from './components/Hero';
import Mentor from './components/Mentor/index';
import Newsletter from './components/Newsletter/Newsletter';
import Testimonials from './components/Testimonials';


export default function Home() {
  return (
    <main>
      <Banner />
      <CallToActionWithVideo /> 
      <Mentor />
      <MultiCours />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
