import { configure } from "@storybook/react";

import "../src/style.css";

const req = require.context("../src/components", true, /\.?stories\.tsx?$/);

configure(() => {
  req.keys().forEach(filename => req(filename).default());
}, module);
