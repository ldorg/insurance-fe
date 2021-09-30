import { flagStore } from "./flags";

export const event = ({
  action,
  category,
  label,
}: {
  action: string;
  category: string;
  label: string;
}) => {
  const transformedFlagStore: { [key: string]: any } = {};
  for (const [key, value] of Object.entries(flagStore)) {
    transformedFlagStore[key.split(".")[1]] = value;
  }
  console.log(transformedFlagStore);
  // @ts-ignore
  window.gtag("event", action, {
    ...transformedFlagStore,
    event_category: category,
    event_label: label,
    value: JSON.stringify(flagStore),
  });
};
