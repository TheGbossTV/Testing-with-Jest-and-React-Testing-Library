import React from "react";
import UserList from "../UserList";
import { render, screen, within } from "@testing-library/react";
import { test, expect } from "@jest/globals";

const renderComponent = () => {
  const users = [
    { id: 1, name: "jane", email: "jane@doe.com" },
    { id: 2, name: "john", email: "john@doe.com" },
  ];
  render(<UserList users={users} />);

  return { users };
};

test("render one row per user", () => {
  // render the component
  const { users } = renderComponent();

  //screen.logTestingPlaygroundURL(); // <--- this is a helper function to help you debug your tests and find the html elements and queries to use in your tests

  // find all the rows of the table
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  // assert the correct number of rows in the table
  expect(rows).toHaveLength(users.length);
});

test("render the email and name of each user", () => {
  // render the component
  const { users } = renderComponent();

  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
