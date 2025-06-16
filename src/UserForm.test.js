import React from "react";
import UserForm from "./components/UserForm";
import { test, expect, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

test("It shows 2 inputs and a button", () => {
  // render the component
  render(<UserForm />);

  // Manipulate the component or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Assertion - make sure the component is doing what we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("It calls onAddUser when the form is submitted", async () => {
  const mock = jest.fn();

  // Render the component
  render(<UserForm onAddUser={mock} />);

  // Find the two inputs
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  // SImulate typing a name
  await user.click(nameInput);
  await user.keyboard("jane");

  // Simulate typing an email
  await user.click(emailInput);
  await user.keyboard("jane@doe.com");

  // Find the button
  const button = screen.getByRole("button");

  // Simulate clicking the button
  await user.click(button);

  // Assert that the onAddUser function was called with the correct arguments
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: "jane", email: "jane@doe.com" });
});
