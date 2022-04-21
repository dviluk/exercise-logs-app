import {Model} from '@nozbe/watermelondb';
import {field, relation} from '@nozbe/watermelondb/decorators';
import {Associations} from '@nozbe/watermelondb/Model';
import Relation from '@nozbe/watermelondb/Relation';
import Workout from './Workout';

export default class WorkoutLog extends Model {
  static table = 'workout_logs';

  static associations: Associations = {
    workouts: {type: 'belongs_to', key: 'workout_id'},
  };

  @field('workout_id') plan_id!: string;
  @field('set_number') set_number!: number;
  @field('repetitions') repetitions!: number;
  @field('rested') rested!: number;
  @field('time') time!: number;

  @relation('workouts', 'workout_id') workout!: Relation<Workout>;
}
