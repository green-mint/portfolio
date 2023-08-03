import path from "path";
import { buildConfig } from "payload/config";
import Projects from "./collections/Projects";

export default buildConfig({
  collections: [Projects],
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "./payload-types.ts"),
  },
});
