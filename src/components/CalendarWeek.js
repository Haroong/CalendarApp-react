import React from 'react';
import './CalendarWeek.scss';

const CalendarWeek = () => {
  return (
    <div className='CalendarWeek'>
      <table>
        <th>Sun</th>
        <th>Mon</th>
        <th>Tue</th>
        <th>Wed</th>
        <th>Thu</th>
        <th>Fri</th>
        <th>Sat</th>
      </table>
    </div>
  );
};

export default CalendarWeek;
