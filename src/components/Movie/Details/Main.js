import React, { Fragment, useState, useEffect } from "react";
import "./module.details.css";
import UiList from "./UiList";
import CastList from "./CastList";
import instance from "../../../apis/movies";
import Carousel from "./Carousel";
import Reviews from "./Reviews/Reviews";
import Trailer from "./Trailer";

const Main = ({ mainDetails }) => {
  const [cast, setCast] = useState([]);
  const [castids, setCastids] = useState(mainDetails.details.cast_ids);

  useEffect(() => {
    getNames(castids);
    return () => {
      setCast([]);
    };
  }, [castids]);

  const getNames = async (castids) => {
    let castData = [];
    for (let i = 0; i < 10; i++) {
      let currentId = await castids[i].split("/");
      let response = await instance.getCast(`/get-bio?nconst=${currentId[2]}`);
      castData.push(response.data);
    }
    setCast(castData);
  };

  return (
    <Fragment>
      <Trailer movieid={mainDetails.details.id} />
      <div className="main-container">
        <div className="event-content">
          <div className="ui list event-container">
            <div className="item">
              <h1 className="movie-title">{mainDetails.event.title}</h1>
            </div>
          </div>
          <div className="root-container">
            <div className="poster-photos-container">
              <div className="detail-sub">
                <div className="detail-sub-1">
                  <UiList poster={mainDetails.details.title.image.url} />
                  <UiList ratings={mainDetails.details.ratings.rating} />
                </div>

                <div className="detail-sub-2">
                  <div className="ui horizontal list">
                    <UiList genres={mainDetails.details.genres} />
                  </div>
                  <div className="ui list">
                    <div className="item">
                      {mainDetails.details.plotOutline.text}
                    </div>
                  </div>
                  <UiList cast={cast} />
                  <div className="ui list">
                    <h3 className="event-title">Event details</h3>
                    <div className="event-date-address">
                      <UiList address={mainDetails.event.park_address} />
                      <UiList dates={mainDetails.event.date} />
                    </div>
                  </div>
                </div>
              </div>
              <Carousel images={mainDetails.details.images} />
              <Reviews comments={mainDetails.details.reviews.reviews} />
            </div>
            <CastList cast={cast} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
