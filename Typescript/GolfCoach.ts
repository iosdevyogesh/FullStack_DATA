import {Coach} from "./Coach";

export class GolfCoach implements Coach {
    getDailyWorkOut():string {
        return "practice 100 balls within golf court range";
    }


}