import { render, screen } from "@testing-library/react"
import MOCK_DATA from "../mocks/resCardMock.json"
import RestaurantCard , {withPromotedLabel} from "../RestaurantCard"
import "@testing-library/jest-dom"

it("should render RestaurantCard component  with props Data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

const name= screen.getByText("Urban Feast");
expect(name).toBeInTheDocument();
})

it("should render Promoted label when promoted is true", () => {
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  render(<RestaurantCardPromoted resData={MOCK_DATA} />);

 
  const promotedLabel = screen.getByText(/promoted/i);
  expect(promotedLabel).toBeInTheDocument();
});