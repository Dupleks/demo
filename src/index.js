const express = require("express");
const users = require("./users");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Search users by category
app.get("/api/users/search", (req, res) => {
  const { category, username } = req.query;

  if (!category && !username) {
    return res.status(400).json({
      error: "Please provide a 'category' or 'username' query parameter"
    });
  }

  let results = users;

  if (category) {
    results = results.filter(
      (user) => user.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (username) {
    results = results.filter((user) =>
      user.username.toLowerCase().includes(username.toLowerCase())
    );
  }

  if (results.length === 0) {
    return res.status(404).json({
      message: "No users found matching the search criteria"
    });
  }

  res.json({
    count: results.length,
    users: results
  });
});

// Get all users
app.get("/api/users", (req, res) => {
  res.json({
    count: users.length,
    users: users
  });
});

// Get all categories
app.get("/api/categories", (req, res) => {
  const categories = [...new Set(users.map((user) => user.category))];
  res.json({ categories });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("\nAvailable endpoints:");
  console.log("  GET /api/users              - Get all users");
  console.log("  GET /api/users/search       - Search users by category or username");
  console.log("  GET /api/categories         - Get all available categories");
  console.log("\nExample searches:");
  console.log("  /api/users/search?category=regular");
  console.log("  /api/users/search?username=standard");
});
