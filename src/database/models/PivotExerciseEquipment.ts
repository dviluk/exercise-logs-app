import {Model} from '@nozbe/watermelondb';
import {immutableRelation} from '@nozbe/watermelondb/decorators';
import {Associations} from '@nozbe/watermelondb/Model';
import Relation from '@nozbe/watermelondb/Relation';
import Exercise from './Exercise';
import Muscle from './Muscle';

export default class PivotExerciseEquipment extends Model {
  static table = 'exercise_muscle';

  static associations: Associations = {
    exercises: {type: 'belongs_to', key: 'exercise_id'},
    muscles: {type: 'belongs_to', key: 'muscle_id'},
  };

  @immutableRelation('exercises', 'exercise_id') exercise!: Relation<Exercise>;
  @immutableRelation('muscles', 'muscle_id') muscle!: Relation<Muscle>;
}
