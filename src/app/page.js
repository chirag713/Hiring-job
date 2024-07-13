import JobForm from "@/Components/Addjob";
import Header from "@/Components/Header";
import JobCard from "@/Components/JobCard";
import Mainpagebanner from "@/Components/Mainpagebanner";
import SearchBar from "@/Components/SearchBar";

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
