import { useQuery } from "@tanstack/react-query";
import ApexCharts from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { fetchCoinHistory } from "../api";
import { isDarkAtom } from "../atoms";

interface IChartProps {
  coinId: string;
}

interface IHistorical {
  time_open: Date;
  time_close: Date;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: any;
}

function Chart({ coinId }: IChartProps) {
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    fetchCoinHistory,
    {
      refetchInterval: 5000,
    }
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexCharts
          type="candlestick"
          series={[
            {
              name: "Price",
              data: data!.map((price) => {
                return {
                  x: new Date(price.time_close),
                  y: [price.open, price.high, price.low, price.close],
                };
              }),
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              type: "candlestick",
              height: 350,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            xaxis: {
              type: "datetime",
            },
            yaxis: {
              show: false,
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
