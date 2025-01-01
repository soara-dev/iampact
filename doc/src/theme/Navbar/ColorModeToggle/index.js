import React from "react";
import clsx from "clsx";
import { useColorMode, useThemeConfig } from "@docusaurus/theme-common";
import ColorModeToggle from "@theme/ColorModeToggle";
import styles from "./styles.module.css";

export default function NavbarColorModeToggle({ className }) {
  const navbarStyle = useThemeConfig().navbar.style;
  const disabled = useThemeConfig().colorMode.disableSwitch;
  const { colorMode, setColorMode } = useColorMode();
  if (disabled) {
    return null;
  }
  return (
    <ColorModeToggle
      className={clsx(className, "toggler-color-mode")}
      buttonClassName={
        navbarStyle === "dark" ? styles.darkNavbarColorModeToggle : undefined
      }
      value={colorMode}
      onChange={setColorMode}
    />
  );
}
