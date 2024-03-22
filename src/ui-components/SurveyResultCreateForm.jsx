/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { SurveyResult } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function SurveyResultCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
    question10: "",
    question11: "",
    question12: "",
    question13: "",
    question14: "",
    question15: "",
    question16: "",
    question17: "",
    question18: "",
    question19: "",
    question20: "",
    question21: "",
    question22: "",
    question23: "",
    question24: "",
    question25: "",
    question26: "",
  };
  const [question1, setQuestion1] = React.useState(initialValues.question1);
  const [question2, setQuestion2] = React.useState(initialValues.question2);
  const [question3, setQuestion3] = React.useState(initialValues.question3);
  const [question4, setQuestion4] = React.useState(initialValues.question4);
  const [question5, setQuestion5] = React.useState(initialValues.question5);
  const [question6, setQuestion6] = React.useState(initialValues.question6);
  const [question7, setQuestion7] = React.useState(initialValues.question7);
  const [question8, setQuestion8] = React.useState(initialValues.question8);
  const [question9, setQuestion9] = React.useState(initialValues.question9);
  const [question10, setQuestion10] = React.useState(initialValues.question10);
  const [question11, setQuestion11] = React.useState(initialValues.question11);
  const [question12, setQuestion12] = React.useState(initialValues.question12);
  const [question13, setQuestion13] = React.useState(initialValues.question13);
  const [question14, setQuestion14] = React.useState(initialValues.question14);
  const [question15, setQuestion15] = React.useState(initialValues.question15);
  const [question16, setQuestion16] = React.useState(initialValues.question16);
  const [question17, setQuestion17] = React.useState(initialValues.question17);
  const [question18, setQuestion18] = React.useState(initialValues.question18);
  const [question19, setQuestion19] = React.useState(initialValues.question19);
  const [question20, setQuestion20] = React.useState(initialValues.question20);
  const [question21, setQuestion21] = React.useState(initialValues.question21);
  const [question22, setQuestion22] = React.useState(initialValues.question22);
  const [question23, setQuestion23] = React.useState(initialValues.question23);
  const [question24, setQuestion24] = React.useState(initialValues.question24);
  const [question25, setQuestion25] = React.useState(initialValues.question25);
  const [question26, setQuestion26] = React.useState(initialValues.question26);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setQuestion1(initialValues.question1);
    setQuestion2(initialValues.question2);
    setQuestion3(initialValues.question3);
    setQuestion4(initialValues.question4);
    setQuestion5(initialValues.question5);
    setQuestion6(initialValues.question6);
    setQuestion7(initialValues.question7);
    setQuestion8(initialValues.question8);
    setQuestion9(initialValues.question9);
    setQuestion10(initialValues.question10);
    setQuestion11(initialValues.question11);
    setQuestion12(initialValues.question12);
    setQuestion13(initialValues.question13);
    setQuestion14(initialValues.question14);
    setQuestion15(initialValues.question15);
    setQuestion16(initialValues.question16);
    setQuestion17(initialValues.question17);
    setQuestion18(initialValues.question18);
    setQuestion19(initialValues.question19);
    setQuestion20(initialValues.question20);
    setQuestion21(initialValues.question21);
    setQuestion22(initialValues.question22);
    setQuestion23(initialValues.question23);
    setQuestion24(initialValues.question24);
    setQuestion25(initialValues.question25);
    setQuestion26(initialValues.question26);
    setErrors({});
  };
  const validations = {
    question1: [],
    question2: [],
    question3: [],
    question4: [],
    question5: [],
    question6: [],
    question7: [],
    question8: [],
    question9: [],
    question10: [],
    question11: [],
    question12: [],
    question13: [],
    question14: [],
    question15: [],
    question16: [],
    question17: [],
    question18: [],
    question19: [],
    question20: [],
    question21: [],
    question22: [],
    question23: [],
    question24: [],
    question25: [],
    question26: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          question1,
          question2,
          question3,
          question4,
          question5,
          question6,
          question7,
          question8,
          question9,
          question10,
          question11,
          question12,
          question13,
          question14,
          question15,
          question16,
          question17,
          question18,
          question19,
          question20,
          question21,
          question22,
          question23,
          question24,
          question25,
          question26,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new SurveyResult(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "SurveyResultCreateForm")}
      {...rest}
    >
      <TextField
        label="Question1"
        isRequired={false}
        isReadOnly={false}
        value={question1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question1: value,
              question2,
              question3,
              question4,
              question5,
              question6,
              question7,
              question8,
              question9,
              question10,
              question11,
              question12,
              question13,
              question14,
              question15,
              question16,
              question17,
              question18,
              question19,
              question20,
              question21,
              question22,
              question23,
              question24,
              question25,
              question26,
            };
            const result = onChange(modelFields);
            value = result?.question1 ?? value;
          }
          if (errors.question1?.hasError) {
            runValidationTasks("question1", value);
          }
          setQuestion1(value);
        }}
        onBlur={() => runValidationTasks("question1", question1)}
        errorMessage={errors.question1?.errorMessage}
        hasError={errors.question1?.hasError}
        {...getOverrideProps(overrides, "question1")}
      ></TextField>
      <TextField
        label="Question2"
        isRequired={false}
        isReadOnly={false}
        value={question2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question1,
              question2: value,
              question3,
              question4,
              question5,
              question6,
              question7,
              question8,
              question9,
              question10,
              question11,
              question12,
              question13,
              question14,
              question15,
              question16,
              question17,
              question18,
              question19,
              question20,
              question21,
              question22,
              question23,
              question24,
              question25,
              question26,
            };
            const result = onChange(modelFields);
            value = result?.question2 ?? value;
          }
          if (errors.question2?.hasError) {
            runValidationTasks("question2", value);
          }
          setQuestion2(value);
        }}
        onBlur={() => runValidationTasks("question2", question2)}
        errorMessage={errors.question2?.errorMessage}
        hasError={errors.question2?.hasError}
        {...getOverrideProps(overrides, "question2")}
      ></TextField>
      <TextField
        label="Question3"
        isRequired={false}
        isReadOnly={false}
        value={question3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question1,
              question2,
              question3: value,
              question4,
              question5,
              question6,
              question7,
              question8,
              question9,
              question10,
              question11,
              question12,
              question13,
              question14,
              question15,
              question16,
              question17,
              question18,
              question19,
              question20,
              question21,
              question22,
              question23,
              question24,
              question25,
              question26,
            };
            const result = onChange(modelFields);
            value = result?.question3 ?? value;
          }
          if (errors.question3?.hasError) {
            runValidationTasks("question3", value);
          }
          setQuestion3(value);
        }}
        onBlur={() => runValidationTasks("question3", question3)}
        errorMessage={errors.question3?.errorMessage}
        hasError={errors.question3?.hasError}
        {...getOverrideProps(overrides, "question3")}
      ></TextField>
      <TextField
        label="Question4"
        isRequired={false}
        isReadOnly={false}
        value={question4}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question1,
              question2,
              question3,
              question4: value,
              question5,
              question6,
              question7,
              question8,
              question9,
              question10,
              question11,
              question12,
              question13,
              question14,
              question15,
              question16,
              question17,
              question18,
              question19,
              question20,
              question21,
              question22,
              question23,
              question24,
              question25,
              question26,
            };
            const result = onChange(modelFields);
            value = result?.question4 ?? value;
          }
          if (errors.question4?.hasError) {
            runValidationTasks("question4", value);
          }
          setQuestion4(value);
        }}
        onBlur={() => runValidationTasks("question4", question4)}
        errorMessage={errors.question4?.errorMessage}
        hasError={errors.question4?.hasError}
        {...getOverrideProps(overrides, "question4")}
      ></TextField>
      <TextField
        label="Question5"
        isRequired={false}
        isReadOnly={false}
        value={question5}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question1,
              question2,
              question3,
              question4,
              question5: value,
              question6,
              question7,
              question8,
              question9,
              question10,
              question11,
              question12,
              question13,
              question14,
              question15,
              question16,
              question17,
              question18,
              question19,
              question20,
              question21,
              question22,
              question23,
              question24,
              question25,
              question26,
            };
            const result = onChange(modelFields);
            value = result?.question5 ?? value;
          }
          if (errors.question5?.hasError) {
            runValidationTasks("question5", value);
          }
          setQuestion5(value);
        }}
        onBlur={() => runValidationTasks("question5", question5)}
        errorMessage={errors.question5?.errorMessage}
        hasError={errors.question5?.hasError}
        {...getOverrideProps(overrides, "question5")}
      ></TextField>
      <TextField
        label="Question6"
        isRequired={false}
        isReadOnly={false}
        value={question6}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question1,
              question2,
              question3,
              question4,
              question5,
              question6: value,
              question7,
              question8,
              question9,
              question10,
              question11,
              question12,
              question13,
              question14,
              question15,
              question16,
              question17,
              question18,
              question19,
              question20,
              question21,
              question22,
              question23,
              question24,
              question25,
              question26,
            };
            const result = onChange(modelFields);
            value = result?.question6 ?? value;
          }
          if (errors.question6?.hasError) {
            runValidationTasks("question6", value);
          }
          setQuestion6(value);
        }}
        onBlur={() => runValidationTasks("question6", question6)}
        errorMessage={errors.question6?.errorMessage}
        hasError={errors.question6?.hasError}
        {...getOverrideProps(overrides, "question6")}
      ></TextField>
      <TextField
        label="Question7"
        isRequired={false}
        isReadOnly={false}
        value={question7}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question1,
              question2,
              question3,
              question4,
              question5,
              question6,
              question7: value,
              question8,
              question9,
              question10,
              question11,
              question12,
              question13,
              question14,
              question15,
              question16,
              question17,
              question18,
              question19,
              question20,
              question21,
              question22,
              question23,
              question24,
              question25,
              question26,
            };
            const result = onChange(modelFields);
            value = result?.question7 ?? value;
          }
          if (errors.question7?.hasError) {
            runValidationTasks("question7", value);
          }
          setQuestion7(value);
        }}
        onBlur={() => runValidationTasks("question7", question7)}
        errorMessage={errors.question7?.errorMessage}
        hasError={errors.question7?.hasError}
        {...getOverrideProps(overrides, "question7")}
      ></TextField>
      <TextField
        label="Question8"
        isRequired={false}
        isReadOnly={false}
        value={question8}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question1,
              question2,
              question3,
              question4,
              question5,
              question6,
              question7,
              question8: value,
              question9,
              question10,
              question11,
              question12,
              question13,
              question14,
              question15,
              question16,
              question17,
              question18,
              question19,
              question20,
              question21,
              question22,
              question23,
              question24,
              question25,
              question26,
            };
            const result = onChange(modelFields);
            value = result?.question8 ?? value;
          }
          if (errors.question8?.hasError) {
            runValidationTasks("question8", value);
          }
          setQuestion8(value);
        }}
        onBlur={() => runValidationTasks("question8", question8)}
        errorMessage={errors.question8?.errorMessage}
        hasError={errors.question8?.hasError}
        {...getOverrideProps(overrides, "question8")}
      ></TextField>
      <TextField
        label="Question9"
        isRequired={false}
        isReadOnly={false}
        value={question9}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question1,
              question2,
              question3,
              question4,
              question5,
              question6,
              question7,
              question8,
              question9: value,
              question10,
              question11,
              question12,
              question13,
              question14,
              question15,
              question16,
              question17,
              question18,
              question19,
              question20,
              question21,
              question22,
              question23,
              question24,
              question25,
              question26,
            };
            const result = onChange(modelFields);
            value = result?.question9 ?? value;
          }
          if (errors.question9?.hasError) {
            runValidationTasks("question9", value);
          }
          setQuestion9(value);
        }}
        onBlur={() => runValidationTasks("question9", question9)}
        errorMessage={errors.question9?.errorMessage}
        hasError={errors.question9?.hasError}
        {...getOverrideProps(overrides, "question9")}
      ></TextField>
      <TextField
        label="Question10"
        isRequired={false}
        isReadOnly={false}
        value={question10}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question1,
              question2,
              question3,
              question4,
              question5,
              question6,
              question7,
              question8,
              question9,
              question10: value,
              question11,
              question12,
              question13,
              question14,
              question15,
              question16,
              question17,
              question18,
              question19,
              question20,
              question21,
              question22,
              question23,
              question24,
              question25,
              question26,
            };
            const result = onChange(modelFields);
            value = result?.question10 ?? value;
          }
          if (errors.question10?.hasError) {
            runValidationTasks("question10", value);
          }
          setQuestion10(value);
        }}
        onBlur={() => runValidationTasks("question10", question10)}
        errorMessage={errors.question10?.errorMessage}
        hasError={errors.question10?.hasError}
        {...getOverrideProps(overrides, "question10")}
      ></TextField>
      <TextField
        label="Question11"
        isRequired={false}
        isReadOnly={false}
        value={question11}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question1,
              question2,
              question3,
              question4,
              question5,
              question6,
              question7,
              question8,
              question9,
              question10,
              question11: value,
              question12,
              question13,
              question14,
              question15,
              question16,
              question17,
              question18,
              question19,
              question20,
              question21,
              question22,
              question23,
              question24,
              question25,
              question26,
            };
            const result = onChange(modelFields);
            value = result?.question11 ?? value;
          }
          if (errors.question11?.hasError) {
            runValidationTasks("question11", value);
          }
          setQuestion11(value);
        }}
        onBlur={() => runValidationTasks("question11", question11)}
        errorMessage={errors.question11?.errorMessage}
        hasError={errors.question11?.hasError}
        {...getOverrideProps(overrides, "question11")}
      ></TextField>
      <TextField
        label="Question12"
        isRequired={false}
        isReadOnly={false}
        value={question12}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question1,
              question2,
              question3,
              question4,
              question5,
              question6,
              question7,
              question8,
              question9,
              question10,
              question11,
              question12: value,
              question13,
              question14,
              question15,
              question16,
              question17,
              question18,
              question19,
              question20,
              question21,
              question22,
              question23,
              question24,
              question25,
              question26,
            };
            const result = onChange(modelFields);
            value = result?.question12 ?? value;
          }
          if (errors.question12?.hasError) {
            runValidationTasks("question12", value);
          }
          setQuestion12(value);
        }}
        onBlur={() => runValidationTasks("question12", question12)}
        errorMessage={errors.question12?.errorMessage}
        hasError={errors.question12?.hasError}
        {...getOverrideProps(overrides, "question12")}
      ></TextField>
      <TextField
        label="Question13"
        isRequired={false}
        isReadOnly={false}
        value={question13}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question1,
              question2,
              question3,
              question4,
              question5,
              question6,
              question7,
              question8,
              question9,
              question10,
              question11,
              question12,
              question13: value,
              question14,
              question15,
              question16,
              question17,
              question18,
              question19,
              question20,
              question21,
              question22,
              question23,
              question24,
              question25,
              question26,
            };
            const result = onChange(modelFields);
            value = result?.question13 ?? value;
          }
          if (errors.question13?.hasError) {
            runValidationTasks("question13", value);
          }
          setQuestion13(value);
        }}
        onBlur={() => runValidationTasks("question13", question13)}
        errorMessage={errors.question13?.errorMessage}
        hasError={errors.question13?.hasError}
        {...getOverrideProps(overrides, "question13")}
      ></TextField>
      <TextField
        label="Question14"
        isRequired={false}
        isReadOnly={false}
        value={question14}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question1,
              question2,
              question3,
              question4,
              question5,
              question6,
              question7,
              question8,
              question9,
              question10,
              question11,
              question12,
              question13,
              question14: value,
              question15,
              question16,
              question17,
              question18,
              question19,
              question20,
              question21,
              question22,
              question23,
              question24,
              question25,
              question26,
            };
            const result = onChange(modelFields);
            value = result?.question14 ?? value;
          }
          if (errors.question14?.hasError) {
            runValidationTasks("question14", value);
          }
          setQuestion14(value);
        }}
        onBlur={() => runValidationTasks("question14", question14)}
        errorMessage={errors.question14?.errorMessage}
        hasError={errors.question14?.hasError}
        {...getOverrideProps(overrides, "question14")}
      ></TextField>
      <TextField
        label="Question15"
        isRequired={false}
        isReadOnly={false}
        value={question15}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question1,
              question2,
              question3,
              question4,
              question5,
              question6,
              question7,
              question8,
              question9,
              question10,
              question11,
              question12,
              question13,
              question14,
              question15: value,
              question16,
              question17,
              question18,
              question19,
              question20,
              question21,
              question22,
              question23,
              question24,
              question25,
              question26,
            };
            const result = onChange(modelFields);
            value = result?.question15 ?? value;
          }
          if (errors.question15?.hasError) {
            runValidationTasks("question15", value);
          }
          setQuestion15(value);
        }}
        onBlur={() => runValidationTasks("question15", question15)}
        errorMessage={errors.question15?.errorMessage}
        hasError={errors.question15?.hasError}
        {...getOverrideProps(overrides, "question15")}
      ></TextField>
      <TextField
        label="Question16"
        isRequired={false}
        isReadOnly={false}
        value={question16}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question1,
              question2,
              question3,
              question4,
              question5,
              question6,
              question7,
              question8,
              question9,
              question10,
              question11,
              question12,
              question13,
              question14,
              question15,
              question16: value,
              question17,
              question18,
              question19,
              question20,
              question21,
              question22,
              question23,
              question24,
              question25,
              question26,
            };
            const result = onChange(modelFields);
            value = result?.question16 ?? value;
          }
          if (errors.question16?.hasError) {
            runValidationTasks("question16", value);
          }
          setQuestion16(value);
        }}
        onBlur={() => runValidationTasks("question16", question16)}
        errorMessage={errors.question16?.errorMessage}
        hasError={errors.question16?.hasError}
        {...getOverrideProps(overrides, "question16")}
      ></TextField>
      <TextField
        label="Question17"
        isRequired={false}
        isReadOnly={false}
        value={question17}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question1,
              question2,
              question3,
              question4,
              question5,
              question6,
              question7,
              question8,
              question9,
              question10,
              question11,
              question12,
              question13,
              question14,
              question15,
              question16,
              question17: value,
              question18,
              question19,
              question20,
              question21,
              question22,
              question23,
              question24,
              question25,
              question26,
            };
            const result = onChange(modelFields);
            value = result?.question17 ?? value;
          }
          if (errors.question17?.hasError) {
            runValidationTasks("question17", value);
          }
          setQuestion17(value);
        }}
        onBlur={() => runValidationTasks("question17", question17)}
        errorMessage={errors.question17?.errorMessage}
        hasError={errors.question17?.hasError}
        {...getOverrideProps(overrides, "question17")}
      ></TextField>
      <TextField
        label="Question18"
        isRequired={false}
        isReadOnly={false}
        value={question18}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question1,
              question2,
              question3,
              question4,
              question5,
              question6,
              question7,
              question8,
              question9,
              question10,
              question11,
              question12,
              question13,
              question14,
              question15,
              question16,
              question17,
              question18: value,
              question19,
              question20,
              question21,
              question22,
              question23,
              question24,
              question25,
              question26,
            };
            const result = onChange(modelFields);
            value = result?.question18 ?? value;
          }
          if (errors.question18?.hasError) {
            runValidationTasks("question18", value);
          }
          setQuestion18(value);
        }}
        onBlur={() => runValidationTasks("question18", question18)}
        errorMessage={errors.question18?.errorMessage}
        hasError={errors.question18?.hasError}
        {...getOverrideProps(overrides, "question18")}
      ></TextField>
      <TextField
        label="Question19"
        isRequired={false}
        isReadOnly={false}
        value={question19}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question1,
              question2,
              question3,
              question4,
              question5,
              question6,
              question7,
              question8,
              question9,
              question10,
              question11,
              question12,
              question13,
              question14,
              question15,
              question16,
              question17,
              question18,
              question19: value,
              question20,
              question21,
              question22,
              question23,
              question24,
              question25,
              question26,
            };
            const result = onChange(modelFields);
            value = result?.question19 ?? value;
          }
          if (errors.question19?.hasError) {
            runValidationTasks("question19", value);
          }
          setQuestion19(value);
        }}
        onBlur={() => runValidationTasks("question19", question19)}
        errorMessage={errors.question19?.errorMessage}
        hasError={errors.question19?.hasError}
        {...getOverrideProps(overrides, "question19")}
      ></TextField>
      <TextField
        label="Question20"
        isRequired={false}
        isReadOnly={false}
        value={question20}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question1,
              question2,
              question3,
              question4,
              question5,
              question6,
              question7,
              question8,
              question9,
              question10,
              question11,
              question12,
              question13,
              question14,
              question15,
              question16,
              question17,
              question18,
              question19,
              question20: value,
              question21,
              question22,
              question23,
              question24,
              question25,
              question26,
            };
            const result = onChange(modelFields);
            value = result?.question20 ?? value;
          }
          if (errors.question20?.hasError) {
            runValidationTasks("question20", value);
          }
          setQuestion20(value);
        }}
        onBlur={() => runValidationTasks("question20", question20)}
        errorMessage={errors.question20?.errorMessage}
        hasError={errors.question20?.hasError}
        {...getOverrideProps(overrides, "question20")}
      ></TextField>
      <TextField
        label="Question21"
        isRequired={false}
        isReadOnly={false}
        value={question21}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question1,
              question2,
              question3,
              question4,
              question5,
              question6,
              question7,
              question8,
              question9,
              question10,
              question11,
              question12,
              question13,
              question14,
              question15,
              question16,
              question17,
              question18,
              question19,
              question20,
              question21: value,
              question22,
              question23,
              question24,
              question25,
              question26,
            };
            const result = onChange(modelFields);
            value = result?.question21 ?? value;
          }
          if (errors.question21?.hasError) {
            runValidationTasks("question21", value);
          }
          setQuestion21(value);
        }}
        onBlur={() => runValidationTasks("question21", question21)}
        errorMessage={errors.question21?.errorMessage}
        hasError={errors.question21?.hasError}
        {...getOverrideProps(overrides, "question21")}
      ></TextField>
      <TextField
        label="Question22"
        isRequired={false}
        isReadOnly={false}
        value={question22}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question1,
              question2,
              question3,
              question4,
              question5,
              question6,
              question7,
              question8,
              question9,
              question10,
              question11,
              question12,
              question13,
              question14,
              question15,
              question16,
              question17,
              question18,
              question19,
              question20,
              question21,
              question22: value,
              question23,
              question24,
              question25,
              question26,
            };
            const result = onChange(modelFields);
            value = result?.question22 ?? value;
          }
          if (errors.question22?.hasError) {
            runValidationTasks("question22", value);
          }
          setQuestion22(value);
        }}
        onBlur={() => runValidationTasks("question22", question22)}
        errorMessage={errors.question22?.errorMessage}
        hasError={errors.question22?.hasError}
        {...getOverrideProps(overrides, "question22")}
      ></TextField>
      <TextField
        label="Question23"
        isRequired={false}
        isReadOnly={false}
        value={question23}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question1,
              question2,
              question3,
              question4,
              question5,
              question6,
              question7,
              question8,
              question9,
              question10,
              question11,
              question12,
              question13,
              question14,
              question15,
              question16,
              question17,
              question18,
              question19,
              question20,
              question21,
              question22,
              question23: value,
              question24,
              question25,
              question26,
            };
            const result = onChange(modelFields);
            value = result?.question23 ?? value;
          }
          if (errors.question23?.hasError) {
            runValidationTasks("question23", value);
          }
          setQuestion23(value);
        }}
        onBlur={() => runValidationTasks("question23", question23)}
        errorMessage={errors.question23?.errorMessage}
        hasError={errors.question23?.hasError}
        {...getOverrideProps(overrides, "question23")}
      ></TextField>
      <TextField
        label="Question24"
        isRequired={false}
        isReadOnly={false}
        value={question24}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question1,
              question2,
              question3,
              question4,
              question5,
              question6,
              question7,
              question8,
              question9,
              question10,
              question11,
              question12,
              question13,
              question14,
              question15,
              question16,
              question17,
              question18,
              question19,
              question20,
              question21,
              question22,
              question23,
              question24: value,
              question25,
              question26,
            };
            const result = onChange(modelFields);
            value = result?.question24 ?? value;
          }
          if (errors.question24?.hasError) {
            runValidationTasks("question24", value);
          }
          setQuestion24(value);
        }}
        onBlur={() => runValidationTasks("question24", question24)}
        errorMessage={errors.question24?.errorMessage}
        hasError={errors.question24?.hasError}
        {...getOverrideProps(overrides, "question24")}
      ></TextField>
      <TextField
        label="Question25"
        isRequired={false}
        isReadOnly={false}
        value={question25}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question1,
              question2,
              question3,
              question4,
              question5,
              question6,
              question7,
              question8,
              question9,
              question10,
              question11,
              question12,
              question13,
              question14,
              question15,
              question16,
              question17,
              question18,
              question19,
              question20,
              question21,
              question22,
              question23,
              question24,
              question25: value,
              question26,
            };
            const result = onChange(modelFields);
            value = result?.question25 ?? value;
          }
          if (errors.question25?.hasError) {
            runValidationTasks("question25", value);
          }
          setQuestion25(value);
        }}
        onBlur={() => runValidationTasks("question25", question25)}
        errorMessage={errors.question25?.errorMessage}
        hasError={errors.question25?.hasError}
        {...getOverrideProps(overrides, "question25")}
      ></TextField>
      <TextField
        label="Question26"
        isRequired={false}
        isReadOnly={false}
        value={question26}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              question1,
              question2,
              question3,
              question4,
              question5,
              question6,
              question7,
              question8,
              question9,
              question10,
              question11,
              question12,
              question13,
              question14,
              question15,
              question16,
              question17,
              question18,
              question19,
              question20,
              question21,
              question22,
              question23,
              question24,
              question25,
              question26: value,
            };
            const result = onChange(modelFields);
            value = result?.question26 ?? value;
          }
          if (errors.question26?.hasError) {
            runValidationTasks("question26", value);
          }
          setQuestion26(value);
        }}
        onBlur={() => runValidationTasks("question26", question26)}
        errorMessage={errors.question26?.errorMessage}
        hasError={errors.question26?.hasError}
        {...getOverrideProps(overrides, "question26")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
