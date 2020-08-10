import React from 'react';
import CalendarMonth from './CalendarMonth';
import CalendarWeek from './CalendarWeek';
import './CalendarTemplate.scss';

const CalendarTemplate = () => {
  return (
    <div className='CalendarTemplate'>
      <CalendarMonth />
      <CalendarWeek />
    </div>
  );
};

export default CalendarTemplate;
