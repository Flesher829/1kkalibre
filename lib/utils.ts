export const truncateTitle = (str: string, maxlength: number) => {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
};

export const convertTime = (sec: number | any) => {
  let hours: number | string = Math.floor(sec / 3600);
  hours >= 1 ? (sec = sec - hours * 3600) : (hours = "");

  let min: number | string = Math.floor(sec / 60);
  min >= 1 ? (sec = sec - min * 60) : (min = "");
  sec < 1 ? (sec = "00") : void 0;

  min.toString().length == 1 ? (min = "0" + min) : void 0;
  sec.toString().length == 1 ? (sec = "0" + sec) : void 0;

  return hours + "" + min + ":" + sec;
};


export const checkStringLength = (str: string, length: number): string =>
str.length >= 20 ? truncateTitle(str, length) : str;