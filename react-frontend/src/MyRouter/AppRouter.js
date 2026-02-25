import React from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";

import SingleKpiCompetencyRatioPage from "../components/app_components/KpiCompetencyRatioPage/SingleKpiCompetencyRatioPage";
import KpiCompetencyRatioProjectLayoutPage from "../components/app_components/KpiCompetencyRatioPage/KpiCompetencyRatioProjectLayoutPage";
//  ~cb-add-import~

const AppRouter = () => {
  return (
    <Routes>
      {/* ~cb-add-unprotected-route~ */}
      <Route element={<ProtectedRoute redirectPath={"/login"} />}>
        
<Route path="/kpiCompetencyRatio/:singleKpiCompetencyRatioId" exact element={<SingleKpiCompetencyRatioPage />} />
<Route path="/kpiCompetencyRatio" exact element={<KpiCompetencyRatioProjectLayoutPage />} />
        {/* ~cb-add-protected-route~ */}
      </Route>
    </Routes>
  );
};

const mapState = (state) => {
  const { isLoggedIn } = state.auth;
  return { isLoggedIn };
};
const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(AppRouter);
