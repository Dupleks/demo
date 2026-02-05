const users = [
  {
    username: "standard_user",
    password: "secret_sauce",
    category: "regular",
    description: "Regular user with full access"
  },
  {
    username: "locked_out_user",
    password: "secret_sauce",
    category: "locked",
    description: "User account that is locked out"
  },
  {
    username: "problem_user",
    password: "secret_sauce",
    category: "problematic",
    description: "User that encounters various issues"
  },
  {
    username: "performance_glitch_user",
    password: "secret_sauce",
    category: "performance",
    description: "User that experiences performance delays"
  },
  {
    username: "error_user",
    password: "secret_sauce",
    category: "error",
    description: "User that triggers error states"
  },
  {
    username: "visual_user",
    password: "secret_sauce",
    category: "visual",
    description: "User for visual/UI testing"
  }
];

module.exports = users;
