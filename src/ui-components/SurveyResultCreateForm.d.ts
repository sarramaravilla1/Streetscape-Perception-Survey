/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SurveyResultCreateFormInputValues = {
    question1?: string;
    question2?: string;
    question3?: string;
    question4?: string;
    question5?: string;
    question6?: string;
    question7?: string;
    question8?: string;
    question9?: string;
    question10?: string;
    question11?: string;
    question12?: string;
    question13?: string;
    question14?: string;
    question15?: string;
    question16?: string;
    question17?: string;
    question18?: string;
    question19?: string;
    question20?: string;
    question21?: string;
    question22?: string;
    question23?: string;
    question24?: string;
    question25?: string;
    question26?: string;
};
export declare type SurveyResultCreateFormValidationValues = {
    question1?: ValidationFunction<string>;
    question2?: ValidationFunction<string>;
    question3?: ValidationFunction<string>;
    question4?: ValidationFunction<string>;
    question5?: ValidationFunction<string>;
    question6?: ValidationFunction<string>;
    question7?: ValidationFunction<string>;
    question8?: ValidationFunction<string>;
    question9?: ValidationFunction<string>;
    question10?: ValidationFunction<string>;
    question11?: ValidationFunction<string>;
    question12?: ValidationFunction<string>;
    question13?: ValidationFunction<string>;
    question14?: ValidationFunction<string>;
    question15?: ValidationFunction<string>;
    question16?: ValidationFunction<string>;
    question17?: ValidationFunction<string>;
    question18?: ValidationFunction<string>;
    question19?: ValidationFunction<string>;
    question20?: ValidationFunction<string>;
    question21?: ValidationFunction<string>;
    question22?: ValidationFunction<string>;
    question23?: ValidationFunction<string>;
    question24?: ValidationFunction<string>;
    question25?: ValidationFunction<string>;
    question26?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SurveyResultCreateFormOverridesProps = {
    SurveyResultCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    question1?: PrimitiveOverrideProps<TextFieldProps>;
    question2?: PrimitiveOverrideProps<TextFieldProps>;
    question3?: PrimitiveOverrideProps<TextFieldProps>;
    question4?: PrimitiveOverrideProps<TextFieldProps>;
    question5?: PrimitiveOverrideProps<TextFieldProps>;
    question6?: PrimitiveOverrideProps<TextFieldProps>;
    question7?: PrimitiveOverrideProps<TextFieldProps>;
    question8?: PrimitiveOverrideProps<TextFieldProps>;
    question9?: PrimitiveOverrideProps<TextFieldProps>;
    question10?: PrimitiveOverrideProps<TextFieldProps>;
    question11?: PrimitiveOverrideProps<TextFieldProps>;
    question12?: PrimitiveOverrideProps<TextFieldProps>;
    question13?: PrimitiveOverrideProps<TextFieldProps>;
    question14?: PrimitiveOverrideProps<TextFieldProps>;
    question15?: PrimitiveOverrideProps<TextFieldProps>;
    question16?: PrimitiveOverrideProps<TextFieldProps>;
    question17?: PrimitiveOverrideProps<TextFieldProps>;
    question18?: PrimitiveOverrideProps<TextFieldProps>;
    question19?: PrimitiveOverrideProps<TextFieldProps>;
    question20?: PrimitiveOverrideProps<TextFieldProps>;
    question21?: PrimitiveOverrideProps<TextFieldProps>;
    question22?: PrimitiveOverrideProps<TextFieldProps>;
    question23?: PrimitiveOverrideProps<TextFieldProps>;
    question24?: PrimitiveOverrideProps<TextFieldProps>;
    question25?: PrimitiveOverrideProps<TextFieldProps>;
    question26?: PrimitiveOverrideProps<TextFieldProps>;
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
