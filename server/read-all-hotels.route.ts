
import { db } from "./database";


export function readAllHotels(req, res) {
      res.status(200).json({
                hotels: db.readAllHotels(req.query.nameHotel,
                                 req.query.star1=='true',req.query.star2=='true',
                                 req.query.star3=='true',req.query.star4=='true',
                                 req.query.star5=='true'
         )
    });
}