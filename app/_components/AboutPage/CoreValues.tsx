import appConfig from '../../../app-config.json';

type Props = {
  className?: string;
};

function CoreValues({ className }: Props) {
  const coreValues = appConfig.organizationData.coreValues;

  return (
    <div className={`prose xl:prose-xl card mx-auto ${className}`}>
      <div className="card-body w-fit m-auto">
        <h3 className="text-2xl underline decoration-wavy decoration-accent underline-offset-8 lg:underline-offset-[12px] !mb-12">
          Core Values
        </h3>
        <ul className="list-disc">
          {coreValues.map((value, index) => (
            <li key={`value_${index + 1}`}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CoreValues;
