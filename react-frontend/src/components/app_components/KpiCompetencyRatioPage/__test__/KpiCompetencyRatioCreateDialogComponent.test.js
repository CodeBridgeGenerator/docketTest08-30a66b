import React from "react";
import { render, screen } from "@testing-library/react";

import KpiCompetencyRatioCreateDialogComponent from "../KpiCompetencyRatioCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders kpiCompetencyRatio create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <KpiCompetencyRatioCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("kpiCompetencyRatio-create-dialog-component")).toBeInTheDocument();
});
