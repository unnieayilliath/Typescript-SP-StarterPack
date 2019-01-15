// unnie: Change this to interface once data is fetched from sharepoint
export class Forecast {
    Year: string;
    Documents: string[];
    constructor(year: string, documents: string[]) {
        this.Year = year;
        this.Documents = documents;
    }
}
