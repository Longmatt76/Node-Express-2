const {timeWord} = require("./timeWord");

describe("#timeword", () => {
  test("it is a function", () => {
    expect(typeof timeWord).toBe("function");
  });
  test("it's midnight", () => {
    const input = "00:00";
    const expectedOutput = "The time is midnight";
    const output = timeWord(input);
    expect(output).toBe(expectedOutput);
  });
  test("it's 12:12 am", () => {
    const input = "00:12";
    const expectedOutput = "The time is twelve twelve am";
    const output = timeWord(input);
    expect(output).toBe(expectedOutput);
  });
  test("it's 1am", () => {
    const input = "01:00";
    const expectedOutput = "The time is one o'clock am";
    const output = timeWord(input);
    expect(output).toBe(expectedOutput);
  });
  test("it's 6:01 am", () => {
    const input = "06:01";
    const expectedOutput = "The time is six oh one am";
    const output = timeWord(input);
    expect(output).toBe(expectedOutput);
  });
  test("it's 6:10 am", () => {
    const input = "06:10";
    const expectedOutput = "The time is six ten am";
    const output = timeWord(input);
    expect(output).toBe(expectedOutput);
  });
  test("it's 6:18 am", () => {
    const input = "06:18";
    const expectedOutput = "The time is six eighteen am";
    const output = timeWord(input);
    expect(output).toBe(expectedOutput);
  });
  test("it's 6:30 am", () => {
    const input = "06:30";
    const expectedOutput = "The time is six thirty am";
    const output = timeWord(input);
    expect(output).toBe(expectedOutput);
  });
  test("it's 10:34 am", () => {
    const input = "10:34";
    const expectedOutput = "The time is ten thirty four am";
    const output = timeWord(input);
    expect(output).toBe(expectedOutput);
  });
  test("it's noon, wake up already!", () => {
    const input = "12:00";
    const expectedOutput = "The time is noon";
    const output = timeWord(input);
    expect(output).toBe(expectedOutput);
  });
  test("it's 12:09pm", () => {
    const input = "12:09";
    const expectedOutput = "The time is twelve oh nine pm";
    const output = timeWord(input);
    expect(output).toBe(expectedOutput);
  });
  test("it's 11:23pm", () => {
    const input = "23:23";
    const expectedOutput = "The time is eleven twenty three pm";
    const output = timeWord(input);
    expect(output).toBe(expectedOutput);
  });
});
