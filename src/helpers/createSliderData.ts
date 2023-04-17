export const createSliderData = <T>(arg: Array<T>): Array<T> => {
  const copySlider = [...arg];
  const lastCopyElement = arg.slice(0, arg.length - 1);
  const firstCopyElement = arg.slice(1);
  const slider = [...firstCopyElement, ...copySlider, ...lastCopyElement];
  return slider.map((item, index) => {
    return {
      ...item,
      id: index,
    };
  });
};
