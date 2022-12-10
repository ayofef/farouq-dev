import * as React from 'react';
import { CONTACT_LINKS } from './constant';
import Link from 'next/link';
import classes from './styled.module.scss';

export const Contact: React.FunctionComponent = () => {
  return (
    <div className={classes.Wrapper}>
      <p className={classes.Title}>LINKS</p>
      <div className={classes.ContactLinks}>
        {CONTACT_LINKS.map(({ url, label }) => {
          return (
            <Link key={label} href={url} target="_blank" rel="noreferrer noopener" className={classes.ContactLink}>
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
