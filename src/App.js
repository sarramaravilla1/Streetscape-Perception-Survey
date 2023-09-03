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

// Generate a random, non-repeating subset of four image urls.
function getRandomFourImages() {
  let images = [...imageUrls]; // Copy the array.
  let result = [];
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * images.length);
    result.push({
      value: images[randomIndex], // Using the image URL as the value.
      imageLink: images[randomIndex]
    });
    images.splice(randomIndex, 1); // Remove the selected image from the array to avoid repetition.
  }
  return result;
}

export default function App() {

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
        "choices": getRandomFourImages()
       },
       {
        "type": "imagepicker",
        "name": "question6",
        "title": "Which street view image do you perceive as having the most comfortable outdoor temperature for you?",
        "choices": getRandomFourImages()
       },
       {
        "type": "imagepicker",
        "name": "question7",
        "title": "Which street view image do you think showcases the highest sunlight intensity?",
        "choices": getRandomFourImages()
       },
       {
        "type": "imagepicker",
        "name": "question8",
        "title": "Which street view image do you think showcases the highest traffic volume?",
        "choices": getRandomFourImages()
       },
       {
        "type": "imagepicker",
        "name": "question9",
        "title": "Which street view image do you think showcases the highest pedestrian activity?",
        "choices": getRandomFourImages()
       },
       {
        "type": "imagepicker",
        "name": "question10",
        "title": "Which street view image do you think showcases the highest abundance of greenery?",
        "choices": getRandomFourImages()
       },
       {
        "type": "imagepicker",
        "name": "question11",
        "title": "Which street view image do you think showcases the highest extent of shaded areas?",
        "choices": getRandomFourImages()
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
        "choices": getRandomFourImages()
       },
       {
        "type": "imagepicker",
        "name": "question13",
        "title": "Which street view image stands out to you as the most enclosed space?",
        "choices": getRandomFourImages()
       },
       {
        "type": "imagepicker",
        "name": "question14",
        "title": "Which street view image stands out to you as the most accommodating for human scale?",
        "choices": getRandomFourImages()
       },
       {
        "type": "imagepicker",
        "name": "question15",
        "title": "Which street view image stands out to you as the most transparent space?",
        "choices": getRandomFourImages()
       },
       {
        "type": "imagepicker",
        "name": "question16",
        "title": "Which street view image stands out to you as the most complex environment?",
        "choices": getRandomFourImages()
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
        "choices": getRandomFourImages()
       },
       {
        "type": "imagepicker",
        "name": "question18",
        "title": "Which street view image do you feel evokes the most beautiful atmosphere?",
        "choices": getRandomFourImages()
       },
       {
        "type": "imagepicker",
        "name": "question19",
        "title": "Which street view image do you feel evokes the most affluent atmosphere?",
        "choices": getRandomFourImages()
       },
       {
        "type": "imagepicker",
        "name": "question20",
        "title": "Which street view image do you feel evokes the most safe atmosphere?",
        "choices": getRandomFourImages()
       },
       {
        "type": "imagepicker",
        "name": "question21",
        "title": "Which street view image do you feel evokes the most interesting atmosphere?",
        "choices": getRandomFourImages()
       },
       {
        "type": "imagepicker",
        "name": "question22",
        "title": "Which street view image do you feel evokes the most monotonous atmosphere?",
        "choices": getRandomFourImages()
       },
       {
        "type": "imagepicker",
        "name": "question23",
        "title": "Which street view image do you feel evokes the most chaotic atmosphere?",
        "choices": getRandomFourImages()
       },
       {
        "type": "imagepicker",
        "name": "question24",
        "title": "Which street view image do you feel evokes the most depressing atmosphere?",
        "choices": getRandomFourImages()
       },
       {
        "type": "imagepicker",
        "name": "question25",
        "title": "Which street view image do you feel evokes the most annoying atmosphere?",
        "choices": getRandomFourImages()
       }
      ],
      "title": "Part 3: Emotion on Streetscape"
     }
    ]
   }

  const model = new Model(surveyJson);
  model.applyTheme(themeJson)

  async function saveSurveyResult(data) {
    // Create a new SurveyResult entry using DataStore.
    await DataStore.save(
      new SurveyResult(data) 
    );
    console.log("Survey result saved:", data);
  }

  // 在 model.onComplete.add 回调中调用 saveSurveyResult 函数
  model.onComplete.add((survey, options) => {
    const data = {}
    for (let i = 1; i <= 26; i++) {
      const questionName = "question" + i;
      data[questionName] = survey.data[questionName];
    }
    saveSurveyResult(data); // 在这里调用函数
  });

  return <Survey model={model} />;
}
