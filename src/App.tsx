import { AutomateWidget } from "./component/AutomateWidget";

const automateScripts: string[] = [];

export default () => {
  return (
    <div>
      <h2 className="font-mono text-gray-900">App</h2>
      {automateScripts.map((s) => {
        return <AutomateWidget description={s} />;
      })}
    </div>
  );
};
