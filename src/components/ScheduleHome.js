import React from 'react';
import ScheduleForm from './ScheduleCard.js';
import './ScheduleHome.css';

let mock_date = {
  name: 'Open Shift',
  description: 'Open shift for the following day, In need of a rider',
};

export const ScheduleHome = () => {
  return (
    <div className="card_field">
      <ScheduleForm className="card_card" data={mock_date} />
      <ScheduleForm className="card_card" data={mock_date} />
      <ScheduleForm className="card_card" data={mock_date} />
    </div>
  );
};
