
import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import { render, screen } from "@testing-library/react";
import Clock from "../modules/alwaysOnScreen/clock.jsx";

const fixedDate = new Date("2025-07-10T14:30:00");

describe("Clock", () => {

    beforeAll(() => {
        vi.useFakeTimers();
        vi.setSystemTime(fixedDate);
    });

    afterAll(() => {
        vi.useRealTimers();
    });

    it("renders current time and date", () => {
        render(<Clock />);

        const expectedTime = fixedDate.toLocaleTimeString();
        const expectedDate = fixedDate.toLocaleDateString();

        expect(screen.getByText(expectedTime)).toBeDefined();
        expect(screen.getByText(expectedDate)).toBeDefined();
    });
});
