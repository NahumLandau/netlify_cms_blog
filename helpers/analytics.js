import ReactGA from "react-ga";

export const initGA = () => {
  console.log("GA init");
  ReactGA.initialize("UA-28962999-5");
};
export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`);
  ReactGA.set({page: window.location.pathname});
  ReactGA.pageview(window.location.pathname);
};
export const logEvent = (category = "", action = "", label = "") => {
  console.log(`Logging event: category -> '${category}', action -> '${action}', label -> '${label}'`);
  if (category && action) {
    ReactGA.event({category, action, label});
  }
};
export const logException = (description = "", fatal = false) => {
  if (description) {
    ReactGA.exception({description, fatal});
  }
};
