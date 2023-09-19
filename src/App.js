import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { DataStore } from '@aws-amplify/datastore';
import { SurveyResult } from './models';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { themeJson } from "./theme";
Amplify.configure(awsconfig);

const imageUrls = [
  "https://i.ibb.co/dKFNfQK/1.jpg",
  "https://i.ibb.co/qy4ZmZ1/2.jpg",
  "https://i.ibb.co/VBygFk3/3.jpg",
  "https://i.ibb.co/L5MvRhR/4.jpg",
  "https://i.ibb.co/wJYqjpc/5.jpg",
  "https://i.ibb.co/ygHBCmW/6.jpg",
  "https://i.ibb.co/n7bRCQ9/7.jpg",
  "https://i.ibb.co/Wx39yPv/8.jpg",
  "https://i.ibb.co/YXXLgJF/9.jpg",
  "https://i.ibb.co/pP71VH0/10.jpg",
  "https://i.ibb.co/HF7RSqh/11.jpg"
];

const imageChoicesMap = {};

// Generate a random, non-repeating subset of four image urls.
function getRandomTwoImages(questionName) {
  let images = [...imageUrls]; // Copy the array.
  let result = [];
  for (let i = 0; i < 2; i++) {
    
    const randomIndex = Math.floor(Math.random() * images.length);
    result.push({
      value: images[randomIndex], // Using the image URL as the value.
      imageLink: images[randomIndex]
    });
    images.splice(randomIndex, 1); // Remove the selected image from the array to avoid repetition.
  }
  imageChoicesMap[questionName] = result; // Store the two images for the given question name.
  return result;
}


