import { Typography } from "@material-tailwind/react";

const SkeletonList = () => {
  const skeletons = [];
  for (let i = 1; i <= 5; i++) {
    skeletons.push(
      <div
        key={i}
        className="max-w-full animate-pulse border-t-2 border-gray-300 pt-4"
      >
        <Typography className="mb-4 h-3 w-56 rounded-full bg-gray-300">
          &nbsp;
        </Typography>
        <Typography className="mb-2 h-2 w-72 rounded-full bg-gray-300">
          &nbsp;
        </Typography>
      </div>,
    );
  }

  return <div className="space-y-6">{skeletons}</div>;
};

export default SkeletonList;
