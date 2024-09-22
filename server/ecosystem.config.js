module.exports = {
    apps: [
      {
        name: "project-manageMATE",
        script: "npm",
        args: "run dev",
        env: {
          NODE_ENV: "development",
        },
      },
    ],
  };