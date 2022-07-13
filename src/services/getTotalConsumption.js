export default function getTotalConsumption(energyConsumptionHistory) {
  const differenceDate =
    energyConsumptionHistory[0].date.getTime() -
    energyConsumptionHistory[energyConsumptionHistory.length - 1].date.getTime();

  const differenceDays = Math.round(differenceDate / (24 * 3600 * 1000)) + 1;
  const total = energyConsumptionHistory.map(input => input.increase).reduce((a, b) => a + b, 0);
  const averageIncreaseRounded = Math.round(total / differenceDays);
  return {total, averageIncreaseRounded};
}
