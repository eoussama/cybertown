import { Title } from '../title/Title';
import classes from './About.module.scss';

export function About() {
  return (
    <div className={classes.about}>
      <div className={classes['about__wrapper']}>
        <div className={classes['about__head']}>
          <Title label="About" />
        </div>

        <div className={classes['about__body']}>
          <div className={classes['about__left']}>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
              ratione voluptatem sequi nesciunt.
            </p>

            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
              adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
              quo voluptas nulla pariatur?
            </p>

            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
            </p>
          </div>

          <div className={classes['about__right']}>
            <img className={classes['about__building']} src="./images/building.png" alt="Cyber building" />
          </div>
        </div>
      </div>
    </div>
  )
}