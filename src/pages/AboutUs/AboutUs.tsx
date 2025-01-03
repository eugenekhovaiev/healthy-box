import { Delivery } from '../../components/sections/Delivery';
import { Help } from '../../components/sections/Help';
import { UsualBanner } from '../../components/sections/UsualBanner';
import { AboutUsInfo } from './sections/AboutUsInfo';

export const AboutUs = () => {
  return (
    <main>
      <UsualBanner pageName="Про нас" />
      <AboutUsInfo />
      <Delivery />
      <Help />
    </main>
  );
};
