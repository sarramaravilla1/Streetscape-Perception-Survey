// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SurveyResult } = initSchema(schema);

export {
  SurveyResult
};