const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;


app.use(cors({origin:'https://azurewebapp12-f2cmbuffa2gvfbaw.canadacentral-01.azurewebsites.net'})); // Important for allowing frontend access

const menuItems = [
  { id: 1, name: 'Margherita Pizza', price: 12, image: '🍕' },
  { id: 2, name: 'Cheeseburger', price: 9, image: '🍔' },
  { id: 3, name: 'Caesar Salad', price: 6, image: '🥗' },
  { id: 4, name: 'Pasta Alfredo', price: 11, image: '🍝' },
];

app.get('/', (req, res) => {
  res.send("Hii welcome to home page");
});

app.get('/menu', (req, res) => {
  res.json(menuItems);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
