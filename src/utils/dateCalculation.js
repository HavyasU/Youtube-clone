export const findDiffDate = (publishTime) => {
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
    const firstDate = new Date();
    const secondDate = new Date(publishTime);

    const diffMilliseconds = Math.abs(firstDate - secondDate);
    const diffDays = Math.round(diffMilliseconds / oneDay);

    let days;
    if (diffDays > 365) {
        days = `${Math.floor(diffDays / 365)} years ago`;
    } else if (diffDays > 30) {
        days = `${Math.floor(diffDays / 30)} months ago`;
    } else if (diffDays > 7) {
        days = `${Math.floor(diffDays / 7)} weeks ago`;
    } else {
        days = `${diffDays} days ago`;
    }
    return days;

};