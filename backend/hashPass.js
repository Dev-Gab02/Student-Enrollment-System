import bcrypt from 'bcryptjs'

const password = "admin123";

bcrypt.hash(password, 10)
  .then(hash => {
    console.log(hash);
  });

// student123 - $2b$10$QuB6DhZkQtjFRSoNPLfYjO7ulQdJ6w8mYquVOTvuEeDFADok8za.W
// admin123 - $2b$10$QkFyDK5N14JKupST2Q7rEesA3Oki39txsukg93y6Am5qsJLj3MR1G