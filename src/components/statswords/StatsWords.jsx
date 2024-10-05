import './StatsWords.css';
import React from 'react';

const StatsWords1 = () => {
  return (
    <div className="statswords1">
        <h1>в школе</h1>  
      </div>)
}
const StatsWords2 = () => {
    return (
      <div className="statswords2">
          <h1>в интенсивах</h1>  
        </div>)
  }
  const StatsWords3 = () => {
    return (
      <div className="statswords3">
          <h1>более</h1>  
        </div>)
  }
  const StatsWords4 = () => {
    return (
      <div className="statswords4">
          <h1>школе</h1>  
        </div>)
  }
  const StatsWords = () => {
    return (
      <div>
        <StatsWords1/>
        <StatsWords2/>
        <StatsWords3/>
        <StatsWords4/>
        </div>)
  }
export default StatsWords;