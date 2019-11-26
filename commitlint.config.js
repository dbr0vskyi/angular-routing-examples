module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 50],
    "subject-case": [2, "always", "sentence-case"],
    "subject-min-length": [2, "always", 4],
    "body-max-line-length": [2, "always", 72],
    "footer-min-length": [2, "always", 2],
    "footer-max-length": [2, "always", 15],
  },
};
