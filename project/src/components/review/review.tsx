
import {ReviewType} from '../../types/review';
import dayjs from 'dayjs';
import {getRatingStyle} from '../../utils';

type ReviewItemProps = {
  review: ReviewType,
}

export default function Review({review}: ReviewItemProps): JSX.Element {
  const {comment, user, date, rating} = review;

  const FormatsOfDate = {
    formatedDateShort: dayjs(date).format('MMMM YYYY'),
    formatedDateFull: dayjs(date).format('YYYY-MM-DD'),
  };

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width:`${getRatingStyle(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={FormatsOfDate.formatedDateFull}>{FormatsOfDate.formatedDateShort}</time>
      </div>
    </li>
  );
}
