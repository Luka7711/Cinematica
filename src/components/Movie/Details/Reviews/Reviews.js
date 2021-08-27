import React from "react";
import "./module.reviews.css";
import Text from "./Text";

const Reviews = ({ comments }) => {
  const reviewContent = comments.map((comment, i) => {
    if (i < 4) {
      return (
        <div className="comment-box" key={i}>
          <div className="content">
            <div className="author-icon-container">
              <div className="author">
                <h3>{comment.reviewTitle}</h3>
              </div>
              <div className="rating-container">
                <i className="star icon"></i>
                <span>
                  {comment.authorRating !== undefined
                    ? `${comment.authorRating}/10`
                    : "-/10"}
                </span>
              </div>
            </div>
            <div className="metadata">
              <span className="date">{comment.submissionDate}</span>
            </div>
            <Text context={comment.reviewText} />
            <div className="ui labeled button">
              <div className="ui red button">
                <i className="heart icon"></i> Like
              </div>
              <a className="ui basic red left pointing label">
                {comment.interestingVotes.up}
              </a>
            </div>
          </div>
        </div>
      );
    }
  });
  return (
    <div className="review-container ui comments">
      <h1 className="category-title">Reviews (imdb)</h1>
      {reviewContent}
    </div>
  );
};

export default Reviews;
