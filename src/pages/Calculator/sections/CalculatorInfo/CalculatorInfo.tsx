import classNames from 'classnames';

import { CalculatorForm } from './CalculatorForm';
import { FAQQuestion } from '../../../../components/shared/FAQQuestion';

import leaf1 from '@/assets/images/howItWorks/leaf1.png';
import leaf2 from '@/assets/images/howItWorks/leaf2.png';

import styles from './CalculatorInfo.module.scss';

export const CalculatorInfo = () => {
  return (
    <section className={styles.calculatorInfo}>
      <div className={styles.calculatorInfo__leaf1}>
        <img src={leaf1} alt="Leaf" />
      </div>
      <div className={styles.calculatorInfo__leaf2}>
        <img src={leaf2} alt="Leaf" />
      </div>
      <div
        className={classNames('container', styles.calculatorInfo__container)}
      >
        <CalculatorForm />
        <div className={styles.calculatorInfo__faq}>
          <FAQQuestion
            question="Чи потрібно буде постійно їсти одні й ті самі страви?"
            answer="Раціон правильного харчування складено на 4 тижні, і містять в собі різноманітні страви."
          />
          <FAQQuestion
            question="Які продукти використовуються для приготування ваших раціонів?"
            answer="Ми використовуємо тільки свіжі інгредієнти, багаті на необхідні мікроелементи, білки, та корисні жири. Усі страви розроблені для підтримки здоров'я та гарного самопочуття."
          />
          <FAQQuestion
            question="Як правильно організувати режим харчування?"
            answer="На кожному боксі зі стравою зазначено якому прийому їжі кожен відповідає."
          />
          <FAQQuestion
            question="Що робити, якщо я маю алергію на певні продукти?"
            answer="Ми безкоштовно замінюємо 1 інгредієнт у Вашому харчуванні, який Ви не переносите або маєте на нього алергію. Просто повідомте нас про це при замовленні."
          />
        </div>
      </div>
    </section>
  );
};
