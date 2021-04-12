export const fetchReservations = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/resrvations',
        // data: {search}
    })
}

export const fetchReservation = reservationId => {
    return $.ajax({
        method: 'GET',
        url: `api/resrvations/${reservationId}`
    })
}

export const createReservation = resrvation => {
    return $.ajax({
        method: 'POST',
        url: 'api/resrvations',
        data: {resrvation}
    })
}

export const updateReservation = resrvation => {
    return $.ajax({
        method: 'PATCH',
        url: `api/resrvations/${resrvation.id}`,
        data: {resrvation}
    })
}

export const deleteReservation = reservationId => {
    return $.ajax({
        method: 'DELETE',
        url: `api/resrvations/${reservationId}`
    })
}