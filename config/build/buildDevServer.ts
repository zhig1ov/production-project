import { BuildOptions } from "./types/config";
import type { Configuration as DevSerberConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevSerberConfiguration {

  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
  }
}