import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./components/UI/Logo";

const config: DocsThemeConfig = {
  logo: (
    <>
      <Logo />
    </>
  ),
  project: {
    link: "https://github.com/zakiego",
  },
  docsRepositoryBase: "https://github.com/zakiego/adv",
  // footer: {
  //   text: "Nextra Docs Template",
  // },
};

export default config;
