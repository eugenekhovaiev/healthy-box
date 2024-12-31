import { Banner } from '../../components/Banner';
import { Consultation } from '../../components/Consultation';
import { Delivery } from '../../components/Delivery';
import { FAQ } from '../../components/FAQ';
import { Help } from '../../components/Help';
import { HowItWorks } from '../../components/HowItWorks';
import { Rations } from '../../components/Rations';
import { WhyWe } from '../../components/WhyWe';

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
