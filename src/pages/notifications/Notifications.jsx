import React, { useState } from 'react';
import Navigation from '../../components/navigation/Navigation';

const notifications = [
  {
    id: 1,
    name: "Ava Carter",
    message: "Posted a comment",
    time: "01:00 p.m",
    date: "Today",
    avatar: "./src/assets/images/notif-images-avatar/ar-girl1.jpeg"
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
  },
  {
    id: 5,
    name: "Liam Smith",
    message: "Shared your post",
    time: "11:00 a.m",
    date: "Today",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    id: 6,
    name: "Olivia Brown",
    message: "Commented on your photo",
    time: "10:30 a.m",
    date: "Today",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    id: 7,
    name: "Noah Davis",
    message: "Liked your photo",
    time: "09:45 a.m",
    date: "Today",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    id: 8,
    name: "Isabella Wilson",
    message: "Mentioned you in a comment",
    time: "09:00 a.m",
    date: "Today",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    id: 9,
    name: "James Jones",
    message: "Started following you",
    time: "08:30 a.m",
    date: "Yesterday",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    id: 10,
    name: "Charlotte Garcia",
    message: "Posted a new photo",
    time: "08:00 a.m",
    date: "Yesterday",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg"
  },
  {
    id: 11,
    name: "Benjamin Miller",
    message: "Commented on your post",
    time: "07:45 a.m",
    date: "Yesterday",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    id: 12,
    name: "Amelia Martinez",
    message: "Liked your video",
    time: "07:00 a.m",
    date: "Yesterday",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    id: 13,
    name: "Ethan Hernandez",
    message: "Shared your story",
    time: "06:30 a.m",
    date: "Yesterday",
    avatar: "https://randomuser.me/api/portraits/men/13.jpg"
  },
  {
    id: 14,
    name: "Mia White",
    message: "Liked your photo",
    time: "06:00 a.m",
    date: "25.05.2024",
    avatar: "https://randomuser.me/api/portraits/women/14.jpg"
  },
  {
    id: 15,
    name: "Alexander Lee",
    message: "Started following you",
    time: "05:45 a.m",
    date: "25.05.2024",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg"
  },
  {
    id: 16,
    name: "Harper Clark",
    message: "Commented on your post",
    time: "05:30 a.m",
    date: "25.05.2024",
    avatar: "https://randomuser.me/api/portraits/women/16.jpg"
  },
  {
    id: 17,
    name: "Lucas Lewis",
    message: "Liked your comment",
    time: "05:00 a.m",
    date: "25.05.2024",
    avatar: "https://randomuser.me/api/portraits/men/17.jpg"
  },
  {
    id: 18,
    name: "Evelyn Walker",
    message: "Shared your post",
    time: "04:30 a.m",
    date: "24.05.2024",
    avatar: "https://randomuser.me/api/portraits/women/18.jpg"
  },
  {
    id: 19,
    name: "Mason Young",
    message: "Started following you",
    time: "04:00 a.m",
    date: "24.05.2024",
    avatar: "https://randomuser.me/api/portraits/men/19.jpg"
  },
  {
    id: 20,
    name: "Ella Hall",
    message: "Liked your video",
    time: "03:30 a.m",
    date: "24.05.2024",
    avatar: "https://randomuser.me/api/portraits/women/20.jpg"
  },
  {
    id: 21,
    name: "Logan Allen",
    message: "Posted a comment",
    time: "03:00 a.m",
    date: "24.05.2024",
    avatar: "https://randomuser.me/api/portraits/men/21.jpg"
  },
  {
    id: 22,
    name: "Avery Scott",
    message: "Started following you",
    time: "02:30 a.m",
    date: "24.05.2024",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    id: 23,
    name: "Henry Wright",
    message: "Shared your story",
    time: "02:00 a.m",
    date: "24.05.2024",
    avatar: "https://randomuser.me/api/portraits/men/23.jpg"
  },
  {
    id: 24,
    name: "Sofia Green",
    message: "Liked your post",
    time: "01:30 a.m",
    date: "24.05.2024",
    avatar: "https://randomuser.me/api/portraits/women/24.jpg"
  },
  {
    id: 25,
    name: "Jack Adams",
    message: "Commented on your photo",
    time: "01:00 a.m",
    date: "24.05.2024",
    avatar: "https://randomuser.me/api/portraits/men/25.jpg"
  }
];
const NotificationItem = ({ notification }) => (
  <div className="notification__item flex items-center p-2 border-b border-gray-200">
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
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredNotifications = notifications.filter(notification =>
    notification.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notification.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notification.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedFilteredNotifications = filteredNotifications.reduce((groups, notification) => {
    const { date } = notification;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(notification);
    return groups;
  }, {});

  return (
    <div>
      <div className="Notifications__container p-4">
        <h2 className="notifications__title text-xl font-bold mb-4">Notifications</h2>
        <input 
          type="text" 
          placeholder="Search notifications..." 
          value={searchTerm}
          onChange={handleSearch}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        {Object.keys(groupedFilteredNotifications).map(date => (
          <div key={date}>
            <h3 className="notifications__date text-lg font-semibold mt-4 mb-2">{date}</h3>
            {groupedFilteredNotifications[date].map(notification => (
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
