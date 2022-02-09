import React from "react";
import { useGlobalContext } from "../context";

const Alert = () => {
  const { setAlert } = useGlobalContext();

  return (
    <div className="alert">
      <section className="alerting">
        <p className="alert-info">
          <h3 className="important">Important!</h3>
          <br />
          For this weather app to work you have to allow insecure content
          because searching city will request a http url.
          <br />
          If insecure content (mixed content) is not allowed, app will show "No
          cities matched your search criteria".
          <br />
          If you are using chrome or firefox click on an applicable url below
          and follow the instructions to allow insecure content.
          <br />
          Chrome:
          <a href="https://support.google.com/chrome/answer/95617?hl=en">url</a>
          <br />
          Firefox:
          <a href="https://www.utica.edu/academic/iits/compuserservices/helpsheets/insecurecontenthelp.cfm">
            url
          </a>
        </p>
        <div className="btn-close">
          <button
            className="button"
            onClick={() => {
              setAlert(false);
            }}
          >
            Close
          </button>
        </div>
      </section>
    </div>
  );
};

export default Alert;
