import CronEditor from '@tulaoda/cron-editor';

const handleCronChange = (cronExpression) => {
  console.log(cronExpression); //0 0 0 * * ?
};

<CronEditor onChange={handleCronChange} tabType="card" showCrontab={false} value={'0 0 0 * * ?'} />;
