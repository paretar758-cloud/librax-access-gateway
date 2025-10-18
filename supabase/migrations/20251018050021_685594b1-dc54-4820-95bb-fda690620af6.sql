-- Drop the existing foreign key to auth.users
ALTER TABLE public.book_comments 
DROP CONSTRAINT book_comments_user_id_fkey;

-- Add foreign key to profiles table instead
ALTER TABLE public.book_comments
ADD CONSTRAINT book_comments_user_id_fkey 
FOREIGN KEY (user_id) REFERENCES public.profiles(id) ON DELETE CASCADE;