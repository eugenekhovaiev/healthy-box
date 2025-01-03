import classNames from 'classnames';
import { useState } from 'react';

import ArrowOutlined from '@/assets/icons/FAQ/arrow-outlined.svg?react';

import styles from './FAQQuestion.module.scss';

interface FAQQuestionProps {
  className?: string;
  question: string;
  answer: string;
}

export const FAQQuestion = ({
  className,
  question,
  answer,
}: FAQQuestionProps) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      className={classNames(
        styles.faqQuestion,
        {
          [styles.faqQuestion_opened]: isOpened,
        },
        className,
      )}
    >
      <div className={styles.faqQuestion__questionWrapper}>
        <div className={styles.faqQuestion__question}>{question}</div>
        <button
          className={styles.faqQuestion__iconWrapper}
          onClick={() => setIsOpened(!isOpened)}
        >
          <ArrowOutlined className={styles.faqQuestion__icon} />
        </button>
      </div>
      <div className={styles.faqQuestion__answer}>{answer}</div>
    </div>
  );
};
