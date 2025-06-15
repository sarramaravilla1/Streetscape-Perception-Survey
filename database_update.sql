-- Database Update Script
-- Run this in Supabase SQL Editor if you already have an existing survey_responses table

-- Add new columns to existing survey_responses table
ALTER TABLE survey_responses 
ADD COLUMN IF NOT EXISTS displayed_images JSONB,
ADD COLUMN IF NOT EXISTS survey_metadata JSONB;

-- Verify the table structure
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'survey_responses' 
ORDER BY ordinal_position; 