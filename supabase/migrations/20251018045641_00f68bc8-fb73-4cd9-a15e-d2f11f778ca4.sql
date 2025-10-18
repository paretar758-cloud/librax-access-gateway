-- Create book_likes table
CREATE TABLE public.book_likes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  book_id UUID NOT NULL REFERENCES public.books(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, book_id)
);

-- Create book_comments table
CREATE TABLE public.book_comments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  book_id UUID NOT NULL REFERENCES public.books(id) ON DELETE CASCADE,
  comment_text TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.book_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.book_comments ENABLE ROW LEVEL SECURITY;

-- RLS Policies for book_likes
CREATE POLICY "Anyone can view likes"
ON public.book_likes
FOR SELECT
USING (true);

CREATE POLICY "Users can create their own likes"
ON public.book_likes
FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own likes"
ON public.book_likes
FOR DELETE
USING (auth.uid() = user_id);

-- RLS Policies for book_comments
CREATE POLICY "Anyone can view comments"
ON public.book_comments
FOR SELECT
USING (true);

CREATE POLICY "Users can create their own comments"
ON public.book_comments
FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own comments"
ON public.book_comments
FOR DELETE
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own comments"
ON public.book_comments
FOR UPDATE
USING (auth.uid() = user_id);