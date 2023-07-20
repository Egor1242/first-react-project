const ApiURL = "https://restcountries.com/v3.1/";

export class ApiConnect {

    static async sendRequest(params = "all") {
        let startTime = new Date();
        const proxyResponse = await fetch(ApiURL + params);
        const unwrappedResponse = await proxyResponse.json();
        return {
            response: unwrappedResponse.map(
                (country) => {
                    return {
                        id: country?.cca3,
                        data: country
                    }
                }
            ),
            requestTime: new Date() - startTime,
        };
    }
}