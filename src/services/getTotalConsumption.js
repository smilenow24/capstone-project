export default function getTotalConsumption(energyConsumptionHistory) {
  const differenceDateElectric =
    energyConsumptionHistory.electric[0].date.getTime() -
    energyConsumptionHistory.electric[energyConsumptionHistory.eletric.length - 1].date.getTime();

  const differenceDateHeating =
    energyConsumptionHistory.heating[0].date.getTime() -
    energyConsumptionHistory.heating[energyConsumptionHistory.eletric.length - 1].date.getTime();

  const differenceDaysElectric = Math.round(differenceDateElectric / (24 * 3600 * 1000)) + 1;
  const totalElectric = energyConsumptionHistory.eletric.map(input => input.increase).reduce((a, b) => a + b, 0);
  const averageIncreaseElectricRounded = Math.round(totalElectric / differenceDaysElectric);

  const differenceDaysHeating = Math.round(differenceDateHeating / (24 * 3600 * 1000)) + 1;
  const totalHeating = energyConsumptionHistory.heating.map(input => input.increase).reduce((a, b) => a + b, 0);
  const averageIncreaseHeatingRounded = Math.round(totalHeating / differenceDaysHeating);

  return {totalElectric, totalHeating, averageIncreaseElectricRounded, averageIncreaseHeatingRounded};
}
