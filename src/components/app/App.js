import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import { Header } from './../header/Header';
import { About } from '../about/About';
import { Home } from './../home/Home';
import { Preview } from '../preview/Preview';
import { Roadmap } from '../roadmap/Roadmap';
import { Team } from '../team/Team';

import classes from './App.module.scss';

function App() {
  return (
    <>
      <Parallax pages={5}>
        <ParallaxLayer className={classes['app__title']} factor={10} sticky={{ start: 0 }}>
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

          <ParallaxLayer offset={1} speed={0.1}>
            <About />
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={0.1}>
            <Preview />
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={0.1}>
            <Roadmap />
          </ParallaxLayer>

          <ParallaxLayer offset={4} speed={0.1}>
            <Team />
          </ParallaxLayer>
        </main>
      </Parallax>
    </>
  );
}

export default App;
