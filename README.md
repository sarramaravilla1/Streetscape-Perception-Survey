# Streetscape Perception Survey Platform

A simple and powerful platform for conducting streetscape perception surveys with image-based questions. Deploy in minutes with Supabase and Vercel.

## 🚀 Quick Deploy (5 minutes)

### Step 1: Set up Supabase Database (2 minutes)

1. **Create Account**: Go to [supabase.com](https://supabase.com) and create a free account
2. **Create Project**: Click "New Project" and create a project
3. **Setup Database**: Go to SQL Editor and run this script to create your database:

```sql
-- Create survey responses table
CREATE TABLE survey_responses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  participant_id TEXT,
  responses JSONB NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create images table for managing street view images
CREATE TABLE street_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  filename TEXT NOT NULL,
  url TEXT NOT NULL,
  description TEXT,
  category TEXT,
  active BOOLEAN DEFAULT true
);

-- Enable Row Level Security
ALTER TABLE survey_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE street_images ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (adjust as needed)
CREATE POLICY "Allow public insert" ON survey_responses FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public select" ON street_images FOR SELECT USING (active = true);
```

4. **Get API Keys**: Go to Settings → API Keys and Data API panels, and copy your:
   - Project URL
   - Anon public key
   
   **💾 Save these for later use - you'll need them in Step 3!**

### Step 2: Upload Your Street Images (1 minute)

1. **Create Storage**: In Supabase, go to Storage
2. **Create Bucket**: Create a new bucket called `street-images`, and make it a public bucket.
3. **Upload Images**: Upload your street view images to this bucket
4. **Get Folder Base URL**: Your images folder base URL is: `https://your-project.supabase.co/storage/v1/object/public/street-images/`
   
   Individual images will be: `https://your-project.supabase.co/storage/v1/object/public/street-images/filename.jpg`

   **💾 Save this folder base URL - you'll need it in Step 3!**

### Step 3: Configure Your Survey (1 minute)

1. **Clone and Install**:
```bash
git clone https://github.com/yourusername/streetscape-perception-survey.git
cd streetscape-perception-survey
./deploy.sh
```

2. **Add Credentials**: The script will create `.env.local` - edit it with your Supabase credentials:
```env
REACT_APP_SUPABASE_URL=https://your-project.supabase.co
REACT_APP_SUPABASE_ANON_KEY=your-anon-key
```

3. **Add Your Images**: Edit `src/config/streetImages.js` and replace with your image filenames:
```javascript
// Replace 'your-project' with your actual Supabase project reference
const SUPABASE_STORAGE_URL = "https://your-project.supabase.co/storage/v1/object/public/street-images";

export const streetImages = [
  `${SUPABASE_STORAGE_URL}/street_001.jpg`,
  `${SUPABASE_STORAGE_URL}/street_002.jpg`,
  `${SUPABASE_STORAGE_URL}/street_003.jpg`,
  `${SUPABASE_STORAGE_URL}/street_004.jpg`,
  // Add more images by just adding the filename...
  `${SUPABASE_STORAGE_URL}/your_image_name.jpg`,
];
```

**💡 Tip**: Just change the base URL once and add your image filenames!

**🚀 Quick way to get all filenames**: After uploading images to Supabase Storage, you can:
- In Supabase Storage, select all your images and copy the filenames
- Or use this command in your terminal to list all files: `ls your_images_folder/`
- Or in Supabase Storage interface, you can see all filenames in the file list

4. **Customize Survey** (optional):
   - Edit `src/config/surveyConfig.js` to change title, description, and lab information
   - Edit `src/config/questions.js` to modify questions

### Step 4: Deploy to Vercel (1 minute)

1. **Push to GitHub**: 
```bash
git add .
git commit -m "Initial setup"
git push origin main
```

2. **Deploy**: Go to [vercel.com](https://vercel.com) and sign up
3. **Import Project**: Click "New Project" and import your GitHub repository
4. **Add Environment Variables**: In Vercel project settings, add these environment variables:
   - Name: `REACT_APP_SUPABASE_URL`, Value: `https://your-project.supabase.co`
   - Name: `REACT_APP_SUPABASE_ANON_KEY`, Value: `your-anon-key-here`
5. **Deploy**: Click Deploy

**🎉 Your survey will be live at `https://your-project.vercel.app`**

## 📊 View Survey Results

1. Go to your Supabase dashboard
2. Navigate to Table Editor → survey_responses
3. View all responses in real-time
4. Export data as CSV for analysis

## 🎨 Customization Guide

### Survey Configuration

Edit `src/config/surveyConfig.js`:

```javascript
export const surveyConfig = {
  title: "Your Survey Title",
  description: "Your survey description...",
  logo: "https://your-supabase-url/storage/v1/object/public/street-images/lab-logo.jpg",
  labDescription: "Your lab description...",
  // ... other settings
};
```

### Question Types Available

1. **Image Selection (Multiple Choice)**
   - Participants choose one image from 4 random options
   - Perfect for "most comfortable", "safest", etc.

2. **Likert Scale Rating**
   - Rate images on a 1-5 scale
   - Good for intensity measurements

3. **Ranking Questions**
   - Drag and drop to rank options
   - Useful for priority ordering

4. **Multiple Choice & Checkboxes**
   - Select one or multiple options
   - Good for categorical data

5. **Text Input**
   - Open-ended responses
   - Demographic information

### Adding Your Images

1. Upload images to Supabase Storage
2. Edit `src/config/streetImages.js`:

```javascript
export const streetImages = [
  {
    id: "street_001",
    url: "https://your-supabase-url/storage/v1/object/public/street-images/street_001.jpg",
    description: "Urban street with mixed-use buildings",
    category: "urban"
  },
  // Add more images...
];
```

### Demographic Questions

The survey includes optional demographic questions in `src/config/questions.js`:

- Age group
- Location (city, country)
- Income level
- Education level
- Outdoor activity frequency

All demographic questions are **optional** and can be skipped by participants.

### Sample Survey Structure

The default survey includes:

1. **Background Information** (Optional)
   - Demographic questions that can be skipped

2. **Safety Perception**
   - Choose the safest street from 4 random images

3. **Comfort Rating**
   - Rate comfort level on a 1-5 scale for a single image

4. **Street Elements**
   - Identify visible elements in a street image (checkboxes)

5. **Feature Ranking**
   - Rank street features by importance (drag & drop)

6. **Open Feedback**
   - Optional text input for additional thoughts

## 🔧 Advanced Configuration

### Custom Styling

Edit `src/styles/globals.css` to match your brand:
- Colors
- Fonts
- Layout spacing
- Component styling

### Question Logic

Add conditional logic in `src/config/questions.js`:

```javascript
{
  name: "follow_up",
  title: "Follow-up question",
  type: "text",
  visibleIf: "{previous_question} = 'specific_answer'"
}
```

### Data Export

Access your data via Supabase API or dashboard:
- Real-time responses
- CSV export
- JSON format
- Direct database queries

## 📱 Mobile Responsive

The survey automatically adapts to:
- Desktop computers
- Tablets
- Mobile phones
- Different screen orientations

## 🔒 Privacy & Security

- No personal data stored by default
- Supabase handles data security
- GDPR compliant
- Optional participant anonymization

## 🆘 Troubleshooting

### Images not loading?
- Check Supabase storage bucket is public
- Verify image URLs are correct
- Ensure images are in supported formats (JPG, PNG, WebP)

### Survey not saving responses?
- Check Supabase connection
- Verify environment variables in `.env.local`
- Check browser console for errors

### Deployment issues?
- Ensure all environment variables are set in Vercel
- Check build logs for errors
- Verify GitHub repository is connected

### Local development
```bash
npm install
npm start
```

## 📈 Analytics

Track survey performance:
- Response rates
- Completion times
- Drop-off points
- Device/browser statistics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - feel free to use for research and commercial projects.

## 📞 Support

- GitHub Issues: Report bugs and request features
- All configuration is in the `src/config/` folder
- Check console logs for debugging information

---

**That's it! Your streetscape perception survey is ready to collect responses! 🎉**

---

*Last updated: $(date)* 