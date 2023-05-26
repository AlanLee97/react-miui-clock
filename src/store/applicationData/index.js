import { createUUID } from "../../utils";

export const AlarmPageData = {
  alarmData: [
    {
      id: createUUID(),
      time: {
        hour: 7,
        min: 0
      },
      triggerMode: '每天',
    },
    {
      id: createUUID(),
      time: {
        hour: 8,
        min: 0
      },
      triggerMode: '每天',
    },
    {
      id: createUUID(),
      time: {
        hour: 9,
        min: 0
      },
      triggerMode: '每天',
    }
  ],
  restData: [
    {
      id: createUUID(),
      time: {
        hour: 7,
        min: 0
      },
      triggerMode: '每天',
    },
  ],
};

export const ClockPageData = {
  clockList: [
    {
      location: '伦敦',
      timegap: -8,
    },
    {
      location: '纽约',
      timegap: -12,
    },
  ]
};
