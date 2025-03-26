import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Page from ".";

describe("Page", () => {
    it("renders title and children", () => {
        const title = "Test Title";
        const children = "Test Children";
        const { getByText } = render(
            <Page title={title}>
                <div>{children}</div>
            </Page>
        )

        const titleElement = getByText(title);
        const childrenElement = getByText(children);

        expect(titleElement).toBeInTheDocument();
        expect(childrenElement).toBeInTheDocument();
    });

    it("renders the correct styling", () => {
        const title = "Test Title";
        const children = "Test Children";
        const { getByTestId } = render(<Page title={title}>{children}</Page>)

        const container = getByTestId("page-container");
        
        expect(container).toHaveStyle(`
            background-color: #f8f8f8;
        `);
    });
});
