import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import { Header } from './../header/Header';
import { About } from '../about/About';
import { Home } from './../home/Home';

import classes from './App.module.scss';
import { Preview } from '../preview/Preview';

function App() {
  return (
    <>
      <Parallax className={classes.home} pages={2}>
        <ParallaxLayer style={{ height: 'fit-height' }} sticky={{ start: 0 }}>
          <Header />
        </ParallaxLayer>

        <main className={classes['app__body']}>
          <ParallaxLayer speed={-0.2}>
            <Home />
          </ParallaxLayer>

          <ParallaxLayer offset={0.68} speed={0.05}>
            <div className={`${classes['skyline']} ${classes['skyline--5']}`}></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0.7} speed={0.1}>
            <div className={`${classes['skyline']} ${classes['skyline--4']}`}></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0.755} speed={0.2}>
            <div className={`${classes['skyline']} ${classes['skyline--3']}`}></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0.838} speed={0.36}>
            <div className={`${classes['skyline']} ${classes['skyline--2']}`}></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0.98} speed={0.6}>
            <div className={`${classes['skyline']} ${classes['skyline--1']}`}></div>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.2}>
            <About />
          </ParallaxLayer>

          <ParallaxLayer style={{ height: 'fit-height' }} offset={1.5} speed={1}>
            <Preview />
          </ParallaxLayer>
        </main>
      </Parallax>
    </>
  );
}

export default App;
