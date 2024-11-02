document.addEventListener('DOMContentLoaded', function() {
  const calendarBody = document.getElementById('calendar-body');
  const currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();

  generateCalendarDays(currentMonth, currentYear);

  document.querySelector('.prev-month').addEventListener('click', function() {
      currentMonth--;
      if (currentMonth < 0) {
          currentMonth = 11;
          currentYear--;
      }
      generateCalendarDays(currentMonth, currentYear);
      updateCalendarHeader(currentMonth, currentYear);
  });

  document.querySelector('.next-month').addEventListener('click', function() {
      currentMonth++;
      if (currentMonth > 11) {
          currentMonth = 0;
          currentYear++;
      }
      generateCalendarDays(currentMonth, currentYear);
      updateCalendarHeader(currentMonth, currentYear);
  });

  function generateCalendarDays(month, year) {
      calendarBody.innerHTML = '';
      const daysInMonth = getDaysInMonth(month, year);
      for (let i = 1; i <= daysInMonth; i++) {
          const calendarDay = document.createElement('div');
          calendarDay.className = 'calendar-day';
          calendarDay.dataset.date = `${year}-${padZero(month + 1)}-${padZero(i)}`;
          calendarDay.innerText = i;
          calendarBody.appendChild(calendarDay);
      }
  }

  function updateCalendarHeader(month, year) {
      const monthNames = [
          'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
          'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ];
      document.querySelector('.month').innerText = `${monthNames[month]} ${year}`;
  }

  function getDaysInMonth(month, year) {
      return new Date(year, month + 1, 0).getDate();
  }

  function padZero(num) {
      return num.toString().padStart(2, '0');
  }

  updateCalendarHeader(currentMonth, currentYear);
});
