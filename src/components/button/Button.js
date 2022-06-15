import { useEffect, useState } from 'react';
import getHash from '../../utils/helpers/hash.helper';
import classes from './Button.module.scss';

export function Button(props) {
  const label = props.label || 'Button';
  const small = props.small || false;

  const smallClass = `${small ? classes['button-wrapper--small'] : ''}`;

  const [hash, setHash] = useState(getHash());

  useEffect(() => {
    const interval = setInterval(() => {
      setHash(getHash());
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <button
      type="button"
      className={`${classes['button-wrapper']} ${smallClass}`}
    >
      <div
        data-augmented-ui="border bl-clip"
        className={classes.button}
      >
        <span className={classes['button__label']}>
          {label}
        </span>
      </div>

      <span className={classes['hash']}>{hash}</span>
    </button>
  )
}
