import CurrencyEnum from "../enums/CurrencyEnum"
import LanguageEnum from "../enums/LanguageEnum"

class Formats {
  constructor() {}

  public static priceFormat(
    value: string | number,
    currency: CurrencyEnum = CurrencyEnum.USD
  ) {
    switch (currency) {
      case CurrencyEnum.BRL:
        return `R$${value} BRL`
      case CurrencyEnum.USD:
      default:
        return `$${value} USD`
    }
  }

  public static percentageFormat(
    value: string | number,
    isRatio: boolean = false
  ) {
    if (isRatio) {
      return `${Number(value) / 100}`
    }
    return `${value} %`
  }

  public static formatTimestamp(timestamp: number) {
    const date = new Date(timestamp)
    const day = date.getDay()
    const month = date.getMonth() + 1
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth() + 1
    const currentYear = currentDate.getFullYear()
    const year = date.getFullYear()
    
    let formattedDate = String(day)
    if(month !== currentMonth) {
      formattedDate += `/${month}` 
    }


    if (year !== currentYear) {
      formattedDate += ` ${year}`
    }

    return formattedDate
  }

  public static ordinalFormat(
    value: string | number,
    language: LanguageEnum = LanguageEnum.UNITED_STATES
  ) {
    const valueInNumber = Number(value)
    const fractionalPiece = valueInNumber - Math.round(valueInNumber)

    if (fractionalPiece > 0) {
      throw new Error("The provided number not is integer")
    }

    if (language === LanguageEnum.PORTUGUESE) {
      return `${valueInNumber} `
    } else {
      if (valueInNumber < 1) return `${valueInNumber} th`
      else if (valueInNumber === 2) return `${valueInNumber} nd`
      else if (valueInNumber === 3) return `${valueInNumber} rd`
      else return `${valueInNumber} th`
    }
  }
}

export default Formats
