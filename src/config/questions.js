import { getRandomImages } from './streetImages.js';

// Demographic Questions (Optional - can be skipped)
export const demographicQuestions = [
  {
    name: "age",
    title: "What is your age group?",
    type: "radiogroup",
    choices: [
      "Under 18",
      "18-24", 
      "25-34",
      "35-44", 
      "45-54",
      "55-64",
      "65 or older"
    ],
    isRequired: false
  },
  {
    name: "location",
    title: "Where are you from? (City, Country)",
    type: "text",
    isRequired: false
  },
  {
    name: "income",
    title: "What is your household income level?",
    type: "radiogroup", 
    choices: [
      "Under $25,000",
      "$25,000 - $50,000",
      "$50,000 - $75,000", 
      "$75,000 - $100,000",
      "Over $100,000",
      "Prefer not to say"
    ],
    isRequired: false
  },
  {
    name: "education",
    title: "What is your highest level of education?",
    type: "radiogroup",
    choices: [
      "High school or less",
      "Some college",
      "Bachelor's degree", 
      "Master's degree",
      "Doctoral degree",
      "Other"
    ],
    isRequired: false
  },
  {
    name: "outdoor_activity",
    title: "How often do you engage in outdoor activities?",
    type: "radiogroup",
    choices: [
      "Daily",
      "Several times a week",
      "Once a week",
      "Several times a month", 
      "Rarely",
      "Never"
    ],
    isRequired: false
  }
];

