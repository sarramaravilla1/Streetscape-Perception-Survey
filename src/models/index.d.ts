import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerSurveyResult = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SurveyResult, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly comfort1?: string | null;
  readonly comfort2?: string | null;
  readonly comfort3?: string | null;
  readonly comfort4?: string | null;
  readonly comfort5?: string | null;
  readonly comfort6?: string | null;
  readonly comfort7?: string | null;
  readonly comfort8?: string | null;
  readonly comfort9?: string | null;
  readonly comfort10?: string | null;
  readonly comfort11?: string | null;
  readonly comfort12?: string | null;
  readonly temp?: string | null;
  readonly intensity?: string | null;
  readonly heatsources?: string | null;
  readonly humidity?: string | null;
  readonly velocity?: string | null;
  readonly traffic?: string | null;
  readonly greenery?: string | null;
  readonly shading?: string | null;
  readonly material?: string | null;
  readonly imageability?: string | null;
  readonly enclosure?: string | null;
  readonly humanscale?: string | null;
  readonly transparency?: string | null;
  readonly complexity?: string | null;
  readonly safe?: string | null;
  readonly lively?: string | null;
  readonly beautiful?: string | null;
  readonly wealthy?: string | null;
  readonly boring?: string | null;
  readonly depressing?: string | null;
  readonly eatingdrinking?: (string | null)[] | null;
  readonly nature?: (string | null)[] | null;
  readonly community?: (string | null)[] | null;
  readonly walking?: (string | null)[] | null;
  readonly sightseeing?: (string | null)[] | null;
  readonly perception?: (string | null)[] | null;
  readonly functionality?: (string | null)[] | null;
  readonly accessibility?: (string | null)[] | null;
  readonly contact?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySurveyResult = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SurveyResult, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly comfort1?: string | null;
  readonly comfort2?: string | null;
  readonly comfort3?: string | null;
  readonly comfort4?: string | null;
  readonly comfort5?: string | null;
  readonly comfort6?: string | null;
  readonly comfort7?: string | null;
  readonly comfort8?: string | null;
  readonly comfort9?: string | null;
  readonly comfort10?: string | null;
  readonly comfort11?: string | null;
  readonly comfort12?: string | null;
  readonly temp?: string | null;
  readonly intensity?: string | null;
  readonly heatsources?: string | null;
  readonly humidity?: string | null;
  readonly velocity?: string | null;
  readonly traffic?: string | null;
  readonly greenery?: string | null;
  readonly shading?: string | null;
  readonly material?: string | null;
  readonly imageability?: string | null;
  readonly enclosure?: string | null;
  readonly humanscale?: string | null;
  readonly transparency?: string | null;
  readonly complexity?: string | null;
  readonly safe?: string | null;
  readonly lively?: string | null;
  readonly beautiful?: string | null;
  readonly wealthy?: string | null;
  readonly boring?: string | null;
  readonly depressing?: string | null;
  readonly eatingdrinking?: (string | null)[] | null;
  readonly nature?: (string | null)[] | null;
  readonly community?: (string | null)[] | null;
  readonly walking?: (string | null)[] | null;
  readonly sightseeing?: (string | null)[] | null;
  readonly perception?: (string | null)[] | null;
  readonly functionality?: (string | null)[] | null;
  readonly accessibility?: (string | null)[] | null;
  readonly contact?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SurveyResult = LazyLoading extends LazyLoadingDisabled ? EagerSurveyResult : LazySurveyResult

export declare const SurveyResult: (new (init: ModelInit<SurveyResult>) => SurveyResult) & {
  copyOf(source: SurveyResult, mutator: (draft: MutableModel<SurveyResult>) => MutableModel<SurveyResult> | void): SurveyResult;
}