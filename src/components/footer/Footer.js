import classes from './Footer.module.scss';
import { social } from './../../utils/consts/social.const';


export function Footer() {

  const socialsHtml = social.map((e, i) => (
    <a
      key={i}
      href={e.link}
      target="_blank"
      title={e.label}
      rel="noreferrer"
      className={classes.footer__social}
    >
      <e.icon />
    </a>
  ));

  return (
    <>
      <div className={classes.footer}>
        <div
          className={classes.footer__wrapper}
          data-augmented-ui="border tl-clip"
        >
          <div className={classes.footer__socials}>
            {socialsHtml}
          </div>
         
          <div className={classes.footer__description}>
            <p>
              piditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
            </p>

            <p>
              Cybertown &#169; 2022
            </p>
          </div>
        </div>

        <div className={classes.footer__shadow}></div>
      </div>
    </>
  )
}