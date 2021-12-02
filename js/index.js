const counterElement = document.getElementById('counter');
const ageElement = document.getElementById('age');

const today = moment();
const birthday = moment([1999, 11, 2])
const meetupDate = moment([2021, 11, 27])

counterElement.innerHTML = meetupDate.diff(today, 'days');
ageElement.innerHTML = today.diff(birthday, 'years');
