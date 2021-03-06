import {Link} from 'react-router-dom';
import {LOGO_PROPERTY} from '../../const';
import cn from 'classnames';

type LogoProperty = {
  width: string,
  height: string,
}

type LogoProps = {
  place: LogoProperty,
}

export default function Logo({place}: LogoProps): JSX.Element {
  const linkClass = cn (
    {
      'footer__logo-link': place === LOGO_PROPERTY.footer,
      'header__logo-link': place === LOGO_PROPERTY.header,
    },
  );

  const imgClass = cn (
    {
      'footer__logo': place === LOGO_PROPERTY.footer,
      'header__logo': place === LOGO_PROPERTY.header,
    },
  );

  return (
    <Link className={linkClass} to="/">
      <img className={imgClass} src="img/logo.svg" alt="6 cities logo" width={place.width} height={place.height}/>
    </Link>
  );
}
