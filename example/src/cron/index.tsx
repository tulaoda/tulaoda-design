import * as React from 'react'

import CronEditor from 'components/cron-editor'

const Cron = (): React.ReactElement => {
    return <CronEditor showRunTime showCrontab />
}

export default Cron
