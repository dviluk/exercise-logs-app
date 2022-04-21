import {Model} from '@nozbe/watermelondb';
import {immutableRelation} from '@nozbe/watermelondb/decorators';
import {Associations} from '@nozbe/watermelondb/Model';
import Relation from '@nozbe/watermelondb/Relation';
import Equipment from './Equipment';
import Exercise from './Exercise';

export default class PivotExerciseMuscle extends Model {
  static table = 'exercise_equipment';

  static associations: Associations = {
    exercises: {type: 'belongs_to', key: 'exercise_id'},
    equipment: {type: 'belongs_to', key: 'equipment_id'},
  };

  @immutableRelation('exercises', 'exercise_id') exercise!: Relation<Exercise>;
  @immutableRelation('equipment', 'equipment_id') muscle!: Relation<Equipment>;
}
