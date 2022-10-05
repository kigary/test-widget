type TInit = {
  widgetHash: string;
  widgetElement: HTMLElement;
  cssClasses: string[];
  varientStyles: any;
  params: any;
};

type TOptions = {
  name: string;
  init: (options: TInit) => void;
};

export const registerWidget = (options: TOptions) => {};
