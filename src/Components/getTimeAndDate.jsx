function getTimeAndDate(){

    let date = new Date();

    let curr_month = date.getMonth() >= 10 ? date.getMonth() : `0${date.getMonth()}`
    let curr_date = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`
    let curr_year = date.getFullYear();
    
    let curr_hours = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`
    let curr_minutes = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`

    let currDateFull = `${curr_month}/${curr_date}/${curr_year}`;
    let currTimeFull = `${curr_hours}:${curr_minutes}`;

    return { currDateFull, currTimeFull }
}

export default getTimeAndDate;