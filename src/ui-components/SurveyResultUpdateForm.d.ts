/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SurveyResult } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SurveyResultUpdateFormInputValues = {
    question1?: string;
};
export declare type SurveyResultUpdateFormValidationValues = {
    question1?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SurveyResultUpdateFormOverridesProps = {
    SurveyResultUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    question1?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SurveyResultUpdateFormProps = React.PropsWithChildren<{
    overrides?: SurveyResultUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    surveyResult?: SurveyResult;
    onSubmit?: (fields: SurveyResultUpdateFormInputValues) => SurveyResultUpdateFormInputValues;
    onSuccess?: (fields: SurveyResultUpdateFormInputValues) => void;
    onError?: (fields: SurveyResultUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SurveyResultUpdateFormInputValues) => SurveyResultUpdateFormInputValues;
    onValidate?: SurveyResultUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SurveyResultUpdateForm(props: SurveyResultUpdateFormProps): React.ReactElement;
