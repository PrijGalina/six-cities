import classnames from 'classnames';

type MenuItemProps = {
  city: string,
  isActive: boolean,
  onStateChange: React.Dispatch<React.SetStateAction<string>>,
};

function MenuItem({city,isActive,onStateChange}: MenuItemProps): JSX.Element {
  return(
    <li className="locations__item">
      <a className={classnames('locations__item-link tabs__item', isActive ? 'tabs__item--active' : '')} href="#/" onClick={() => onStateChange(city)}>
        <span>{city}</span>
      </a>
    </li>
  );
}

export default MenuItem;
