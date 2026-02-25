const kpiCompetencyRatio = require("./kpiCompetencyRatio/kpiCompetencyRatio.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(kpiCompetencyRatio);
    // ~cb-add-configure-service-name~
};