const surveyJson = {
  "title": "Urban streetscape survey",
  "description": "Dear participants,This survey focuses on people's visual perception of street view scenes. Please answer the questions based on your feelings about the scenes in the images. There are 25 questions in this questionnaire. Thank you for your participation!",
  "logo": "https://api.surveyjs.io/private/Surveys/files?name=8fb3943d-2606-4486-88ad-a41ad27f4570",
  "logoPosition": "right",
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question1",
      "title": "How old are you?",
      "isRequired": true,
      "choices": [
       {
        "value": "<18",
        "text": "Under 18"
       },
       "19-24",
       "25-34",
       "35-44",
       "45-54",
       "55-64",
       {
        "value": ">65",
        "text": "65 and above"
       }
      ],
      "showNoneItem": true,
      "noneText": "Unwilling to answer"
     },
     {
      "type": "radiogroup",
      "name": "question2",
      "title": "What is your gender?",
      "isRequired": true,
      "choices": [
       "Female",
       "Male"
      ],
      "showOtherItem": true,
      "showNoneItem": true,
      "noneText": "Unwilling to answer"
     },
     {
      "type": "radiogroup",
      "name": "question3",
      "title": "What is your relationship with Singapore?",
      "isRequired": true,
      "choices": [
       {
        "value": "CR",
        "text": "Citizen or Resident"
       },
       {
        "value": "LV",
        "text": "Long-term Visitor (student, foreign worker, family member, etc)"
       },
       {
        "value": "SV",
        "text": "Short-term Visitor (traveler, etc)"
       }
      ],
      "showOtherItem": true,
      "showNoneItem": true,
      "noneText": "Unwilling to answer"
     },
     {
      "type": "radiogroup",
      "name": "question4",
      "title": "Your recent frequency of walking on streets (shopping, exercising, commuting, traveling, etc.) in a week is roughly",
      "isRequired": true,
      "choices": [
       {
        "value": "Item 1",
        "text": "Hardly travel by walking"
       },
       {
        "value": "Item 2",
        "text": "Once a week"
       },
       {
        "value": "Item 3",
        "text": "Once every two or three days"
       },
       {
        "value": "Item 4",
        "text": "Once a day"
       },
       {
        "value": "Item 5",
        "text": "Multiple times a day"
       }
      ],
      "showNoneItem": true,
      "noneText": "Unwilling to answer"
     }
    ],
    "title": "Basic Information",
    "description": "In this section, please answer some basic questions about yourself (age, gender, residential status, and walking behavior)."
   },
   {
    "name": "page2",
    "elements": [
     {
      "type": "imagepicker",
      "name": "question5",
      "title": "Which street view image do you believe exhibits the highest outdoor temperature?",
      "choices": getRandomTwoImages("question5")
     },
     {
      "type": "imagepicker",
      "name": "question6",
      "title": "Which street view image do you perceive as having the most comfortable outdoor temperature for you?",
      "choices": getRandomTwoImages("question6")
     },
     {
      "type": "imagepicker",
      "name": "question7",
      "title": "Which street view image do you think showcases the highest sunlight intensity?",
      "choices": getRandomTwoImages("question7")
     },
     {
      "type": "imagepicker",
      "name": "question8",
      "title": "Which street view image do you think showcases the highest traffic volume?",
      "choices": getRandomTwoImages("question8")
     },
     {
      "type": "imagepicker",
      "name": "question9",
      "title": "Which street view image do you think showcases the highest pedestrian activity?",
      "choices": getRandomTwoImages("question9")
     },
     {
      "type": "imagepicker",
      "name": "question10",
      "title": "Which street view image do you think showcases the highest abundance of greenery?",
      "choices": getRandomTwoImages("question10")
     },
     {
      "type": "imagepicker",
      "name": "question11",
      "title": "Which street view image do you think showcases the highest extent of shaded areas?",
      "choices": getRandomTwoImages("question11")
     }
    ],
    "title": "Part 1: Urban Heat Perception & Heat Source"
   },
   {
    "name": "page3",
    "elements": [
     {
      "type": "imagepicker",
      "name": "question12",
      "title": "Which street view image stands out to you as the most impressive place?",
      "choices": getRandomTwoImages("question12")
     },
     {
      "type": "imagepicker",
      "name": "question13",
      "title": "Which street view image stands out to you as the most enclosed space?",
      "choices": getRandomTwoImages("question13")
     },
     {
      "type": "imagepicker",
      "name": "question14",
      "title": "Which street view image stands out to you as the most accommodating for human scale?",
      "choices": getRandomTwoImages("question14")
     },
     {
      "type": "imagepicker",
      "name": "question15",
      "title": "Which street view image stands out to you as the most transparent space?",
      "choices": getRandomTwoImages("question15")
     },
     {
      "type": "imagepicker",
      "name": "question16",
      "title": "Which street view image stands out to you as the most complex environment?",
      "choices": getRandomTwoImages("question16")
     }
    ],
    "title": "Part 2: Impression on Streetscape"
   },
   {
    "name": "page4",
    "elements": [
     {
      "type": "imagepicker",
      "name": "question17",
      "title": "Which street view image do you feel evokes the most vibrant atmosphere?",
      "choices": getRandomTwoImages("question17")
     },
     {
      "type": "imagepicker",
      "name": "question18",
      "title": "Which street view image do you feel evokes the most beautiful atmosphere?",
      "choices": getRandomTwoImages("question18")
     },
     {
      "type": "imagepicker",
      "name": "question19",
      "title": "Which street view image do you feel evokes the most affluent atmosphere?",
      "choices": getRandomTwoImages("question19")
     },
     {
      "type": "imagepicker",
      "name": "question20",
      "title": "Which street view image do you feel evokes the most safe atmosphere?",
      "choices": getRandomTwoImages("question20")
     },
     {
      "type": "imagepicker",
      "name": "question21",
      "title": "Which street view image do you feel evokes the most interesting atmosphere?",
      "choices": getRandomTwoImages("question21")
     },
     {
      "type": "imagepicker",
      "name": "question22",
      "title": "Which street view image do you feel evokes the most monotonous atmosphere?",
      "choices": getRandomTwoImages("question22")
     },
     {
      "type": "imagepicker",
      "name": "question23",
      "title": "Which street view image do you feel evokes the most chaotic atmosphere?",
      "choices": getRandomTwoImages("question23")
     },
     {
      "type": "imagepicker",
      "name": "question24",
      "title": "Which street view image do you feel evokes the most depressing atmosphere?",
      "choices": getRandomTwoImages("question24")
     },
     {
      "type": "imagepicker",
      "name": "question25",
      "title": "Which street view image do you feel evokes the most annoying atmosphere?",
      "choices": getRandomTwoImages("question25")
     }
    ],
    "title": "Part 3: Emotion on Streetscape"
   }
  ]
 }

export default function App() {

  const model = new Model(surveyJson);
  model.applyTheme(themeJson)

  async function saveSurveyResult(data) {
    // Create a new SurveyResult entry using DataStore.
    await DataStore.save(
      new SurveyResult(data) 
    );
    console.log("Survey result saved:", data);
  }

  model.onComplete.add((survey, options) => {
    const data = {};
    for (let i = 1; i <= 25; i++) {
      const questionName = "question" + i;
      if (i >= 5) { 
        const selectedValue = survey.data[questionName];
        if (selectedValue) { 
          // Use the imageChoicesMap to get the unselected image.
          const unselectedImage = imageChoicesMap[questionName].find(choice => choice.value !== selectedValue).value;
          data[questionName] = selectedValue + ',' + unselectedImage;
        } else { 
          data[questionName] = "None";
        }
      } else {
        data[questionName] = survey.data[questionName] || "None"; 
      }
    }
    saveSurveyResult(data); 
  });
  
  return <Survey model={model} />;
}
