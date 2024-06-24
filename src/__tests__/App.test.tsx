import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import App from "../App";
import { PODCAST_QUERY } from "../lib/queries";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from '../theme';
import * as hooks from '../hooks/useDebounce';
import { act } from "react";

const mocks = [
  {
    request: {
      query: PODCAST_QUERY,
      variables: {
        keywords: "aditi"
      }
    },
    result: {
      "data": {
        "contentCards": {
          "edges": [
            {
              "name": "test azure gpt 4 chat api",
              "image": {
                "uri": "https://images.staging.tigerhall.io/users/2023-09-13/7f7ec0b5-c32c-4f70-89ed-c7f80925c449-460114c6-a8d7-498c-8541-567e82bc4069.png"
              },
              "categories": [
                {
                  "name": "category Enola"
                },
                {
                  "name": "category Loyal"
                }
              ],
              "timeSpentOnByUsers": 0,
              "length": 679,
              "hostedBy": null
            },
          ]
        }
      }
    }
  }
];

window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener: function () { },
    removeListener: function () { }
  };
};

jest.useFakeTimers()

it("renders without error", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={true}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </MockedProvider>
  );
  console.log(screen.debug())
  expect(await screen.findByText("Loading...")).toBeInTheDocument();
  jest.runAllTimers();
  const searchbar = screen.getByPlaceholderText('search');
  fireEvent.change(searchbar, { target: { value: 'aditi' } });
});