export interface IJobOption<OptionType> {
  key: string;
  heading: string;
  type: "number" | "boolean";
  defaultValue: OptionType;
  effect: (price: number, value: OptionType) => number;
}

export interface IJobDefinition {
  key: string;
  heading: string;
  options: IJobOption<number | boolean>[];
  basePrice: number;
}

export interface IJobConfiguration {
  key: string;
  definition: IJobDefinition;
  options: Record<string, number | boolean>;
}

const defaultJobs: IJobDefinition[] = [
  {
    key: "lightRepair",
    heading: "Легкий ремонт",
    basePrice: 0,
    options: [
      {
        key: "area",
        heading: "Площадь (кв.м)",
        type: "number",
        defaultValue: 0,
        effect: (price: number, value: number) => price + value * 600
      },
      {
        key: "urgent",
        heading: "Срочно",
        type: "boolean",
        defaultValue: false,
        effect: (price: number, value: boolean) => value ? price * 1.5 : price
      }
    ]
  },
  {
    key: "fullRepair",
    heading: "Капитальный ремонт",
    basePrice: 0,
    options: [
      {
        key: "area",
        heading: "Площадь (кв.м)",
        type: "number",
        defaultValue: 0,
        effect: (price: number, value: number) => price + value * 1000
      },
      {
        key: "urgent",
        heading: "Срочно",
        type: "boolean",
        defaultValue: false,
        effect: (price: number, value: boolean) => value ? price * 1.5 : price
      }
    ]
  },
  {
    key: "design",
    heading: "Дизайн интерьера",
    basePrice: 0,
    options: [
      {
        key: "roomCount",
        heading: "Количество комнат",
        type: "number",
        defaultValue: 0,
        effect: (price: number, value: number) => price + value * 3000
      }
    ]
  }
];

export default defaultJobs;
