import {useParams, useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchOfferInfoAction, fetchCommentAboutAction, fetchOfferNearbyAction} from '../../store/api-actions';
import {offerInFocusAction} from '../../store/action';
import {useSelector} from 'react-redux';
import {getOfferInfo, getComments, getOffersNearby} from '../../store/app-data/selectors';
import ImagesOfPlace from '../../components/images-of-place/images-of-place';
import AboutPlace from '../../components/about-place/about-place';
import AboutHost from '../../components/about-host/about-host';
import NewCommentForm from '../../components/new-comment-form/new-comment-form';
import ReviewsList from '../../components//reviews-list/reviews-list';
import Map from '../../components/map/map';
import {MAP_PROPERTY} from '../../const';
import {PagesApp, OFFER_IN_PROPERTY} from '../../const';
import OffersList from '../../components/offers-list/offers-list';

type ParamType = {
  id: string,
}

export default function Property(): JSX.Element {
  const dispatch = useDispatch();
  const location = useLocation();
  const param: ParamType = useParams();
  let {id} = param;
  id = id.replace(':', '');

  useEffect(() => {
    dispatch(offerInFocusAction());
    if (id) {
      dispatch(fetchOfferInfoAction(+id));
      dispatch(fetchCommentAboutAction(+id));
      dispatch(fetchOfferNearbyAction(+id));
    }
  }, [dispatch, id, location, param]);

  const offer = useSelector(getOfferInfo);
  const comments = useSelector(getComments);
  const offersNearby = useSelector(getOffersNearby);

  return (
    <div>
      {
        offer &&
        <>
          <section className="property">
            <ImagesOfPlace images={offer.images} />
            <div className="property__container container">
              <div className="property__wrapper">
                <AboutPlace offer={offer} />
                <AboutHost offer={offer} />
                <section className="property__reviews reviews">
                  <ReviewsList reviews={comments} />
                  <NewCommentForm />
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map
                height={MAP_PROPERTY.propertyMapSize.height}
                width={MAP_PROPERTY.propertyMapSize.width}
              />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {
                  offersNearby &&
                  <OffersList
                    offers={offersNearby}
                    classes={OFFER_IN_PROPERTY}
                    page={PagesApp.Property}
                  />
                }
              </div>
            </section>
          </div>
        </>
      }
    </div>
  );
}
