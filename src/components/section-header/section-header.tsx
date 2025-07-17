type SectionHeaderProps = {
  title: string;
  description: string;
};

export const SectionHeader = ({
  title,
  description,
}: SectionHeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-12">
      <div className="flex flex-row items-center justify-center gap-8 mb-8">
        <div className="w-10 h-3 bg-purple-600 rounded-full" />
        <h2 className="font-sans font-extrabold text-5xl text-black-100 text-center">
          {title}
        </h2>
        <div className="w-10 h-3 bg-purple-600 rounded-full" />
      </div>
      <span className="text-black-100 text-opacity-[80%] text-body-md text-center max-w-lg">
        {description}
      </span>
    </div>
  );
};
