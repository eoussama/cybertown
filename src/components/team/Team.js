import { Title } from '../title/Title';
import classes from './Team.module.scss';

export function Team() {
  return (
    <div className={classes.team}>
      <div className={classes['team__wrapper']}>
        <div className={classes['team__head']}>
          <Title label="Team" />
        </div>

        <div className={classes['team__body']}>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  )
}