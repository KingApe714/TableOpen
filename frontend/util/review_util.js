export const fetchReviews = () => {
    return $CombinedState.ajax({
        method: 'GET',
        url: 'api/reviews'
    })
}

export const fetchReview = reviewId => {
    return $CombinedState.ajax({
        method: 'GET',
        url: `api/reviews/${reviewId}`
    })
}

export const createReview = review => {
    return $.ajax({
        method: 'POST',
        url: 'api/resrvations',
        data: {review}
    })
}

export const updateReview = review => {
    return $.ajax({
        method: 'PATCH',
        url: `api/resrvations/${review.id}`,
        data: {review}
    })
}

export const deleteReview = reviewId => {
    return $.ajax({
        method: 'DELETE',
        url: `api/resrvations/${reviewId}`
    })
}