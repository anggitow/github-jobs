import { Button, Checkbox, Input } from "@material-tailwind/react";
import { useFilterStore } from "@stores/filterStore";
import { useState } from "react";

const Filter = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [location, setLocation] = useState("");
  const [isFullTime, setIsFullTime] = useState(false);

  const { setFilters } = useFilterStore();

  const handleClickSearch = () => {
    setFilters({ jobDescription, location, isFullTime });
  };

  return (
    <div className="flex flex-wrap gap-4">
      <div className="w-full md:w-4/12">
        <Input
          variant="outlined"
          label="Job Description"
          placeholder="Filter by title, benefits, companies, expertise"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
      </div>
      <div className="w-full md:w-4/12">
        <Input
          variant="outlined"
          label="Location"
          placeholder="Filter by city, state, zip code or country"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="w-full md:w-2/12">
        <Checkbox
          label="Full Time Only"
          onChange={(e) => setIsFullTime(e.target.checked)}
          checked={isFullTime}
        />
      </div>
      <div className="flex w-full md:w-1/12">
        <Button onClick={handleClickSearch}>Search</Button>
      </div>
    </div>
  );
};

export default Filter;
