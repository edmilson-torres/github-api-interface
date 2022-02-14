import React, { useEffect, useState } from "react";
import Layout from "./components/layout";
import NoSearch from "./components/no-search";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import useGithub from "./hooks/github-hooks";
import { ThemeProvider } from "styled-components";
import {
  lightTheme,
  darkTheme,
  GlobalStyles,
  ToggleTheme,
} from "./global/theme";

const App = () => {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  const { githubState } = useGithub();
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Layout>
          <ToggleTheme>
            <button onClick={toggleTheme}>
              {isDarkTheme ? (
                <span aria-label="Light mode" role="img">
                  🌞
                </span>
              ) : (
                <span aria-label="Dark mode" role="img">
                  🌜
                </span>
              )}
            </button>
          </ToggleTheme>
          {githubState.hasUser ? (
            <>
              {githubState.loading ? (
                <p>Loading</p>
              ) : (
                <>
                  <Profile />
                  <Repositories />
                </>
              )}
            </>
          ) : (
            <NoSearch />
          )}
        </Layout>
      </>
    </ThemeProvider>
  );
};

export default App;
