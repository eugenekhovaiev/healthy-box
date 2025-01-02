import { Delivery } from '../../components/sections/Delivery';
import { Help } from '../../components/sections/Help';
import { UsualBanner } from '../../components/sections/UsualBanner';
import { RationsInfo } from './sections/RationsInfo';

export const Rations = () => {
  return (
    <main>
      <UsualBanner pageName="Раціони" />
      <RationsInfo />
      <Delivery />
      <Help />
    </main>
  );
};
