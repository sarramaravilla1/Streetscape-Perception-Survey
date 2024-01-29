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
  readonly question2?: string | null;
  readonly question3?: string | null;
  readonly question4?: string | null;
  readonly question5?: string | null;
  readonly question6?: string | null;
  readonly question7?: string | null;
  readonly question8?: string | null;
  readonly question9?: string | null;
  readonly question10?: string | null;
  readonly question11?: string | null;
  readonly question12?: string | null;
  readonly question13?: string | null;
  readonly question14?: string | null;
  readonly question15?: string | null;
  readonly question16?: string | null;
  readonly question17?: string | null;
  readonly question18?: string | null;
  readonly question19?: string | null;
  readonly question20?: string | null;
  readonly question21?: string | null;
  readonly question22?: string | null;
  readonly question23?: string | null;
  readonly question24?: string | null;
  readonly question25?: string | null;
  readonly question26?: string | null;
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
  readonly question2?: string | null;
  readonly question3?: string | null;
  readonly question4?: string | null;
  readonly question5?: string | null;
  readonly question6?: string | null;
  readonly question7?: string | null;
  readonly question8?: string | null;
  readonly question9?: string | null;
  readonly question10?: string | null;
  readonly question11?: string | null;
  readonly question12?: string | null;
  readonly question13?: string | null;
  readonly question14?: string | null;
  readonly question15?: string | null;
  readonly question16?: string | null;
  readonly question17?: string | null;
  readonly question18?: string | null;
  readonly question19?: string | null;
  readonly question20?: string | null;
  readonly question21?: string | null;
  readonly question22?: string | null;
  readonly question23?: string | null;
  readonly question24?: string | null;
  readonly question25?: string | null;
  readonly question26?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SurveyResult = LazyLoading extends LazyLoadingDisabled ? EagerSurveyResult : LazySurveyResult

export declare const SurveyResult: (new (init: ModelInit<SurveyResult>) => SurveyResult) & {
  copyOf(source: SurveyResult, mutator: (draft: MutableModel<SurveyResult>) => MutableModel<SurveyResult> | void): SurveyResult;
}