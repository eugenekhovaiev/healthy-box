import { Banner } from './sections/Banner';
import { Consultation } from './sections/Consultation';
import { Delivery } from '../../components/sections/Delivery';
import { FAQ } from './sections/FAQ';
import { Help } from '../../components/sections/Help';
import { HowItWorks } from './sections/HowItWorks';
import { Rations } from './sections/Rations';
import { WhyWe } from './sections/WhyWe';

export const Home = () => {
  return (
    <main>
      <Banner />
      <HowItWorks />
      <Rations />
      <Consultation />
      <WhyWe />
      <FAQ />
      <Delivery />
      <Help />
    </main>
  );
};
