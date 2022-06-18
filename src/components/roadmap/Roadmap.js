import { Title } from '../title/Title';
import classes from './Roadmap.module.scss';

export function Roadmap() {
  return (
    <div className={classes.roadmap}>
      <div className={classes['roadmap__wrapper']}>
        <div className={classes['roadmap__head']}>
          <Title label="Roadmap" />
        </div>

        <div className={classes['roadmap__body']}>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  )
}