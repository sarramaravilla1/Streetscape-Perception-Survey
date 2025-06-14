// Street view images configuration
// 🔧 STEP 1: Replace 'your-project' with your actual Supabase project reference
const SUPABASE_STORAGE_URL = "https://your-project.supabase.co/storage/v1/object/public/street-images";

// 🔧 STEP 2: Add your image filenames here (just the filename, not the full URL)
const imageFilenames = [
  "street_001.jpg",
  "street_002.jpg", 
  "street_003.jpg",
  "street_004.jpg",
  // Add more filenames here...
  // "your_image_name.jpg",
];

// 🔧 STEP 3: Automatically generate full URLs (no need to edit this part)
export const streetImages = imageFilenames.map(filename => `${SUPABASE_STORAGE_URL}/${filename}`);



// Function to get random images for questions
export function getRandomImages(questionName, count = 4) {
  let images = [...streetImages];
  let result = [];
  
  for (let i = 0; i < Math.min(count, images.length); i++) {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageUrl = typeof images[randomIndex] === 'string' 
      ? images[randomIndex] 
      : images[randomIndex].url;
    
    const imageName = imageUrl.split('/').pop();
    
    result.push({
      value: imageName,
      imageLink: imageUrl
    });
    
    images.splice(randomIndex, 1);
  }
  
  return result;
} 