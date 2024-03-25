import { describe, expect, test } from "vitest";
import getMinMaxPrices from "./get-min-max-prices";

import mockedHistoricalOfOHLC from "@/mocks/historicalCoin.json"

const MOCK_ARRAY_LENGHT = 6
const MOCK_MAX_PRICE = 21834.35
const MOCK_MIN_PRICE = 21329.45

describe("testing getMinMax returns", () => {
  test("If the returns is exactly the max and the min", async () => {
    const result = getMinMaxPrices(mockedHistoricalOfOHLC.splice(0 , MOCK_ARRAY_LENGHT))
    const expectedValueOnRange = {min: MOCK_MIN_PRICE, max: MOCK_MAX_PRICE}

    expect(result).toEqual(expectedValueOnRange)
  })
})
