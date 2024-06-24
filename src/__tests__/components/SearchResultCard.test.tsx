import { render, screen } from "@testing-library/react"
import ProgressBar from "../../components/ProgressBar"
import SearchResultCard from "../../components/SearchResultCard"

const cardData = {
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
  "hostedBy": [
    { firstName: 'dion', lastName: 'agoes', company: 'tigerhall' }
  ]
};

describe('ProgressBar', () => {
  it('should render correctly', () => {
    render(<SearchResultCard cardData={cardData} />)
    expect(screen).toBeDefined();
    expect(screen.getByText('test azure gpt 4 chat api')).toBeInTheDocument();
  })
})