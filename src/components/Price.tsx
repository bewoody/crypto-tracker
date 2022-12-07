import styled from "styled-components";
import { ITickersData } from "../routes/Coin";

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
  &:not(:last-child) {
    margin-bottom: 14px;
  }
`;

const OverviewItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  span:first-child {
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
  }
`;

interface IPriceProps {
  tickersData?: ITickersData;
}

function Price({ tickersData }: IPriceProps) {
  return (
    <>
      <Overview>
        <OverviewItem>
          <span>price:</span>
          <span>$ {tickersData?.quotes.USD.price.toFixed(3)}</span>
        </OverviewItem>
      </Overview>
      <Overview>
        <OverviewItem>
          <span>market cap:</span>
          <span>$ {tickersData?.quotes.USD.market_cap}</span>
        </OverviewItem>
      </Overview>
      <Overview>
        <OverviewItem>
          <span>percent change 6h:</span>
          <span>{tickersData?.quotes.USD.percent_change_6h.toFixed(2)} %</span>
        </OverviewItem>
      </Overview>
      <Overview>
        <OverviewItem>
          <span>percent change 12h:</span>
          <span>{tickersData?.quotes.USD.percent_change_12h.toFixed(2)} %</span>
        </OverviewItem>
      </Overview>
      <Overview>
        <OverviewItem>
          <span>percent change 24h:</span>
          <span>{tickersData?.quotes.USD.percent_change_24h.toFixed(2)} %</span>
        </OverviewItem>
      </Overview>
      <Overview>
        <OverviewItem>
          <span>ath price</span>
          <span>$ {tickersData?.quotes.USD.ath_price.toFixed(3)}</span>
        </OverviewItem>
      </Overview>
    </>
  );
}

export default Price;
