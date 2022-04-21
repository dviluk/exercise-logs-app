import {Model} from '@nozbe/watermelondb';
import {children, field, relation} from '@nozbe/watermelondb/decorators';
import {Associations} from '@nozbe/watermelondb/Model';
import Query from '@nozbe/watermelondb/Query';
import Relation from '@nozbe/watermelondb/Relation';
import Difficulty from './Difficulty';
import Workout from './Workout';

export default class Plan extends Model {
  static table = 'plans';

  static associations: Associations = {
    difficulties: {type: 'belongs_to', key: 'difficulty_id'},
    workouts: {type: 'has_many', foreignKey: 'plan_id'},
  };

  @field('difficulty_id') user_id!: string;
  @field('name') name!: string;
  @field('description') description!: string;

  @relation('difficulties', 'difficulty_id') difficulty!: Relation<Difficulty>;
  @children('workouts') workouts!: Query<Workout>;
}
