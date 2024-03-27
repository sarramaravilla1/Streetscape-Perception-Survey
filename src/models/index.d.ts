import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerSurveyResult = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SurveyResult, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly comfort_1?: string | null;
  readonly comfort_2?: string | null;
  readonly comfort_3?: string | null;
  readonly comfort_4?: string | null;
  readonly comfort_5?: string | null;
  readonly comfort_6?: string | null;
  readonly thermal_comfort_1?: string | null;
  readonly thermal_comfort_2?: string | null;
  readonly thermal_comfort_3?: string | null;
  readonly thermal_comfort_4?: string | null;
  readonly thermal_comfort_5?: string | null;
  readonly thermal_comfort_6?: string | null;
  readonly temperature?: string | null;
  readonly sun_intensity?: string | null;
  readonly heat_sources?: string | null;
  readonly humidity?: string | null;
  readonly wind_velocity?: string | null;
  readonly traffic_flow?: string | null;
  readonly greenery?: string | null;
  readonly shading_area?: string | null;
  readonly construction_material?: string | null;
  readonly imageability?: string | null;
  readonly enclosure?: string | null;
  readonly human_scale?: string | null;
  readonly transparency?: string | null;
  readonly complexity?: string | null;
  readonly safe?: string | null;
  readonly lively?: string | null;
  readonly beautiful?: string | null;
  readonly wealthy?: string | null;
  readonly boring?: string | null;
  readonly depressing?: string | null;
  readonly eating_drinking?: (string | null)[] | null;
  readonly nature_exploration?: (string | null)[] | null;
  readonly community_gathering?: (string | null)[] | null;
  readonly citywalking?: (string | null)[] | null;
  readonly urban_sightseeing?: (string | null)[] | null;
  readonly streetscape_perception?: (string | null)[] | null;
  readonly functionality?: (string | null)[] | null;
  readonly accessibility?: (string | null)[] | null;
  readonly contact_density?: (string | null)[] | null;
  readonly email?: string | null;
  readonly nus_id?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySurveyResult = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SurveyResult, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly comfort_1?: string | null;
  readonly comfort_2?: string | null;
  readonly comfort_3?: string | null;
  readonly comfort_4?: string | null;
  readonly comfort_5?: string | null;
  readonly comfort_6?: string | null;
  readonly thermal_comfort_1?: string | null;
  readonly thermal_comfort_2?: string | null;
  readonly thermal_comfort_3?: string | null;
  readonly thermal_comfort_4?: string | null;
  readonly thermal_comfort_5?: string | null;
  readonly thermal_comfort_6?: string | null;
  readonly temperature?: string | null;
  readonly sun_intensity?: string | null;
  readonly heat_sources?: string | null;
  readonly humidity?: string | null;
  readonly wind_velocity?: string | null;
  readonly traffic_flow?: string | null;
  readonly greenery?: string | null;
  readonly shading_area?: string | null;
  readonly construction_material?: string | null;
  readonly imageability?: string | null;
  readonly enclosure?: string | null;
  readonly human_scale?: string | null;
  readonly transparency?: string | null;
  readonly complexity?: string | null;
  readonly safe?: string | null;
  readonly lively?: string | null;
  readonly beautiful?: string | null;
  readonly wealthy?: string | null;
  readonly boring?: string | null;
  readonly depressing?: string | null;
  readonly eating_drinking?: (string | null)[] | null;
  readonly nature_exploration?: (string | null)[] | null;
  readonly community_gathering?: (string | null)[] | null;
  readonly citywalking?: (string | null)[] | null;
  readonly urban_sightseeing?: (string | null)[] | null;
  readonly streetscape_perception?: (string | null)[] | null;
  readonly functionality?: (string | null)[] | null;
  readonly accessibility?: (string | null)[] | null;
  readonly contact_density?: (string | null)[] | null;
  readonly email?: string | null;
  readonly nus_id?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SurveyResult = LazyLoading extends LazyLoadingDisabled ? EagerSurveyResult : LazySurveyResult

export declare const SurveyResult: (new (init: ModelInit<SurveyResult>) => SurveyResult) & {
  copyOf(source: SurveyResult, mutator: (draft: MutableModel<SurveyResult>) => MutableModel<SurveyResult> | void): SurveyResult;
}