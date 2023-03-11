import numbro from "numbro";

export const performanceGetter = (param: string) => {
  const result = param > "0" ? `+${param}%` : `${param}%`

  return result;
} 

export const groupingFormat = (number: number) => {
  const opts = {
    mantissa: 0,
    trimMantissa: true,
    thousandSeparated: true,
  };
  
  if (Number.isNaN(number)) return null;
  
  try {
    return numbro(number).format(opts);
  }
  
  catch (e) {
    return null;
  }
};