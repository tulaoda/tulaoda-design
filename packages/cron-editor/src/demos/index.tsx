import CronEditor from '@tulaoda/rc-cron-editor';

const Cron = () => {
  const handleCronChange = (cronExpression) => {
    console.log(cronExpression);
  };

  return (
    <CronEditor
      onChange={handleCronChange}
      tabType="card"
      showCrontab={false}
      value={'0 0 0 * * ?'}
    />
  );
};

export default Cron;
