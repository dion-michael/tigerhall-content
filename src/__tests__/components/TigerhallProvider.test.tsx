import { render, screen } from "@testing-library/react"
import TigerhallApolloProvider from "../../components/TigerhallApolloProvider";

describe('ProgressBar', () => {
  it('should render correctly', () => {
    render(<TigerhallApolloProvider>hello</TigerhallApolloProvider>)
    expect(screen).toBeDefined();
    expect(screen.getByText('hello')).toBeInTheDocument();
  })
})