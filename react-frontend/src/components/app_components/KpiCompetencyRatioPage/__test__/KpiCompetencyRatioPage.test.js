import React from "react";
import { render, screen } from "@testing-library/react";

import KpiCompetencyRatioPage from "../KpiCompetencyRatioPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../../models";

test("renders kpiCompetencyRatio page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <KpiCompetencyRatioPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("kpiCompetencyRatio-datatable")).toBeInTheDocument();
    expect(screen.getByRole("kpiCompetencyRatio-add-button")).toBeInTheDocument();
});
