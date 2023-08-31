import React from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import { DataStore } from '@aws-amplify/datastore';
import { SurveyResult } from './models';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
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
    title: "Urban visual thermal comfort survey: A case study of Singapore",
    logo:
      "https://api.surveyjs.io/private/Surveys/files?name=8fb3943d-2606-4486-88ad-a41ad27f4570",
    logoPosition: "right",
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "imagepicker",
            name: "question1",
            choices: getRandomFourImages()
          }
        ]
      }
    ]
  };

  const model = new Survey.Model(surveyJson);

  async function saveSurveyResult(selectedImageUrl) {
    // Create a new SurveyResult entry using DataStore.
    await DataStore.save(
      new SurveyResult({
        "question1": selectedImageUrl
      })
    );
    console.log("Survey result saved:", selectedImageUrl);
  }

  // 在 model.onComplete.add 回调中调用 saveSurveyResult 函数
  model.onComplete.add((survey, options) => {
    const selectedImageUrl = survey.data.question1;
    saveSurveyResult(selectedImageUrl); // 在这里调用函数
  });

  return <Survey.Survey model={model} />;
}
