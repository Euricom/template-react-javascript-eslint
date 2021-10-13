/* eslint-disable arrow-body-style */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const t = (arg: string, options?: any) => {
  return arg;
};

// i18next Context see
// https://www.i18next.com/translation-function/context

const MyComponent = () => {
  return (
    <div>
      <h1>{t('Hello world')}</h1>
      <p>{t('Message', { context: 'ab' })}</p>
      <p>{t('Message', { context: 'xy', count: 1 })}</p>
      <p>{t('Message', { context: 'xy', count: 100 })}</p>
    </div>
  );
};

export default MyComponent;
