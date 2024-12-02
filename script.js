fetch('https://randomuser.me/api/?gender=male')
  .then(response => response.json())
  .then(data => {
    const user = data.results[0];

    // Set profile picture
    document.getElementById('profile-picture').src = user.picture.large;
  })
  .catch(error => console.error('Error fetching user data:', error));
