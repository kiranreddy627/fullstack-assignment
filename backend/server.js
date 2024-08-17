const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// In-memory help center data
const helpCenterData = [
  {
    title: "Branches",
    description: "Abstract Branches lets you manage, version, and document your designs in one place."
  },
  {
    title: "Manage your account",
    description: "Configure your account settings, such as your email, profile details, and password."
  },
  {
    title: "Manage organizations, teams, and projects",
    description: "Use Abstract organizations, teams, and projects to organize your people and your work."
  },
  {
    title: "Manage billing",
    description: "Change subscriptions and payment details."
  },
  {
    title: "Authenticate to Abstract",
    description: "Set up and configure SSO, SCIM, and Just-in-Time provisioning."
  },
  {
    title: "Abstract support",
    description: "Get in touch with a human."
  }
];
const cors = require('cors');
app.use(cors());


// Endpoint to get all help center data
app.get('/api', (req, res) => {
  res.json(helpCenterData);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
