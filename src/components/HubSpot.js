import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const HubSpot = () => {
  useEffect(() => {
    if (window.hbspt) {
      window.hbspt.forms.create({
        region: "na1",
        portalId: "40091071",
        formId: "f397edc4-817e-43d0-9288-96add51a1554",
      });
    }
  }, []);

  return (
    <div>
      <Helmet>
        <script
          src="//js.hsforms.net/forms/embed/v2.js"
          type="text/javascript"
          charset="utf-8"
        />
      </Helmet>
      {/* your page content */}
    </div>
  );
};

export default HubSpot;
