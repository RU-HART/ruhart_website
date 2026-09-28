import "./calendar.css";
function CalendarSection() {
  return (
    <div className="calendar-section">
      <h2 className="calendar-title">Upcoming Events</h2>
      <div className="calendar-divider" />
      <div className="calendar-wrapper">
      <iframe src="https://calendar.google.com/calendar/embed?src=4026bdbf7aee4b4f0b2cdfbcffb3756356542048420e7d409f004be04a60794d%40group.calendar.google.com&ctz=America%2FNew_York" width="800" height="600" scrolling="no"></iframe>
      </div>
    </div>
  );
}

export default CalendarSection;