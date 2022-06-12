import classes from './Home.module.scss';
import Particles from "react-tsparticles";
import starsParticles from '../../utils/particles/stars.particles';

export function Home() {
  return (
    <div className={classes.home}>
      <div className={classes['home__wrapper']}>
        <div className={classes['home__left']}>
          <div className={classes['home__content']}>
            <div className={classes['home__title']}>
              <img className={classes['title']} src="./images/logo-animated.gif" alt="Cybertown logo" />
            </div>

            <div className={classes['home__subtitle']}>
              <p className={classes['subtitle']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        <div className={classes['home__right']}>
          <img className={classes['home__building']} src="./images/building.png" alt="Cyber building" />
        </div>
      </div>

      <div className={classes['home__stars']}></div>

      <div className={classes['home__particles']}>
        <Particles id="starsParticles" options={starsParticles} />
      </div>
    </div>
  )
}
