class AsterApi {


    static async fetchData(url: string) {
        try {
          const response = await fetch(url);
    
          if (!response.ok) {
            throw new Error('Error Request API');
          }
    
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('error:', error);
          throw error;
        }
      }
}

export default AsterApi;