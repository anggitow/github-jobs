import { Typography } from "@material-tailwind/react";
import { useFilterStore } from "@stores/filterStore";

const Title = ({ isLoading, countData }) => {
  const { filters } = useFilterStore();

  return (
    <>
      {isLoading ? (
        <div className="max-w-full animate-pulse">
          <Typography
            as="div"
            variant="h1"
            className="mb-4 h-3 w-40 rounded-full bg-gray-300"
          >
            &nbsp;
          </Typography>
        </div>
      ) : (
        <Typography className="mb-8 text-2xl font-bold">
          {filters.jobDescription || filters.location
            ? `Showing ${countData} jobs`
            : "Job List"}
        </Typography>
      )}
    </>
  );
};

export default Title;
