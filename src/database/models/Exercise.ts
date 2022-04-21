import {Model, Q} from '@nozbe/watermelondb';
import {children, lazy, text} from '@nozbe/watermelondb/decorators';
import {Associations} from '@nozbe/watermelondb/Model';
import Query from '@nozbe/watermelondb/Query';
import Equipment from './Equipment';
import Muscle from './Muscle';
import Workout from './Workout';

export default class Exercise extends Model {
  static table = 'exercises';

  public static associations: Associations = {
    workouts: {type: 'has_many', foreignKey: 'exercise_id'},
    exercise_equipment: {type: 'has_many', foreignKey: 'exercise_id'},
    exercise_muscle: {type: 'has_many', foreignKey: 'muscle_id'},
  };

  @text('name') name!: string;
  @text('description') description!: string;

  @children('workouts') workouts!: Query<Workout>;

  @lazy
  equipment = this.collections
    .get<Equipment>('equipment')
    .query(Q.on('exercise_equipment', 'exercise_id', this.id));

  @lazy
  muscles = this.collections
    .get<Muscle>('muscles')
    .query(Q.on('exercise_muscle', 'muscle_id', this.id));
}
