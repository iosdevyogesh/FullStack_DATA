import {Coach} from './Coach';
import{FortuneService} from './FortuneService';
export class CricketCoach implements Coach, FortuneService{
getDailyWorkOut():string
{
    return "Practice Your Spin Bowling Technique Today";
}
 getDailyFortune():string
 {
    return 'today is your lucky day';
 }

}