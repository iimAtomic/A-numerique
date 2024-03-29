import Banner from './components/Banner/index';
import Mentor from './components/Mentor/index';
import Newsletter from './components/Newsletter/Newsletter';
import CallToActionWithVideo from './components/Hero';
import ProductSimple from './components/Testimonials/videoTest';
import CallToActionWithIllustration from './components/Mentorat';
import MultipleItems from './components/Testimonials';


export default function Home() {
  return (
    <main>
      <Banner />
      {/* <Companies /> */}
       <CallToActionWithVideo /> 
      <Mentor />
      <MultipleItems />
      <CallToActionWithIllustration/>
     {/* <ProductSimple />/*/}
      <Newsletter />
    </main>
  )
}
