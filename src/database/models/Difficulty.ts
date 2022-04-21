import {Model} from '@nozbe/watermelondb';
import {children, text} from '@nozbe/watermelondb/decorators';
import {Associations} from '@nozbe/watermelondb/Model';
import Query from '@nozbe/watermelondb/Query';
import Plan from './Plan';

export default class Difficulty extends Model {
  static table = 'difficulties';

  public static associations: Associations = {
    plans: {type: 'has_many', foreignKey: 'difficulty_id'},
  };

  @text('name') name!: string;

  @children('plans') plans!: Query<Plan>;
}
