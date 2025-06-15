// ⚠️ CRITICAL: YOU MUST REPLACE THIS WITH YOUR OWN DATA!
// The data below is just an EXAMPLE - replace with your own Supabase URL and image filenames

// 🔧 STEP 1: Replace with YOUR Supabase project URL
// Example format: https://YOUR-PROJECT-ID.supabase.co/storage/v1/object/public/street-images
const SUPABASE_STORAGE_URL = "https://hsblghbczhayitazlhsh.supabase.co/storage/v1/object/public/street-images";

// 🔧 STEP 2: Replace with YOUR actual uploaded image filenames
// Example filenames shown below - replace with your own image names
const imageFilenames = [
  "10188_103.828278905746_1.44319655784859.jpg",
  "10396_103.687376020797_1.32301216979197.jpg", 
  "10480_103.758699183904_1.31736295161644.jpg",
  "10588_103.97534255475_1.37690724605747.jpg",
  "11671_103.926255336454_1.361667093876.jpg",
  "11678_103.929033696236_1.36726328070099.jpg",
  "1169_103.947519225051_1.35667191963618.jpg",
  "1957_103.63244556433_1.32337975029413.jpg",
  "22758_103.679235704984_1.31254933504438.jpg"
  // 🚨 IMPORTANT: Replace ALL filenames above with YOUR own image names!
  // You need at least 10+ images for the survey to work properly
];

// 🔧 STEP 3: Automatically generate full URLs (no need to edit this part)
export const streetImages = imageFilenames.map(filename => `${SUPABASE_STORAGE_URL}//${filename}`);


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