// Main Survey Questions
export const surveyPages = [
  // Page 1: Demographic Questions
  {
    name: "demographics",
    title: "Part 1: Background Information (Optional)",
    description: "Please tell us a bit about yourself. All questions are optional and can be skipped.",
    elements: demographicQuestions
  },
  
  // Page 2: Street Perception Questions
  {
    name: "street_perception", 
    title: "Part 2: Street Perception",
    description: "Please evaluate different street environments based on various aspects.",
    elements: [
      {
        type: "expression",
        name: "perception_instruction",
        title: "In this section, you will see different sets of street images. Please select the image(s) that best match each question.",
        description: "Take your time to examine each image carefully."
      },
      
      // Question 1: Safety (2 choose 1)
      {
        type: "imagepicker",
        name: "safety_perception",
        title: "Safety Perception",
        description: "Which street environment do you perceive to be the SAFEST?",
        isRequired: true,
        choices: getRandomImages("safety_perception", 2),
        imageFit: "cover",
        multiSelect: false
      },
      
      // Question 2: Attractiveness (2 choose 1)  
      {
        type: "imagepicker",
        name: "attractiveness_perception",
        title: "Visual Attractiveness",
        description: "Which street environment do you find most VISUALLY ATTRACTIVE?",
        isRequired: true,
        choices: getRandomImages("attractiveness_perception", 2),
        imageFit: "cover",
        multiSelect: false
      },
      
      // Question 3: Walkability (2 choose 1)
      {
        type: "imagepicker", 
        name: "walkability_perception",
        title: "Walkability",
        description: "Which street environment would be most COMFORTABLE for walking?",
        isRequired: true,
        choices: getRandomImages("walkability_perception", 2),
        imageFit: "cover",
        multiSelect: false
      },
      
      // Question 4: Liveliness (4 choose 1)
      {
        type: "imagepicker",
        name: "liveliness_perception", 
        title: "Liveliness and Vitality",
        description: "Which street environment appears most LIVELY and full of activity?",
        isRequired: true,
        choices: getRandomImages("liveliness_perception", 4),
        imageFit: "cover",
        multiSelect: false
      },
      
      // Question 5: Relaxation (4 choose 1)
      {
        type: "imagepicker",
        name: "relaxation_perception",
        title: "Relaxation and Tranquility", 
        description: "Which street environment seems most RELAXING and peaceful?",
        isRequired: true,
        choices: getRandomImages("relaxation_perception", 4),
        imageFit: "cover",
        multiSelect: false
      },
      
      // Question 6: Cleanliness (4 choose 1)
      {
        type: "imagepicker",
        name: "cleanliness_perception",
        title: "Cleanliness and Maintenance", 
        description: "Which street environment appears most CLEAN and well-maintained?",
        isRequired: true,
        choices: getRandomImages("cleanliness_perception", 4),
        imageFit: "cover",
        multiSelect: false
      }
    ]
  },
  
  // Page 3: Likert Scale Rating
  {
    name: "comfort_rating",
    title: "Part 3: Comfort Rating", 
    description: "Please rate how comfortable you would feel in this street environment.",
    elements: [
      {
        type: "image",
        name: "comfort_image",
        imageLink: getRandomImages("comfort_rating", 1)[0]?.imageLink,
        imageFit: "cover",
        imageHeight: "300px",
        imageWidth: "100%"
      },
      {
        type: "radiogroup",
        name: "comfort_level",
        title: "How comfortable would you feel walking in this street?",
        isRequired: true,
        choices: [
          { value: 1, text: "Very Uncomfortable" },
          { value: 2, text: "Uncomfortable" },
          { value: 3, text: "Neutral" },
          { value: 4, text: "Comfortable" },
          { value: 5, text: "Very Comfortable" }
        ]
      }
    ]
  },
  
  // Page 4: Multiple Choice - Street Elements
  {
    name: "street_elements",
    title: "Part 4: Street Elements",
    description: "Identify the elements you notice in this street environment.",
    elements: [
      {
        type: "image", 
        name: "elements_image",
        imageLink: getRandomImages("street_elements", 1)[0]?.imageLink,
        imageFit: "cover",
        imageHeight: "300px",
        imageWidth: "100%"
      },
      {
        type: "checkbox",
        name: "visible_elements",
        title: "Which elements do you notice in this street? (Select all that apply)",
        isRequired: true,
        choices: [
          "Trees and vegetation",
          "Street furniture (benches, lights)",
          "Bicycle lanes", 
          "Pedestrian crossings",
          "Public art or decorations",
          "Commercial buildings",
          "Residential buildings",
          "Parking spaces",
          "Public transportation stops",
          "Outdoor dining areas"
        ]
      }
    ]
  },
  
  // Page 5: Ranking Question
  {
    name: "feature_ranking",
    title: "Part 5: Feature Importance Ranking",
    description: "Look at this street environment and rank the features by importance for creating a pleasant walking experience.",
    elements: [
      {
        type: "image", 
        name: "ranking_image",
        imageLink: getRandomImages("feature_ranking", 1)[0]?.imageLink,
        imageFit: "cover",
        imageHeight: "300px",
        imageWidth: "100%"
      },
      {
        type: "ranking",
        name: "street_features",
        title: "Based on the image above, drag to rank these features from most important (top) to least important (bottom):",
        isRequired: true,
        choices: [
          { value: "safety", text: "Safety and security" },
          { value: "greenery", text: "Trees and greenery" },
          { value: "walkability", text: "Wide sidewalks and walkability" },
          { value: "aesthetics", text: "Visual appeal and aesthetics" },
          { value: "amenities", text: "Street furniture and amenities" }
        ]
      }
    ]
  },
  
  // Page 6: Open Text Response
  {
    name: "open_feedback",
    title: "Part 6: Your Thoughts",
    description: "Finally, share your thoughts about what makes a great street environment.",
    elements: [
      {
        type: "image", 
        name: "feedback_image",
        imageLink: getRandomImages("open_feedback", 1)[0]?.imageLink,
        imageFit: "cover",
        imageHeight: "300px",
        imageWidth: "100%"
      },
      {
        type: "comment",
        name: "general_feedback", 
        title: "Looking at this street, what makes a street environment appealing to you? (Optional)",
        description: "Please share your thoughts about streetscape design, walkability, or any other aspects that matter to you.",
        isRequired: false,
        maxLength: 500
      }
    ]
  }
];

// Export the complete survey structure
export const surveyJson = {
  title: "Urban Streetscape Perception Survey",
  description: "This survey helps us understand how people perceive different street environments. Your responses will help improve urban design.",
  pages: surveyPages,
  showQuestionNumbers: "off",
  showProgressBar: "aboveheader", 
  progressBarType: "questions",
  autoGrowComment: true,
  showPreviewBeforeComplete: "showAllQuestions"
}; 