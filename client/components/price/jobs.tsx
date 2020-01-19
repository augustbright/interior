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
  subheading: string;
  explanation: string;
  image: string;
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
    heading: "Обычный ремонт",
    subheading: "600 рублей за кв.м.",
    explanation: "Быстрый и чистый ремонт, покраска стен, поклейка обоев, укладка ламината/паркета, установка дверей.",
    image: 'img/portfolio/01-thumbnail.jpg',
    basePrice: 0,
    options: [
      {
        key: "area",
        heading: "Площадь (кв.м)",
        type: "number",
        defaultValue: 0,
        effect: (price: number, value: number) => price + value * 600
      }
    ]
  },
  {
    key: "fullRepair",
    heading: "Капитальный ремонт",
    subheading: "1000 рублей за кв.м.",
    explanation: "Полный ремонт помещений, выравнивание стен, перепланировка, смена дверных проемов.",
    image: 'img/portfolio/02-thumbnail.jpg',
    basePrice: 0,
    options: [
      {
        key: "area",
        heading: "Площадь (кв.м)",
        type: "number",
        defaultValue: 0,
        effect: (price: number, value: number) => price + value * 1000
      }
    ]
  },
  {
    key: "design",
    heading: "Дизайн интерьера",
    subheading: "3000 рублей за помещение/комнату",
    explanation: "Помощь квалифицированных дизайнеров в разработке будущего интерьера.",
    image: 'img/portfolio/03-thumbnail.jpg',
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
