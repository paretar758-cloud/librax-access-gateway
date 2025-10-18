-- Add phone number and profile photo URL to profiles table
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS phone_number text,
ADD COLUMN IF NOT EXISTS profile_photo_url text;