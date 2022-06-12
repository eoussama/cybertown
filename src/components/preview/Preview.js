import { Title } from '../title/Title';
import classes from './Preview.module.scss';

export function Preview() {
  return (
    <div className={classes.preview}>
      <div className={classes['preview__wrapper']}>
        <div className={classes['preview__head']}>
          <Title label="Preview" />
        </div>

        <div className={classes['preview__body']}>
          Preview
        </div>
      </div>
    </div>
  )
}