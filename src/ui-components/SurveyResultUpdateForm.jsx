/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { SurveyResult } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function SurveyResultUpdateForm(props) {
  const {
    id: idProp,
    surveyResult: surveyResultModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    comfort_1: "",
    comfort_2: "",
    comfort_3: "",
    comfort_4: "",
    comfort_5: "",
    comfort_6: "",
    thermal_comfort_1: "",
    thermal_comfort_2: "",
    thermal_comfort_3: "",
    thermal_comfort_4: "",
    thermal_comfort_5: "",
    thermal_comfort_6: "",
    temperature: "",
    sun_intensity: "",
    heat_sources: "",
    humidity: "",
    wind_velocity: "",
    traffic_flow: "",
    greenery: "",
    shading_area: "",
    construction_material: "",
    imageability: "",
    enclosure: "",
    human_scale: "",
    transparency: "",
    complexity: "",
    safe: "",
    lively: "",
    beautiful: "",
    wealthy: "",
    boring: "",
    depressing: "",
    eating_drinking: [],
    nature_exploration: [],
    community_gathering: [],
    citywalking: [],
    urban_sightseeing: [],
    streetscape_perception: [],
    functionality: [],
    accessibility: [],
    contact_density: [],
    email: "",
    nus_id: "",
  };
  const [comfort_1, setComfort_1] = React.useState(initialValues.comfort_1);
  const [comfort_2, setComfort_2] = React.useState(initialValues.comfort_2);
  const [comfort_3, setComfort_3] = React.useState(initialValues.comfort_3);
  const [comfort_4, setComfort_4] = React.useState(initialValues.comfort_4);
  const [comfort_5, setComfort_5] = React.useState(initialValues.comfort_5);
  const [comfort_6, setComfort_6] = React.useState(initialValues.comfort_6);
  const [thermal_comfort_1, setThermal_comfort_1] = React.useState(
    initialValues.thermal_comfort_1
  );
  const [thermal_comfort_2, setThermal_comfort_2] = React.useState(
    initialValues.thermal_comfort_2
  );
  const [thermal_comfort_3, setThermal_comfort_3] = React.useState(
    initialValues.thermal_comfort_3
  );
  const [thermal_comfort_4, setThermal_comfort_4] = React.useState(
    initialValues.thermal_comfort_4
  );
  const [thermal_comfort_5, setThermal_comfort_5] = React.useState(
    initialValues.thermal_comfort_5
  );
  const [thermal_comfort_6, setThermal_comfort_6] = React.useState(
    initialValues.thermal_comfort_6
  );
  const [temperature, setTemperature] = React.useState(
    initialValues.temperature
  );
  const [sun_intensity, setSun_intensity] = React.useState(
    initialValues.sun_intensity
  );
  const [heat_sources, setHeat_sources] = React.useState(
    initialValues.heat_sources
  );
  const [humidity, setHumidity] = React.useState(initialValues.humidity);
  const [wind_velocity, setWind_velocity] = React.useState(
    initialValues.wind_velocity
  );
  const [traffic_flow, setTraffic_flow] = React.useState(
    initialValues.traffic_flow
  );
  const [greenery, setGreenery] = React.useState(initialValues.greenery);
  const [shading_area, setShading_area] = React.useState(
    initialValues.shading_area
  );
  const [construction_material, setConstruction_material] = React.useState(
    initialValues.construction_material
  );
  const [imageability, setImageability] = React.useState(
    initialValues.imageability
  );
  const [enclosure, setEnclosure] = React.useState(initialValues.enclosure);
  const [human_scale, setHuman_scale] = React.useState(
    initialValues.human_scale
  );
  const [transparency, setTransparency] = React.useState(
    initialValues.transparency
  );
  const [complexity, setComplexity] = React.useState(initialValues.complexity);
  const [safe, setSafe] = React.useState(initialValues.safe);
  const [lively, setLively] = React.useState(initialValues.lively);
  const [beautiful, setBeautiful] = React.useState(initialValues.beautiful);
  const [wealthy, setWealthy] = React.useState(initialValues.wealthy);
  const [boring, setBoring] = React.useState(initialValues.boring);
  const [depressing, setDepressing] = React.useState(initialValues.depressing);
  const [eating_drinking, setEating_drinking] = React.useState(
    initialValues.eating_drinking
  );
  const [nature_exploration, setNature_exploration] = React.useState(
    initialValues.nature_exploration
  );
  const [community_gathering, setCommunity_gathering] = React.useState(
    initialValues.community_gathering
  );
  const [citywalking, setCitywalking] = React.useState(
    initialValues.citywalking
  );
  const [urban_sightseeing, setUrban_sightseeing] = React.useState(
    initialValues.urban_sightseeing
  );
  const [streetscape_perception, setStreetscape_perception] = React.useState(
    initialValues.streetscape_perception
  );
  const [functionality, setFunctionality] = React.useState(
    initialValues.functionality
  );
  const [accessibility, setAccessibility] = React.useState(
    initialValues.accessibility
  );
  const [contact_density, setContact_density] = React.useState(
    initialValues.contact_density
  );
  const [email, setEmail] = React.useState(initialValues.email);
  const [nus_id, setNus_id] = React.useState(initialValues.nus_id);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = surveyResultRecord
      ? { ...initialValues, ...surveyResultRecord }
      : initialValues;
    setComfort_1(cleanValues.comfort_1);
    setComfort_2(cleanValues.comfort_2);
    setComfort_3(cleanValues.comfort_3);
    setComfort_4(cleanValues.comfort_4);
    setComfort_5(cleanValues.comfort_5);
    setComfort_6(cleanValues.comfort_6);
    setThermal_comfort_1(cleanValues.thermal_comfort_1);
    setThermal_comfort_2(cleanValues.thermal_comfort_2);
    setThermal_comfort_3(cleanValues.thermal_comfort_3);
    setThermal_comfort_4(cleanValues.thermal_comfort_4);
    setThermal_comfort_5(cleanValues.thermal_comfort_5);
    setThermal_comfort_6(cleanValues.thermal_comfort_6);
    setTemperature(cleanValues.temperature);
    setSun_intensity(cleanValues.sun_intensity);
    setHeat_sources(cleanValues.heat_sources);
    setHumidity(cleanValues.humidity);
    setWind_velocity(cleanValues.wind_velocity);
    setTraffic_flow(cleanValues.traffic_flow);
    setGreenery(cleanValues.greenery);
    setShading_area(cleanValues.shading_area);
    setConstruction_material(cleanValues.construction_material);
    setImageability(cleanValues.imageability);
    setEnclosure(cleanValues.enclosure);
    setHuman_scale(cleanValues.human_scale);
    setTransparency(cleanValues.transparency);
    setComplexity(cleanValues.complexity);
    setSafe(cleanValues.safe);
    setLively(cleanValues.lively);
    setBeautiful(cleanValues.beautiful);
    setWealthy(cleanValues.wealthy);
    setBoring(cleanValues.boring);
    setDepressing(cleanValues.depressing);
    setEating_drinking(cleanValues.eating_drinking ?? []);
    setCurrentEating_drinkingValue("");
    setNature_exploration(cleanValues.nature_exploration ?? []);
    setCurrentNature_explorationValue("");
    setCommunity_gathering(cleanValues.community_gathering ?? []);
    setCurrentCommunity_gatheringValue("");
    setCitywalking(cleanValues.citywalking ?? []);
    setCurrentCitywalkingValue("");
    setUrban_sightseeing(cleanValues.urban_sightseeing ?? []);
    setCurrentUrban_sightseeingValue("");
    setStreetscape_perception(cleanValues.streetscape_perception ?? []);
    setCurrentStreetscape_perceptionValue("");
    setFunctionality(cleanValues.functionality ?? []);
    setCurrentFunctionalityValue("");
    setAccessibility(cleanValues.accessibility ?? []);
    setCurrentAccessibilityValue("");
    setContact_density(cleanValues.contact_density ?? []);
    setCurrentContact_densityValue("");
    setEmail(cleanValues.email);
    setNus_id(cleanValues.nus_id);
    setErrors({});
  };
  const [surveyResultRecord, setSurveyResultRecord] = React.useState(
    surveyResultModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(SurveyResult, idProp)
        : surveyResultModelProp;
      setSurveyResultRecord(record);
    };
    queryData();
  }, [idProp, surveyResultModelProp]);
  React.useEffect(resetStateValues, [surveyResultRecord]);
  const [currentEating_drinkingValue, setCurrentEating_drinkingValue] =
    React.useState("");
  const eating_drinkingRef = React.createRef();
  const [currentNature_explorationValue, setCurrentNature_explorationValue] =
    React.useState("");
  const nature_explorationRef = React.createRef();
  const [currentCommunity_gatheringValue, setCurrentCommunity_gatheringValue] =
    React.useState("");
  const community_gatheringRef = React.createRef();
  const [currentCitywalkingValue, setCurrentCitywalkingValue] =
    React.useState("");
  const citywalkingRef = React.createRef();
  const [currentUrban_sightseeingValue, setCurrentUrban_sightseeingValue] =
    React.useState("");
  const urban_sightseeingRef = React.createRef();
  const [
    currentStreetscape_perceptionValue,
    setCurrentStreetscape_perceptionValue,
  ] = React.useState("");
  const streetscape_perceptionRef = React.createRef();
  const [currentFunctionalityValue, setCurrentFunctionalityValue] =
    React.useState("");
  const functionalityRef = React.createRef();
  const [currentAccessibilityValue, setCurrentAccessibilityValue] =
    React.useState("");
  const accessibilityRef = React.createRef();
  const [currentContact_densityValue, setCurrentContact_densityValue] =
    React.useState("");
  const contact_densityRef = React.createRef();
  const validations = {
    comfort_1: [],
    comfort_2: [],
    comfort_3: [],
    comfort_4: [],
    comfort_5: [],
    comfort_6: [],
    thermal_comfort_1: [],
    thermal_comfort_2: [],
    thermal_comfort_3: [],
    thermal_comfort_4: [],
    thermal_comfort_5: [],
    thermal_comfort_6: [],
    temperature: [],
    sun_intensity: [],
    heat_sources: [],
    humidity: [],
    wind_velocity: [],
    traffic_flow: [],
    greenery: [],
    shading_area: [],
    construction_material: [],
    imageability: [],
    enclosure: [],
    human_scale: [],
    transparency: [],
    complexity: [],
    safe: [],
    lively: [],
    beautiful: [],
    wealthy: [],
    boring: [],
    depressing: [],
    eating_drinking: [],
    nature_exploration: [],
    community_gathering: [],
    citywalking: [],
    urban_sightseeing: [],
    streetscape_perception: [],
    functionality: [],
    accessibility: [],
    contact_density: [],
    email: [],
    nus_id: [],
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
          comfort_1,
          comfort_2,
          comfort_3,
          comfort_4,
          comfort_5,
          comfort_6,
          thermal_comfort_1,
          thermal_comfort_2,
          thermal_comfort_3,
          thermal_comfort_4,
          thermal_comfort_5,
          thermal_comfort_6,
          temperature,
          sun_intensity,
          heat_sources,
          humidity,
          wind_velocity,
          traffic_flow,
          greenery,
          shading_area,
          construction_material,
          imageability,
          enclosure,
          human_scale,
          transparency,
          complexity,
          safe,
          lively,
          beautiful,
          wealthy,
          boring,
          depressing,
          eating_drinking,
          nature_exploration,
          community_gathering,
          citywalking,
          urban_sightseeing,
          streetscape_perception,
          functionality,
          accessibility,
          contact_density,
          email,
          nus_id,
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
          await DataStore.save(
            SurveyResult.copyOf(surveyResultRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "SurveyResultUpdateForm")}
      {...rest}
    >
      <TextField
        label="Comfort 1"
        isRequired={false}
        isReadOnly={false}
        value={comfort_1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1: value,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.comfort_1 ?? value;
          }
          if (errors.comfort_1?.hasError) {
            runValidationTasks("comfort_1", value);
          }
          setComfort_1(value);
        }}
        onBlur={() => runValidationTasks("comfort_1", comfort_1)}
        errorMessage={errors.comfort_1?.errorMessage}
        hasError={errors.comfort_1?.hasError}
        {...getOverrideProps(overrides, "comfort_1")}
      ></TextField>
      <TextField
        label="Comfort 2"
        isRequired={false}
        isReadOnly={false}
        value={comfort_2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2: value,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.comfort_2 ?? value;
          }
          if (errors.comfort_2?.hasError) {
            runValidationTasks("comfort_2", value);
          }
          setComfort_2(value);
        }}
        onBlur={() => runValidationTasks("comfort_2", comfort_2)}
        errorMessage={errors.comfort_2?.errorMessage}
        hasError={errors.comfort_2?.hasError}
        {...getOverrideProps(overrides, "comfort_2")}
      ></TextField>
      <TextField
        label="Comfort 3"
        isRequired={false}
        isReadOnly={false}
        value={comfort_3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3: value,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.comfort_3 ?? value;
          }
          if (errors.comfort_3?.hasError) {
            runValidationTasks("comfort_3", value);
          }
          setComfort_3(value);
        }}
        onBlur={() => runValidationTasks("comfort_3", comfort_3)}
        errorMessage={errors.comfort_3?.errorMessage}
        hasError={errors.comfort_3?.hasError}
        {...getOverrideProps(overrides, "comfort_3")}
      ></TextField>
      <TextField
        label="Comfort 4"
        isRequired={false}
        isReadOnly={false}
        value={comfort_4}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4: value,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.comfort_4 ?? value;
          }
          if (errors.comfort_4?.hasError) {
            runValidationTasks("comfort_4", value);
          }
          setComfort_4(value);
        }}
        onBlur={() => runValidationTasks("comfort_4", comfort_4)}
        errorMessage={errors.comfort_4?.errorMessage}
        hasError={errors.comfort_4?.hasError}
        {...getOverrideProps(overrides, "comfort_4")}
      ></TextField>
      <TextField
        label="Comfort 5"
        isRequired={false}
        isReadOnly={false}
        value={comfort_5}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5: value,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.comfort_5 ?? value;
          }
          if (errors.comfort_5?.hasError) {
            runValidationTasks("comfort_5", value);
          }
          setComfort_5(value);
        }}
        onBlur={() => runValidationTasks("comfort_5", comfort_5)}
        errorMessage={errors.comfort_5?.errorMessage}
        hasError={errors.comfort_5?.hasError}
        {...getOverrideProps(overrides, "comfort_5")}
      ></TextField>
      <TextField
        label="Comfort 6"
        isRequired={false}
        isReadOnly={false}
        value={comfort_6}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6: value,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.comfort_6 ?? value;
          }
          if (errors.comfort_6?.hasError) {
            runValidationTasks("comfort_6", value);
          }
          setComfort_6(value);
        }}
        onBlur={() => runValidationTasks("comfort_6", comfort_6)}
        errorMessage={errors.comfort_6?.errorMessage}
        hasError={errors.comfort_6?.hasError}
        {...getOverrideProps(overrides, "comfort_6")}
      ></TextField>
      <TextField
        label="Thermal comfort 1"
        isRequired={false}
        isReadOnly={false}
        value={thermal_comfort_1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1: value,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.thermal_comfort_1 ?? value;
          }
          if (errors.thermal_comfort_1?.hasError) {
            runValidationTasks("thermal_comfort_1", value);
          }
          setThermal_comfort_1(value);
        }}
        onBlur={() =>
          runValidationTasks("thermal_comfort_1", thermal_comfort_1)
        }
        errorMessage={errors.thermal_comfort_1?.errorMessage}
        hasError={errors.thermal_comfort_1?.hasError}
        {...getOverrideProps(overrides, "thermal_comfort_1")}
      ></TextField>
      <TextField
        label="Thermal comfort 2"
        isRequired={false}
        isReadOnly={false}
        value={thermal_comfort_2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2: value,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.thermal_comfort_2 ?? value;
          }
          if (errors.thermal_comfort_2?.hasError) {
            runValidationTasks("thermal_comfort_2", value);
          }
          setThermal_comfort_2(value);
        }}
        onBlur={() =>
          runValidationTasks("thermal_comfort_2", thermal_comfort_2)
        }
        errorMessage={errors.thermal_comfort_2?.errorMessage}
        hasError={errors.thermal_comfort_2?.hasError}
        {...getOverrideProps(overrides, "thermal_comfort_2")}
      ></TextField>
      <TextField
        label="Thermal comfort 3"
        isRequired={false}
        isReadOnly={false}
        value={thermal_comfort_3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3: value,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.thermal_comfort_3 ?? value;
          }
          if (errors.thermal_comfort_3?.hasError) {
            runValidationTasks("thermal_comfort_3", value);
          }
          setThermal_comfort_3(value);
        }}
        onBlur={() =>
          runValidationTasks("thermal_comfort_3", thermal_comfort_3)
        }
        errorMessage={errors.thermal_comfort_3?.errorMessage}
        hasError={errors.thermal_comfort_3?.hasError}
        {...getOverrideProps(overrides, "thermal_comfort_3")}
      ></TextField>
      <TextField
        label="Thermal comfort 4"
        isRequired={false}
        isReadOnly={false}
        value={thermal_comfort_4}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4: value,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.thermal_comfort_4 ?? value;
          }
          if (errors.thermal_comfort_4?.hasError) {
            runValidationTasks("thermal_comfort_4", value);
          }
          setThermal_comfort_4(value);
        }}
        onBlur={() =>
          runValidationTasks("thermal_comfort_4", thermal_comfort_4)
        }
        errorMessage={errors.thermal_comfort_4?.errorMessage}
        hasError={errors.thermal_comfort_4?.hasError}
        {...getOverrideProps(overrides, "thermal_comfort_4")}
      ></TextField>
      <TextField
        label="Thermal comfort 5"
        isRequired={false}
        isReadOnly={false}
        value={thermal_comfort_5}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5: value,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.thermal_comfort_5 ?? value;
          }
          if (errors.thermal_comfort_5?.hasError) {
            runValidationTasks("thermal_comfort_5", value);
          }
          setThermal_comfort_5(value);
        }}
        onBlur={() =>
          runValidationTasks("thermal_comfort_5", thermal_comfort_5)
        }
        errorMessage={errors.thermal_comfort_5?.errorMessage}
        hasError={errors.thermal_comfort_5?.hasError}
        {...getOverrideProps(overrides, "thermal_comfort_5")}
      ></TextField>
      <TextField
        label="Thermal comfort 6"
        isRequired={false}
        isReadOnly={false}
        value={thermal_comfort_6}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6: value,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.thermal_comfort_6 ?? value;
          }
          if (errors.thermal_comfort_6?.hasError) {
            runValidationTasks("thermal_comfort_6", value);
          }
          setThermal_comfort_6(value);
        }}
        onBlur={() =>
          runValidationTasks("thermal_comfort_6", thermal_comfort_6)
        }
        errorMessage={errors.thermal_comfort_6?.errorMessage}
        hasError={errors.thermal_comfort_6?.hasError}
        {...getOverrideProps(overrides, "thermal_comfort_6")}
      ></TextField>
      <TextField
        label="Temperature"
        isRequired={false}
        isReadOnly={false}
        value={temperature}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature: value,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.temperature ?? value;
          }
          if (errors.temperature?.hasError) {
            runValidationTasks("temperature", value);
          }
          setTemperature(value);
        }}
        onBlur={() => runValidationTasks("temperature", temperature)}
        errorMessage={errors.temperature?.errorMessage}
        hasError={errors.temperature?.hasError}
        {...getOverrideProps(overrides, "temperature")}
      ></TextField>
      <TextField
        label="Sun intensity"
        isRequired={false}
        isReadOnly={false}
        value={sun_intensity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity: value,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.sun_intensity ?? value;
          }
          if (errors.sun_intensity?.hasError) {
            runValidationTasks("sun_intensity", value);
          }
          setSun_intensity(value);
        }}
        onBlur={() => runValidationTasks("sun_intensity", sun_intensity)}
        errorMessage={errors.sun_intensity?.errorMessage}
        hasError={errors.sun_intensity?.hasError}
        {...getOverrideProps(overrides, "sun_intensity")}
      ></TextField>
      <TextField
        label="Heat sources"
        isRequired={false}
        isReadOnly={false}
        value={heat_sources}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources: value,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.heat_sources ?? value;
          }
          if (errors.heat_sources?.hasError) {
            runValidationTasks("heat_sources", value);
          }
          setHeat_sources(value);
        }}
        onBlur={() => runValidationTasks("heat_sources", heat_sources)}
        errorMessage={errors.heat_sources?.errorMessage}
        hasError={errors.heat_sources?.hasError}
        {...getOverrideProps(overrides, "heat_sources")}
      ></TextField>
      <TextField
        label="Humidity"
        isRequired={false}
        isReadOnly={false}
        value={humidity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity: value,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.humidity ?? value;
          }
          if (errors.humidity?.hasError) {
            runValidationTasks("humidity", value);
          }
          setHumidity(value);
        }}
        onBlur={() => runValidationTasks("humidity", humidity)}
        errorMessage={errors.humidity?.errorMessage}
        hasError={errors.humidity?.hasError}
        {...getOverrideProps(overrides, "humidity")}
      ></TextField>
      <TextField
        label="Wind velocity"
        isRequired={false}
        isReadOnly={false}
        value={wind_velocity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity: value,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.wind_velocity ?? value;
          }
          if (errors.wind_velocity?.hasError) {
            runValidationTasks("wind_velocity", value);
          }
          setWind_velocity(value);
        }}
        onBlur={() => runValidationTasks("wind_velocity", wind_velocity)}
        errorMessage={errors.wind_velocity?.errorMessage}
        hasError={errors.wind_velocity?.hasError}
        {...getOverrideProps(overrides, "wind_velocity")}
      ></TextField>
      <TextField
        label="Traffic flow"
        isRequired={false}
        isReadOnly={false}
        value={traffic_flow}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow: value,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.traffic_flow ?? value;
          }
          if (errors.traffic_flow?.hasError) {
            runValidationTasks("traffic_flow", value);
          }
          setTraffic_flow(value);
        }}
        onBlur={() => runValidationTasks("traffic_flow", traffic_flow)}
        errorMessage={errors.traffic_flow?.errorMessage}
        hasError={errors.traffic_flow?.hasError}
        {...getOverrideProps(overrides, "traffic_flow")}
      ></TextField>
      <TextField
        label="Greenery"
        isRequired={false}
        isReadOnly={false}
        value={greenery}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery: value,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.greenery ?? value;
          }
          if (errors.greenery?.hasError) {
            runValidationTasks("greenery", value);
          }
          setGreenery(value);
        }}
        onBlur={() => runValidationTasks("greenery", greenery)}
        errorMessage={errors.greenery?.errorMessage}
        hasError={errors.greenery?.hasError}
        {...getOverrideProps(overrides, "greenery")}
      ></TextField>
      <TextField
        label="Shading area"
        isRequired={false}
        isReadOnly={false}
        value={shading_area}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area: value,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.shading_area ?? value;
          }
          if (errors.shading_area?.hasError) {
            runValidationTasks("shading_area", value);
          }
          setShading_area(value);
        }}
        onBlur={() => runValidationTasks("shading_area", shading_area)}
        errorMessage={errors.shading_area?.errorMessage}
        hasError={errors.shading_area?.hasError}
        {...getOverrideProps(overrides, "shading_area")}
      ></TextField>
      <TextField
        label="Construction material"
        isRequired={false}
        isReadOnly={false}
        value={construction_material}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material: value,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.construction_material ?? value;
          }
          if (errors.construction_material?.hasError) {
            runValidationTasks("construction_material", value);
          }
          setConstruction_material(value);
        }}
        onBlur={() =>
          runValidationTasks("construction_material", construction_material)
        }
        errorMessage={errors.construction_material?.errorMessage}
        hasError={errors.construction_material?.hasError}
        {...getOverrideProps(overrides, "construction_material")}
      ></TextField>
      <TextField
        label="Imageability"
        isRequired={false}
        isReadOnly={false}
        value={imageability}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability: value,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.imageability ?? value;
          }
          if (errors.imageability?.hasError) {
            runValidationTasks("imageability", value);
          }
          setImageability(value);
        }}
        onBlur={() => runValidationTasks("imageability", imageability)}
        errorMessage={errors.imageability?.errorMessage}
        hasError={errors.imageability?.hasError}
        {...getOverrideProps(overrides, "imageability")}
      ></TextField>
      <TextField
        label="Enclosure"
        isRequired={false}
        isReadOnly={false}
        value={enclosure}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure: value,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.enclosure ?? value;
          }
          if (errors.enclosure?.hasError) {
            runValidationTasks("enclosure", value);
          }
          setEnclosure(value);
        }}
        onBlur={() => runValidationTasks("enclosure", enclosure)}
        errorMessage={errors.enclosure?.errorMessage}
        hasError={errors.enclosure?.hasError}
        {...getOverrideProps(overrides, "enclosure")}
      ></TextField>
      <TextField
        label="Human scale"
        isRequired={false}
        isReadOnly={false}
        value={human_scale}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale: value,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.human_scale ?? value;
          }
          if (errors.human_scale?.hasError) {
            runValidationTasks("human_scale", value);
          }
          setHuman_scale(value);
        }}
        onBlur={() => runValidationTasks("human_scale", human_scale)}
        errorMessage={errors.human_scale?.errorMessage}
        hasError={errors.human_scale?.hasError}
        {...getOverrideProps(overrides, "human_scale")}
      ></TextField>
      <TextField
        label="Transparency"
        isRequired={false}
        isReadOnly={false}
        value={transparency}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency: value,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.transparency ?? value;
          }
          if (errors.transparency?.hasError) {
            runValidationTasks("transparency", value);
          }
          setTransparency(value);
        }}
        onBlur={() => runValidationTasks("transparency", transparency)}
        errorMessage={errors.transparency?.errorMessage}
        hasError={errors.transparency?.hasError}
        {...getOverrideProps(overrides, "transparency")}
      ></TextField>
      <TextField
        label="Complexity"
        isRequired={false}
        isReadOnly={false}
        value={complexity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity: value,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.complexity ?? value;
          }
          if (errors.complexity?.hasError) {
            runValidationTasks("complexity", value);
          }
          setComplexity(value);
        }}
        onBlur={() => runValidationTasks("complexity", complexity)}
        errorMessage={errors.complexity?.errorMessage}
        hasError={errors.complexity?.hasError}
        {...getOverrideProps(overrides, "complexity")}
      ></TextField>
      <TextField
        label="Safe"
        isRequired={false}
        isReadOnly={false}
        value={safe}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe: value,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.safe ?? value;
          }
          if (errors.safe?.hasError) {
            runValidationTasks("safe", value);
          }
          setSafe(value);
        }}
        onBlur={() => runValidationTasks("safe", safe)}
        errorMessage={errors.safe?.errorMessage}
        hasError={errors.safe?.hasError}
        {...getOverrideProps(overrides, "safe")}
      ></TextField>
      <TextField
        label="Lively"
        isRequired={false}
        isReadOnly={false}
        value={lively}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively: value,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.lively ?? value;
          }
          if (errors.lively?.hasError) {
            runValidationTasks("lively", value);
          }
          setLively(value);
        }}
        onBlur={() => runValidationTasks("lively", lively)}
        errorMessage={errors.lively?.errorMessage}
        hasError={errors.lively?.hasError}
        {...getOverrideProps(overrides, "lively")}
      ></TextField>
      <TextField
        label="Beautiful"
        isRequired={false}
        isReadOnly={false}
        value={beautiful}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful: value,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.beautiful ?? value;
          }
          if (errors.beautiful?.hasError) {
            runValidationTasks("beautiful", value);
          }
          setBeautiful(value);
        }}
        onBlur={() => runValidationTasks("beautiful", beautiful)}
        errorMessage={errors.beautiful?.errorMessage}
        hasError={errors.beautiful?.hasError}
        {...getOverrideProps(overrides, "beautiful")}
      ></TextField>
      <TextField
        label="Wealthy"
        isRequired={false}
        isReadOnly={false}
        value={wealthy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy: value,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.wealthy ?? value;
          }
          if (errors.wealthy?.hasError) {
            runValidationTasks("wealthy", value);
          }
          setWealthy(value);
        }}
        onBlur={() => runValidationTasks("wealthy", wealthy)}
        errorMessage={errors.wealthy?.errorMessage}
        hasError={errors.wealthy?.hasError}
        {...getOverrideProps(overrides, "wealthy")}
      ></TextField>
      <TextField
        label="Boring"
        isRequired={false}
        isReadOnly={false}
        value={boring}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring: value,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.boring ?? value;
          }
          if (errors.boring?.hasError) {
            runValidationTasks("boring", value);
          }
          setBoring(value);
        }}
        onBlur={() => runValidationTasks("boring", boring)}
        errorMessage={errors.boring?.errorMessage}
        hasError={errors.boring?.hasError}
        {...getOverrideProps(overrides, "boring")}
      ></TextField>
      <TextField
        label="Depressing"
        isRequired={false}
        isReadOnly={false}
        value={depressing}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing: value,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.depressing ?? value;
          }
          if (errors.depressing?.hasError) {
            runValidationTasks("depressing", value);
          }
          setDepressing(value);
        }}
        onBlur={() => runValidationTasks("depressing", depressing)}
        errorMessage={errors.depressing?.errorMessage}
        hasError={errors.depressing?.hasError}
        {...getOverrideProps(overrides, "depressing")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking: values,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            values = result?.eating_drinking ?? values;
          }
          setEating_drinking(values);
          setCurrentEating_drinkingValue("");
        }}
        currentFieldValue={currentEating_drinkingValue}
        label={"Eating drinking"}
        items={eating_drinking}
        hasError={errors?.eating_drinking?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "eating_drinking",
            currentEating_drinkingValue
          )
        }
        errorMessage={errors?.eating_drinking?.errorMessage}
        setFieldValue={setCurrentEating_drinkingValue}
        inputFieldRef={eating_drinkingRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Eating drinking"
          isRequired={false}
          isReadOnly={false}
          value={currentEating_drinkingValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.eating_drinking?.hasError) {
              runValidationTasks("eating_drinking", value);
            }
            setCurrentEating_drinkingValue(value);
          }}
          onBlur={() =>
            runValidationTasks("eating_drinking", currentEating_drinkingValue)
          }
          errorMessage={errors.eating_drinking?.errorMessage}
          hasError={errors.eating_drinking?.hasError}
          ref={eating_drinkingRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "eating_drinking")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration: values,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            values = result?.nature_exploration ?? values;
          }
          setNature_exploration(values);
          setCurrentNature_explorationValue("");
        }}
        currentFieldValue={currentNature_explorationValue}
        label={"Nature exploration"}
        items={nature_exploration}
        hasError={errors?.nature_exploration?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "nature_exploration",
            currentNature_explorationValue
          )
        }
        errorMessage={errors?.nature_exploration?.errorMessage}
        setFieldValue={setCurrentNature_explorationValue}
        inputFieldRef={nature_explorationRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Nature exploration"
          isRequired={false}
          isReadOnly={false}
          value={currentNature_explorationValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.nature_exploration?.hasError) {
              runValidationTasks("nature_exploration", value);
            }
            setCurrentNature_explorationValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "nature_exploration",
              currentNature_explorationValue
            )
          }
          errorMessage={errors.nature_exploration?.errorMessage}
          hasError={errors.nature_exploration?.hasError}
          ref={nature_explorationRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "nature_exploration")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering: values,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            values = result?.community_gathering ?? values;
          }
          setCommunity_gathering(values);
          setCurrentCommunity_gatheringValue("");
        }}
        currentFieldValue={currentCommunity_gatheringValue}
        label={"Community gathering"}
        items={community_gathering}
        hasError={errors?.community_gathering?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "community_gathering",
            currentCommunity_gatheringValue
          )
        }
        errorMessage={errors?.community_gathering?.errorMessage}
        setFieldValue={setCurrentCommunity_gatheringValue}
        inputFieldRef={community_gatheringRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Community gathering"
          isRequired={false}
          isReadOnly={false}
          value={currentCommunity_gatheringValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.community_gathering?.hasError) {
              runValidationTasks("community_gathering", value);
            }
            setCurrentCommunity_gatheringValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "community_gathering",
              currentCommunity_gatheringValue
            )
          }
          errorMessage={errors.community_gathering?.errorMessage}
          hasError={errors.community_gathering?.hasError}
          ref={community_gatheringRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "community_gathering")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking: values,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            values = result?.citywalking ?? values;
          }
          setCitywalking(values);
          setCurrentCitywalkingValue("");
        }}
        currentFieldValue={currentCitywalkingValue}
        label={"Citywalking"}
        items={citywalking}
        hasError={errors?.citywalking?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("citywalking", currentCitywalkingValue)
        }
        errorMessage={errors?.citywalking?.errorMessage}
        setFieldValue={setCurrentCitywalkingValue}
        inputFieldRef={citywalkingRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Citywalking"
          isRequired={false}
          isReadOnly={false}
          value={currentCitywalkingValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.citywalking?.hasError) {
              runValidationTasks("citywalking", value);
            }
            setCurrentCitywalkingValue(value);
          }}
          onBlur={() =>
            runValidationTasks("citywalking", currentCitywalkingValue)
          }
          errorMessage={errors.citywalking?.errorMessage}
          hasError={errors.citywalking?.hasError}
          ref={citywalkingRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "citywalking")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing: values,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            values = result?.urban_sightseeing ?? values;
          }
          setUrban_sightseeing(values);
          setCurrentUrban_sightseeingValue("");
        }}
        currentFieldValue={currentUrban_sightseeingValue}
        label={"Urban sightseeing"}
        items={urban_sightseeing}
        hasError={errors?.urban_sightseeing?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "urban_sightseeing",
            currentUrban_sightseeingValue
          )
        }
        errorMessage={errors?.urban_sightseeing?.errorMessage}
        setFieldValue={setCurrentUrban_sightseeingValue}
        inputFieldRef={urban_sightseeingRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Urban sightseeing"
          isRequired={false}
          isReadOnly={false}
          value={currentUrban_sightseeingValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.urban_sightseeing?.hasError) {
              runValidationTasks("urban_sightseeing", value);
            }
            setCurrentUrban_sightseeingValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "urban_sightseeing",
              currentUrban_sightseeingValue
            )
          }
          errorMessage={errors.urban_sightseeing?.errorMessage}
          hasError={errors.urban_sightseeing?.hasError}
          ref={urban_sightseeingRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "urban_sightseeing")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception: values,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            values = result?.streetscape_perception ?? values;
          }
          setStreetscape_perception(values);
          setCurrentStreetscape_perceptionValue("");
        }}
        currentFieldValue={currentStreetscape_perceptionValue}
        label={"Streetscape perception"}
        items={streetscape_perception}
        hasError={errors?.streetscape_perception?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "streetscape_perception",
            currentStreetscape_perceptionValue
          )
        }
        errorMessage={errors?.streetscape_perception?.errorMessage}
        setFieldValue={setCurrentStreetscape_perceptionValue}
        inputFieldRef={streetscape_perceptionRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Streetscape perception"
          isRequired={false}
          isReadOnly={false}
          value={currentStreetscape_perceptionValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.streetscape_perception?.hasError) {
              runValidationTasks("streetscape_perception", value);
            }
            setCurrentStreetscape_perceptionValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "streetscape_perception",
              currentStreetscape_perceptionValue
            )
          }
          errorMessage={errors.streetscape_perception?.errorMessage}
          hasError={errors.streetscape_perception?.hasError}
          ref={streetscape_perceptionRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "streetscape_perception")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality: values,
              accessibility,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            values = result?.functionality ?? values;
          }
          setFunctionality(values);
          setCurrentFunctionalityValue("");
        }}
        currentFieldValue={currentFunctionalityValue}
        label={"Functionality"}
        items={functionality}
        hasError={errors?.functionality?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("functionality", currentFunctionalityValue)
        }
        errorMessage={errors?.functionality?.errorMessage}
        setFieldValue={setCurrentFunctionalityValue}
        inputFieldRef={functionalityRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Functionality"
          isRequired={false}
          isReadOnly={false}
          value={currentFunctionalityValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.functionality?.hasError) {
              runValidationTasks("functionality", value);
            }
            setCurrentFunctionalityValue(value);
          }}
          onBlur={() =>
            runValidationTasks("functionality", currentFunctionalityValue)
          }
          errorMessage={errors.functionality?.errorMessage}
          hasError={errors.functionality?.hasError}
          ref={functionalityRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "functionality")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility: values,
              contact_density,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            values = result?.accessibility ?? values;
          }
          setAccessibility(values);
          setCurrentAccessibilityValue("");
        }}
        currentFieldValue={currentAccessibilityValue}
        label={"Accessibility"}
        items={accessibility}
        hasError={errors?.accessibility?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("accessibility", currentAccessibilityValue)
        }
        errorMessage={errors?.accessibility?.errorMessage}
        setFieldValue={setCurrentAccessibilityValue}
        inputFieldRef={accessibilityRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Accessibility"
          isRequired={false}
          isReadOnly={false}
          value={currentAccessibilityValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.accessibility?.hasError) {
              runValidationTasks("accessibility", value);
            }
            setCurrentAccessibilityValue(value);
          }}
          onBlur={() =>
            runValidationTasks("accessibility", currentAccessibilityValue)
          }
          errorMessage={errors.accessibility?.errorMessage}
          hasError={errors.accessibility?.hasError}
          ref={accessibilityRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "accessibility")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density: values,
              email,
              nus_id,
            };
            const result = onChange(modelFields);
            values = result?.contact_density ?? values;
          }
          setContact_density(values);
          setCurrentContact_densityValue("");
        }}
        currentFieldValue={currentContact_densityValue}
        label={"Contact density"}
        items={contact_density}
        hasError={errors?.contact_density?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "contact_density",
            currentContact_densityValue
          )
        }
        errorMessage={errors?.contact_density?.errorMessage}
        setFieldValue={setCurrentContact_densityValue}
        inputFieldRef={contact_densityRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Contact density"
          isRequired={false}
          isReadOnly={false}
          value={currentContact_densityValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.contact_density?.hasError) {
              runValidationTasks("contact_density", value);
            }
            setCurrentContact_densityValue(value);
          }}
          onBlur={() =>
            runValidationTasks("contact_density", currentContact_densityValue)
          }
          errorMessage={errors.contact_density?.errorMessage}
          hasError={errors.contact_density?.hasError}
          ref={contact_densityRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "contact_density")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email: value,
              nus_id,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Nus id"
        isRequired={false}
        isReadOnly={false}
        value={nus_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comfort_1,
              comfort_2,
              comfort_3,
              comfort_4,
              comfort_5,
              comfort_6,
              thermal_comfort_1,
              thermal_comfort_2,
              thermal_comfort_3,
              thermal_comfort_4,
              thermal_comfort_5,
              thermal_comfort_6,
              temperature,
              sun_intensity,
              heat_sources,
              humidity,
              wind_velocity,
              traffic_flow,
              greenery,
              shading_area,
              construction_material,
              imageability,
              enclosure,
              human_scale,
              transparency,
              complexity,
              safe,
              lively,
              beautiful,
              wealthy,
              boring,
              depressing,
              eating_drinking,
              nature_exploration,
              community_gathering,
              citywalking,
              urban_sightseeing,
              streetscape_perception,
              functionality,
              accessibility,
              contact_density,
              email,
              nus_id: value,
            };
            const result = onChange(modelFields);
            value = result?.nus_id ?? value;
          }
          if (errors.nus_id?.hasError) {
            runValidationTasks("nus_id", value);
          }
          setNus_id(value);
        }}
        onBlur={() => runValidationTasks("nus_id", nus_id)}
        errorMessage={errors.nus_id?.errorMessage}
        hasError={errors.nus_id?.hasError}
        {...getOverrideProps(overrides, "nus_id")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || surveyResultModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || surveyResultModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
