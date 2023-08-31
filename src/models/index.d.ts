import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerSurveyResult = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SurveyResult, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly question1?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySurveyResult = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SurveyResult, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly question1?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SurveyResult = LazyLoading extends LazyLoadingDisabled ? EagerSurveyResult : LazySurveyResult

export declare const SurveyResult: (new (init: ModelInit<SurveyResult>) => SurveyResult) & {
  copyOf(source: SurveyResult, mutator: (draft: MutableModel<SurveyResult>) => MutableModel<SurveyResult> | void): SurveyResult;
}