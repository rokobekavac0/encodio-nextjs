export function beautifyError(error: string) {
  switch (error) {
    case "no letters matching":
      return "Input text too short";
    default:
      return "Unknow error, try again later...";
  }
}
