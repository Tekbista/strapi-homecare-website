import { useEffect, useState } from "react";
import PageService from "../services/page-service";

const AboutPage = () => {
  const [aboutpage, setAboutPage] = useState<any>(null);

  useEffect(() => {
    // Fetch about page data from Strapi
    new PageService().getAboutPage()
      .then(data => {
        setAboutPage(data?.data?.about);
      })
      .catch(error => console.error("Error fetching about page data:", error));
  }, []);


  return (
    <div>
      {aboutpage ? (
        <div dangerouslySetInnerHTML={{ __html: aboutpage }} />
      ) : (
        <p>Loading about page data...</p>
      )}
    </div>
  );
};

export default AboutPage;   