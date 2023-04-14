
import Banner from './Banner/Banner';
import JobCategory from './JobCategory/JobCategory';
import FeaturedJobs from './FeaturedJobs/FeaturedJobs';
import { useLoaderData } from 'react-router-dom';



const Home = () => {
    const jobCategories = useLoaderData()
    return (
        <div> 
           <Banner />
           <JobCategory jobCategories={jobCategories} />
           <FeaturedJobs />
        </div>
    );
};

export default Home;