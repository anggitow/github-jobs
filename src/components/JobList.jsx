import SkeletonList from "./SkeletonList";

const JobList = ({ data, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <SkeletonList />
      ) : (
        <div className="space-y-4">
          {data.map((job) => (
            <div
              key={job.id}
              className="flex max-w-full justify-between border-t-2 border-gray-300 pt-4"
            >
              <div>
                <p className="font-bold text-blue-700">{job.title}</p>
                <p>
                  <span>{job.company}</span>
                  <span> - </span>
                  <span className="font-bold text-orange-600">{job.type}</span>
                </p>
              </div>
              <div className="text-end">
                <p className="font-bold">{job.location}</p>
                <p>1 day ago</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default JobList;
