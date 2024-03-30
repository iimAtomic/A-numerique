import Banner from './components/Banner/index';
import Mentor from './components/Mentor/index';
import Newsletter from './components/Newsletter/Newsletter';
import CallToActionWithVideo from './components/Hero';
import ProductSimple from './components/Testimonials/videoTest';
import MultipleItems from './components/Testimonials';


export default function Home() {
  return (
    <main>
      <Banner />
       <CallToActionWithVideo /> 
      <Mentor />
      <MultipleItems />
      <Newsletter />
    </main>
  )
}
