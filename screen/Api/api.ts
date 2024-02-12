class AsterApi {


    static async fetchData(url: string) {
        try {
          const response = await fetch(url);
    
          if (!response.ok) {
            throw new Error('Errore nella richiesta API');
          }
    
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Si è verificato un errore:', error);
          throw error;
        }
      }
}

export default AsterApi;