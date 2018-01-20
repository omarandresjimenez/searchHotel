

import { HOTELS } from "./database-data";



class InMemoryDatabase {


    public readAllHotels(name: string, onestar: boolean, twostars: boolean,
        threestars: boolean, fourstars: boolean, fivestars: boolean) {
        let res: any = this.filterByName(HOTELS, name);

        if ((!onestar && !twostars && !threestars && !fourstars && !fivestars) ||
            (onestar && twostars && threestars && fourstars && fivestars)) {
            return res;
        } else {

            return this.filterByStars(res, onestar, twostars, threestars, fourstars, fivestars)
        }

    }



    private filterByName(data: any, name: string) {
        return data.filter(function (item) {
            return item.name.toLowerCase().indexOf(name.toLowerCase()) >= 0;

        })
    }

    private filterByStars(data: any, one: boolean, two: boolean, three: boolean, four: boolean, five: boolean) {
        return data.filter(function (item) {

            return (one && item.stars === 1) ||
                (two && item.stars === 2) ||
                (three && item.stars === 3) ||
                (four && item.stars === 4) ||
                (five && item.stars === 5)

        })
    }
}




export const db = new InMemoryDatabase();


