import React, { useState } from "react";

const Theme = () => {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  if (!localStorage.theme)
    prefersDarkScheme.matches
      ? localStorage.setItem("theme", "dark")
      : localStorage.setItem("theme", "light");

  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  document.documentElement.setAttribute("dataTheme", theme);
  localStorage.theme = theme;
  const ChangeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <div className="switch-cnt">
      <input
        onClick={ChangeTheme}
        className="switch-inp"
        type="checkbox"
        id="theme"
      />
      <label className="switch-lbl" htmlFor="theme"></label>
    </div>
  );
};

export default Theme;
