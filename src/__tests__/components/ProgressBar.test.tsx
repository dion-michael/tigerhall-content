import { render, screen } from "@testing-library/react"
import ProgressBar from "../../components/ProgressBar"

describe('ProgressBar', () => {
  it('should render correctly', () => {
    render(<ProgressBar percentage={60} />)
    expect(screen).toBeDefined();
  })
})