import React from "react";
import clsx from "clsx";
import {
  ThemeClassNames,
  HtmlClassNameProvider,
} from "@docusaurus/theme-common";
import renderRoutes from "@docusaurus/renderRoutes";
import Layout from "@theme/Layout";
export default function DocsRoot(props) {
  return (
    <HtmlClassNameProvider className={clsx(ThemeClassNames.wrapper.docsPages)}>
      <Layout noFooter>{renderRoutes(props.route.routes)}</Layout>
    </HtmlClassNameProvider>
  );
}
