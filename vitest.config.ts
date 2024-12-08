/// <reference types="vitest" />
import { mergeConfig, defineConfig } from 'vite';

import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
        environment: "jsdom",
        coverage: {
          provider: "v8",
        },
    }
}));