const date = new Date();

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const today = days[date.getDay()];

const updateTime = () => {
  const date = new Date();
  const utcTime = date.toISOString().substr(11, 8);
  timeUtc.textContent = utcTime;
};

const todayTag = document.getElementById('today');
const timeUtc = document.getElementById('utc');

todayTag.textContent = today;

setInterval(updateTime, 1000);