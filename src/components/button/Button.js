import { useEffect, useState } from 'react';
import classes from './Button.module.scss';

export function Button(props) {
  const label = props.label || 'Button';
  const [hash, setHash] = useState(getHash());

  useEffect(() => {
    const interval = setInterval(() => {
      setHash(getHash());
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.button}>
      <span className={classes['button__label']}>
        {label}
      </span>

      <span className={classes['button__hash']}>{hash}</span>
    </div>
  )
}

function getHash() {
  return Math.round(Math.random() * 999).toString().padStart(3, '0');
}
