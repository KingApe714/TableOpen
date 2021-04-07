import React from 'react';

export const timeInterval = (hoursOfOp) => {
    if (hoursOfOp) {
        let [start, end] = hoursOfOp.split(' - ');
        let [startHour, startMinute] = start.split(':');
        let [endHour, endMinute] = end.split(':');
        if (startMinute[2] === 'p') startHour = parseInt(startHour) + 12
        if (endMinute[2] === 'p') endHour = parseInt(endHour) + 12
        let times = [];
        for (let i = startHour; i <= endHour; i++) {
            let h = i;
            let suffix = 'am';
            let option;
            if (h >= 12) suffix = 'pm';
            if (h > 12) h -= 12;
            if (i === startHour && startMinute[0] === '3') {
                option = h + ":30" + suffix
                times.push(<option key={option}>{option}</option>)
            } else if (i === endHour && endMinute[0] === '0'){
                option = h + ":00" + suffix
                times.push(<option key={option}>{option}</option>)
            } else {
                option = h + ":00" + suffix
                times.push(<option key={option}>{option}</option>)
                option = h + ":30" + suffix
                times.push(<option key={option}>{option}</option>)
            }
        }
        return times;
    }
}

export const handleTime = (currentUserId, restaurantId, state) => {
    //return an object with the correct key names and correct values
    //state has guest_count in it and date and time separately
    //lets bring it all together
    let [year, month, day] = state.date.split('-')
    let [hour, minute] = state.time.split(':');
    if (minute[2] === 'p') hour = parseInt(hour) + 12;
    minute = minute[0] + minute[1];
    let time = hour + ' ' + minute;
    // let reservation_date_time = state.date.split('-').join(' ') + ' ' + time;
    let reservation_date_time = new Date(year, month, day, hour, minute)
    debugger
    return {
        restaurant_id: restaurantId,
        guest_id: currentUserId,
        guest_count: state.guest_count,
        reservation_date_time: reservation_date_time
    }
}