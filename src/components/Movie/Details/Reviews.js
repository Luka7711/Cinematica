import React from "react";
import "./module.reviews.css";

const Reviews = ({ comments }) => {
  const reviewContent = comments.map((comment, i) => {
    return (
      <div className="comment-box">
        <div className="content">
          <div className="author-icon-container">
            <div className="author">
              <h3>{comment.reviewTitle}</h3>
            </div>
            <div className="rating-container">
              <i class="star icon">{`${comment.authorRating}/10`}</i>
            </div>
          </div>
          <div className="metadata">
            <span className="date">{comment.submissionDate}</span>
          </div>
          <div className="text">{comment.reviewText.substr(0, 300)}</div>
          <div class="ui labeled button" tabindex="0">
            <div class="ui red button">
              <i class="heart icon"></i> Like
            </div>
            <a class="ui basic red left pointing label">
              {comment.interestingVotes.up}
            </a>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="review-container ui comments">
      <h1 className="category-title">Reviews</h1>
      {reviewContent}
    </div>
  );
};

export default Reviews;
