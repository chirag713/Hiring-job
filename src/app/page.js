import JobForm from "@/app/Components/Addjob";
import Header from "@/app/Components/Header";
import JobCard from "@/app/Components/JobCard";
import Mainpagebanner from "@/app/Components/Mainpagebanner";
import SearchBar from "@/app/Components/SearchBar";

export default function Home() {
  return (
    <main>
      
      <Header/>
      <Mainpagebanner/>
      <SearchBar/>
      <JobCard/>
    </main>
  );
}
