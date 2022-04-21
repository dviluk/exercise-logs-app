import {Model, Q} from '@nozbe/watermelondb';
import {lazy, text} from '@nozbe/watermelondb/decorators';
import {Associations} from '@nozbe/watermelondb/Model';
import Exercise from './Exercise';

export default class Equipment extends Model {
  static table = 'equipment';

  @text('name') name!: string;

  public static associations: Associations = {
    exercise_equipment: {type: 'has_many', foreignKey: 'exercise_id'},
  };

  @lazy
  exercises = this.collections
    .get<Exercise>('exercises')
    .query(Q.on('exercise_equipment', 'exercise_id', this.id));
}
