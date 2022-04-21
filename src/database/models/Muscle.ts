import {Model, Q} from '@nozbe/watermelondb';
import {lazy, text} from '@nozbe/watermelondb/decorators';
import {Associations} from '@nozbe/watermelondb/Model';
import Exercise from './Exercise';

export default class Muscle extends Model {
  static table = 'muscles';

  @text('name') name!: string;
  @text('description') description?: string;

  public static associations: Associations = {
    exercise_muscle: {type: 'has_many', foreignKey: 'muscle_id'},
  };

  @lazy
  exercises = this.collections
    .get<Exercise>('exercises')
    .query(Q.on('exercise_muscle', 'muscle_id', this.id));
}
