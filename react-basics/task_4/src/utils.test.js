import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("getFullYear returns the current year", () => {
    const currentyear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentyear);
});

test("getFooterCopy returns correct string when the argument is true", () => {
    expect(getFooterCopy(true)).toBe("ALX");
});

test("getFooterCopy returns corrct string when the argument is false", () => {
    expect(getFooterCopy(false)).toBe("ALX main dashboard")
});

test("getLatestNotification returns correct string", () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});