import { useEffect, useRef, useState } from 'react';
import getHash from '../../utils/helpers/hash.helper';
import classes from './Button.module.scss';

export function Button(props) {
  const hashTime = 100;

  const label = props.label || 'Button';
  const small = props.small || false;

  const smallClass = `${small ? classes['button-wrapper--small'] : ''}`;

  const [isHovered, setIsHovered] = useState(false);
  const [hash, setHash] = useState(getHash());
  const interval = useRef();

  useEffect(() => {
    if (isHovered) {
      interval.current = setInterval(() => {
        setHash(getHash());
      }, hashTime);
    } else {
      clearInterval(interval.current);
    }

    return () => clearInterval(interval.current);
  }, [isHovered]);

  return (
    <button
      type="button"
      className={`${classes['button-wrapper']} ${smallClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
