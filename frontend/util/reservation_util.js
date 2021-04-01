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

export const createReservation = reservation => {
    return $.ajax({
        method: 'POST',
        url: 'api/resrvations',
        data: {reservation}
    })
}

export const updateReservation = reservation => {
    return $.ajax({
        method: 'PATCH',
        url: `api/resrvations/${reservation.id}`,
        data: {reservation}
    })
}

export const deleteReservation = reservationId => {
    return $.ajax({
        method: 'DELETE',
        url: `api/resrvations/${reservationId}`
    })
}