import * as ReviewAPIUtil from '../util/review_uti';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveAllReviews = (reviews) => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
})

const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
})

const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const fetchReviews = () => (
    ReviewAPIUtil.fetchReviews()
        .then(reviews => dispatchEvent(receiveAllReviews(reviews)))
)

// export const fetchReview

export const createReview = (review) => (
    ReviewAPIUtil.createReview(review)
        .then(review => dispatchEvent(receiveReview(review)))
)

export const updateReview = (review) => dispatch => (
    ReviewAPIUtil.updateReview(review)
        .then(review => dispatch(receiveReview(review)))
)

export const deleteReview = (reviewId) => dispatch => (
    ReviewAPIUtil.deleteReview(reviewId)
        .then(() => dispatch(removeReview(reviewId)))
)