import { Title } from '../title/Title';
import classes from './Team.module.scss';
import { team } from './../../utils/consts/team.const';
import Tilt from 'react-parallax-tilt';

export function Team() {

  const members = team.map((member, i) => (
    <Tilt
      className={classes['parallax']}
      perspective={500}
      glareEnable={false}
      scale={1.3}
    >
      <div
        key={i}
        className={classes['member']}
      >
        <div
          className={classes['member__wrapper']}
          data-augmented-ui="border bl-clip tl-2-clip-x"
        >
          <div className={classes['member__picture']}>
            <img src={member.picture} alt={member.name + "'s picture"} className='picture'></img>
          </div>
        </div>

        <div className={classes['member__name']}>
          {member.name}
        </div>
      </div>
    </Tilt>
  ));

  return (
    <div className={classes.team}>
      <div className={classes['team__wrapper']}>
        <div className={classes['team__head']}>
          <Title label="Team" />
        </div>

        <div className={classes['team__body']}>
          <p className={classes['team__description']}>
            Ri sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
          </p>

          <div className={classes['team__members']}>
            {members}
          </div>
        </div>
      </div>
    </div >
  )
}