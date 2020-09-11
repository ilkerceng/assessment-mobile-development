import FormTypes from "./types";

export const build = (formData: any, controls: FormTypes.FormBase[]) => {
  controls.forEach(({ caption, value }) => {
    formData[caption] = { value, caption };
  });

  return formData;
};
