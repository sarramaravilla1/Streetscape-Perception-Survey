/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SurveyResultCreateFormInputValues = {
    question1?: string;
};
export declare type SurveyResultCreateFormValidationValues = {
    question1?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SurveyResultCreateFormOverridesProps = {
    SurveyResultCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    question1?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SurveyResultCreateFormProps = React.PropsWithChildren<{
    overrides?: SurveyResultCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SurveyResultCreateFormInputValues) => SurveyResultCreateFormInputValues;
    onSuccess?: (fields: SurveyResultCreateFormInputValues) => void;
    onError?: (fields: SurveyResultCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SurveyResultCreateFormInputValues) => SurveyResultCreateFormInputValues;
    onValidate?: SurveyResultCreateFormValidationValues;
} & React.CSSProperties>;
export default function SurveyResultCreateForm(props: SurveyResultCreateFormProps): React.ReactElement;
