import React from "react";
import { create } from "react-test-renderer";
import AppNavbar from "../component/navbar/navbar";

describe("Feature component", () => {
    test("it matches the snapshot", () => {
        const component = create(<AppNavbar />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
