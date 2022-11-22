export const chooseCardStyle = (styleCard: any, objectFromChoose: any) => {
  const styleProperty = objectFromChoose[styleCard];
  return styleProperty ?? objectFromChoose.white;
};
