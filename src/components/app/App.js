import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import { Header } from './../header/Header';
import { About } from '../about/About';
import { Home } from './../home/Home';

import classes from './App.module.scss';

function App() {
  return (
    <>
      <Parallax className={classes.home} pages={2}>
        <ParallaxLayer sticky={{ start: 0 }}>
          <Header />
        </ParallaxLayer>

        <main className={classes['app__body']}>
          <ParallaxLayer style={{maxHeight: '925px'}}>
            <Home />
          </ParallaxLayer>

          <ParallaxLayer offset={0.68} speed={0.05} className={classes.test}>
            <div className={`${classes['skyline']} ${classes['skyline--5']}`}></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0.7} speed={0.1} className={classes.test}>
            <div className={`${classes['skyline']} ${classes['skyline--4']}`}></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0.755} speed={0.2} className={classes.test}>
            <div className={`${classes['skyline']} ${classes['skyline--3']}`}></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0.838} speed={0.36} className={classes.test}>
            <div className={`${classes['skyline']} ${classes['skyline--2']}`}></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0.98} speed={0.6} className={classes.test}>
            <div className={`${classes['skyline']} ${classes['skyline--1']}`}></div>
          </ParallaxLayer>

          <ParallaxLayer offset={1.2}>
            <About />
          </ParallaxLayer>
        </main>
      </Parallax>
    </>
  );
}

export default App;
