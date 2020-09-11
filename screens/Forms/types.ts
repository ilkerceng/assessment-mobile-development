declare namespace FormTypes {
  interface FormBase {
    type: string;
    caption: string;
    value?: string | number | string[] | number[];
  }

  interface Input extends FormBase {
    validator: string;
  }

  interface ChoiceSelectItem {
    id: number | string;
    name: string;
  }

  interface ChoiceControlItem {
    [key: string]: string;
  }

  interface Choice extends FormBase {
    multiple?: boolean;
    items: ChoiceControlItem[] | ChoiceSelectItem[];
  }
}

export default FormTypes;
