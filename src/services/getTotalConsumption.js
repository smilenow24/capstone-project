export default function getTotalConsumption(energyConsumptionHistory) {
  console.log(energyConsumptionHistory.heating.length);
  const differenceDateElectric =
    energyConsumptionHistory.electric[0].date.getTime() -
    energyConsumptionHistory.electric[energyConsumptionHistory.electric.length - 1].date.getTime();
  console.log(energyConsumptionHistory);
  const differenceDateHeating =
    energyConsumptionHistory.heating[0].date.getTime() -
    energyConsumptionHistory.heating[energyConsumptionHistory.heating.length - 1].date.getTime();
  console.log(differenceDateHeating);

  const differenceDaysElectric = Math.round(differenceDateElectric / (24 * 3600 * 1000)) + 1;
  const totalElectric = energyConsumptionHistory.electric.map(input => input.increase).reduce((a, b) => a + b, 0);
  console.log(totalElectric);
  const averageIncreaseElectricRounded = Math.round(totalElectric / differenceDaysElectric);

  const differenceDaysHeating = Math.round(differenceDateHeating / (24 * 3600 * 1000)) + 1;
  const totalHeating = energyConsumptionHistory.heating.map(input => input.increase).reduce((a, b) => a + b, 0);
  const averageIncreaseHeatingRounded = Math.round(totalHeating / differenceDaysHeating);

  return {totalElectric, totalHeating, averageIncreaseElectricRounded, averageIncreaseHeatingRounded};
}
