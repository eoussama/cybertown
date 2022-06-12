import classes from './Title.module.scss';

export function Title(props) {
  const label = props.label || 'Title';
  return (
    <div className={classes.title}>
      <h2 className={classes['title__label']}>{label}</h2>

      <div className={`${classes['title__border']} ${classes['title__border--1']}`}></div>
      <div className={`${classes['title__border']} ${classes['title__border--2']}`}></div>
    </div>
  )
}