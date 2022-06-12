import classes from './Header.module.scss';
import { Button } from '../button/Button';

export function Header() {
  return (
    <header className={classes.header}>
      <div className={classes['header__wrapper']}>
        <div className={classes['header__left']}>
          <div className={classes['header__logo']}>
            <img className={classes['logo']} src="./logo.png" alt="Cybertown logo" />
          </div>
        </div>

        <div className={classes['header__right']}>
          <nav className={classes['header__nav']}>
            <ul className={classes['header__items']}>
              <li className={classes['header__item']}>Home</li>
              <li className={classes['header__item']}>About</li>
              <li className={classes['header__item']}>Roadmap</li>
              <li className={classes['header__item']}>Team</li>
              <li className={classes['header__item']}>
                <Button small={true} label="Connect Wallet" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}