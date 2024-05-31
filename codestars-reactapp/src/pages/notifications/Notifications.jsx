import React from 'react';
import Navigation from '../../components/navigation/Navigation';

const notifications = [
  {
    id: 1,
    name: "Ava Carter",
    message: "Posted a comment",
    time: "01:00 p.m",
    date: "Today",
    avatar: "src/assets/images/notif-images-avatar/ar-girl1.jpeg"
  },
  {
    id: 2,
    name: "Sophia Martinez",
    message: "Started following you",
    time: "12:00 p.m",
    date: "Today",
    avatar: "src/assets/images/notif-images-avatar/ar-girl2.jpeg"
  },
  {
    id: 3,
    name: "Emily Johnson",
    message: "Liked your comment",
    time: "01:00 p.m",
    date: "Yesterday",
    avatar: "src/assets/images/notif-images-avatar/ar-girl3.jpeg"
  },
  {
    id: 4,
    name: "Mia Robinson",
    message: "Liked Emily Johnson's comment",
    time: "01:00 p.m",
    date: "25.05.2024",
    avatar: "src/assets/images/notif-images-avatar/ar-girl4.jpeg"
  }
];

const groupedNotifications = notifications.reduce((groups, notification) => {
  const { date } = notification;
  if (!groups[date]) {
    groups[date] = [];
  }
  groups[date].push(notification);
  return groups;
}, {});

const NotificationItem = ({ notification }) => (
  <div className="notification__item">
    <img className="w-12 h-12 rounded-full mr-4" src={notification.avatar} alt={notification.name} />
    <div className="flex-1">
      <p className="text-base text-navBg font-semibold">{notification.name}</p>
      <p className="text-xs text-gray-600">{notification.message}</p>
    </div>
    <div className="text-right">
      <p className="text-sm text-orange-500">{notification.time}</p>
      <p className="text-sm text-gray-500">{notification.date}</p>
    </div>
  </div>
);

const Notifications = () => {
  return (
    <div>
      <div className="Notifications__container">
        <h2 className="notifications__title">Notifications</h2>
        {Object.keys(groupedNotifications).map(date => (
          <div key={date}>
            <h3 className="notifications__date">{date}</h3>
            {groupedNotifications[date].map(notification => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
          </div>
        ))}
      </div>

      <div>
        <Navigation />
      </div>
    </div>
  );
};

export default Notifications;
