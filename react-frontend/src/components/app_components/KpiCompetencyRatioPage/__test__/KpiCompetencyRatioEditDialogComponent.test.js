import React from "react";
import { render, screen } from "@testing-library/react";

import KpiCompetencyRatioEditDialogComponent from "../KpiCompetencyRatioEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders kpiCompetencyRatio edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <KpiCompetencyRatioEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("kpiCompetencyRatio-edit-dialog-component")).toBeInTheDocument();
});
