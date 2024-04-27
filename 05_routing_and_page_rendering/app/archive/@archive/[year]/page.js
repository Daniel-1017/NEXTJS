import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

const FilteredNewsPage = ({ params }) => {
  const { year: newsYear } = params;

  const news = getNewsForYear(newsYear);

  return <NewsList news={news} />;
};

export default FilteredNewsPage;
