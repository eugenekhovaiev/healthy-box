import { Banner } from '../../components/Banner';
import { Consultation } from '../../components/Consultation';
import { HowItWorks } from '../../components/HowItWorks';
import { Rations } from '../../components/Rations';

export const Home = () => {
  return (
    <main>
      <Banner />
      <HowItWorks />
      <Rations />
      <Consultation />
    </main>
  );
};
