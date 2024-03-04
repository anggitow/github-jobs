import { Card } from "@material-tailwind/react";
import { useFilterStore } from "@stores/filterStore";
import { useEffect, useState } from "react";
import axios from "axios";
import Filter from "@components/Filter";
import Title from "@components/Title";
import JobList from "@components/JobList";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [countData, setCountData] = useState(0);
  const [error, setError] = useState(null);

  const { filters } = useFilterStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request({
          method: "GET",
          url: "https://dev6.dansmultipro.com/api/recruitment/positions.json",
          params: {
            description: filters.jobDescription,
            location: filters.location,
            full_time: filters.isFullTime,
            page: filters.jobDescription || filters.location ? "" : 1,
          },
        });

        setIsLoading(false);
        setData(response.data);
        setCountData(response.data.length);
      } catch (error) {
        setIsLoading(false);
        setError(error.response.data);
      }
    };

    setIsLoading(true);
    fetchData();
  }, [filters]);

  return (
    <div>
      <Filter />
      <Card className="mt-6 p-7">
        <Title isLoading={isLoading} countData={countData} />
        <JobList isLoading={isLoading} data={data} />
      </Card>
    </div>
  );
};

export default Home;
