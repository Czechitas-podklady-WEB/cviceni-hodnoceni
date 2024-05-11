import { useState } from 'react';
import './style.css';

export const Star = ( {value, glowing, onSelect} ) => {  
  // const [glowing, setGlowing] = useState(false);
  
  const handleClick = () => {
    // setGlowing(true)
    onSelect(value)
  }

  const starClass = glowing
    ? 'rating__star rating__star--on'
    : 'rating__star';

  return (
    <div className={starClass} onClick={handleClick}></div>
  );
};
