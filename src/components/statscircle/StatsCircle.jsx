import './StatsCircle.css';
import React from 'react';

const StatsCircle = ({ number, title }) => {
  return (
    <div className="stats-circle">
      <div className="circle">
        <span>{number}</span>
      </div>
      <p>{title}</p>
    </div>
  );
};
const Stats = () => {
    return (
      <div className="stats">
        <StatsCircle number="9" title="направлений " />
        <StatsCircle number="7" title="направлений " />
        <StatsCircle number="100" title="учеников" />
        <StatsCircle number="3" title="года " />
      </div>
    );
  };
  
  export default Stats;