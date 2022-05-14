interface Props {
  description?: string;
}

export function AutomateWidget({ description = "TODO" }: Props) {
  return <div>{description}</div>;
}
