const forYouBtn = document.getElementById('forYouBtn');
const followingBtn = document.getElementById('followingBtn');
const movingBox = document.querySelector('.moving__box');

forYouBtn.addEventListener('click', () => {
  movingBox.style.left = '0';
});

followingBtn.addEventListener('click', () => {
  movingBox.style.left = '50%';
});

//  const forYouBtn = document.getElementById('forYouBtn');
// const followingBtn = document.getElementById('followingBtn');
// const movingBox = document.querySelector('.moving__box');

// forYouBtn.addEventListener('click', () => {
//     movingBox.style.left = '0';
// });

// followingBtn.addEventListener('click', () => {
//     movingBox.style.left = '50%';
// });



