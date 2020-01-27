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
    heading: "calculator.jobs.1.heading",
    subheading: "calculator.jobs.1.subheading",
    explanation: "calculator.jobs.1.explanation",
    image: "img/portfolio/01-thumbnail.jpg",
    basePrice: 0,
    options: [
      {
        key: "area",
        heading: "calculator.jobs.1.options.1.heading",
        type: "number",
        defaultValue: 0,
        effect: (price: number, value: number) => price + value * 600
      }
    ]
  },
  {
    key: "fullRepair",
    heading: "calculator.jobs.2.heading",
    subheading: "calculator.jobs.2.subheading",
    explanation: "calculator.jobs.2.explanation",
    image: "img/portfolio/02-thumbnail.jpg",
    basePrice: 0,
    options: [
      {
        key: "area",
        heading: "calculator.jobs.2.options.1.heading",
        type: "number",
        defaultValue: 0,
        effect: (price: number, value: number) => price + value * 1000
      }
    ]
  },
  {
    key: "design",
    heading: "calculator.jobs.3.heading",
    subheading: "calculator.jobs.3.subheading",
    explanation: "calculator.jobs.3.explanation",
    image: "img/portfolio/03-thumbnail.jpg",
    basePrice: 0,
    options: [
      {
        key: "roomCount",
        heading: "calculator.jobs.3.options.1.heading",
        type: "number",
        defaultValue: 0,
        effect: (price: number, value: number) => price + value * 3000
      }
    ]
  }
];

export default defaultJobs;
