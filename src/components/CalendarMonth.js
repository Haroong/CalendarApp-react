import React from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr';
import './CalendarMonth.scss';

const CalendarMonth = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  let getMonth = today.getMonth();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let currentMonth = monthNames[getMonth];

  const onClickButtonLeft = () => {
    getMonth--;
    currentMonth = monthNames[getMonth];
  };

  const onClickButtonRight = () => {};

  return (
    <div className='calendarHeader'>
      <button onClick={onClickButtonLeft}>
        <GrPrevious />
      </button>
      <h2 className='calendarMonth'>
        {currentMonth}, {currentYear}
      </h2>
      <button onClick={onClickButtonRight}>
        <GrNext />
      </button>
    </div>
  );
};

export default CalendarMonth;
