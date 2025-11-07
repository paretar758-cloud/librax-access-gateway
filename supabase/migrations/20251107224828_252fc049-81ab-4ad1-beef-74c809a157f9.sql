-- Add current_year column to profiles table
ALTER TABLE public.profiles 
ADD COLUMN current_year text;