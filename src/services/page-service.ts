
interface FetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: string | FormData;
}

class PageService {
  private apiKey: string = process.env.REACT_APP_STRAPI_API_TOKEN || '';
  private apiBaseUrl: string = process.env.REACT_APP_STRAPI_API_URL || '';
  private queryParams: string = "home-care-home-page?populate[Components][on][homecare.menu][populate][MenuItem][populate][icon][populate]=*&" 
                                + "populate[Components][on][homecare.header][populate][logo][populate]=*&"
                                + "populate[Components][on][homecare.carousel][populate][Carousels][populate]=*&"
                                + "populate[Components][on][homecare.welcome][populate]=*&"
                                + "populate[Components][on][homecare.misson][populate]=*&"
                                + "populate[Components][on][my-components.footer][populate][contact][populate][info][populate]=*&"
                                + "populate[Components][on][my-components.footer][populate][quicklinks][populate][links]=*&"
                                + "populate[Components][on][my-components.footer][populate][social][populate][social][populate]=*"  ;
  private homepageUrl: string = this.apiBaseUrl + this.queryParams;

  

  async getHomePage() {
    const options: FetchOptions = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(this.homepageUrl, options);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch homepage data: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Fetched homepage data: ", data);
    return data;
  }
}

export default PageService;
