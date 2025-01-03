import { Delivery } from '../../components/sections/Delivery';
import { Help } from '../../components/sections/Help';
import { UsualBanner } from '../../components/sections/UsualBanner';
import { CalculatorInfo } from './sections/CalculatorInfo';

export const Calculator = () => {
  return (
    <main>
      <UsualBanner pageName="Калькулятор" />
      <CalculatorInfo />
      <Delivery />
      <Help />
    </main>
  );
};
