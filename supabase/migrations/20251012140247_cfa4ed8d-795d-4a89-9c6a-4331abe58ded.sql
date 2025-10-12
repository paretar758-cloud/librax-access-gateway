-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'student');

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE(user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Books table
CREATE TABLE public.books (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  cover_url TEXT,
  shelf_location TEXT NOT NULL,
  branch TEXT,
  skill TEXT,
  level TEXT,
  exam TEXT,
  tags TEXT[],
  total_copies INTEGER NOT NULL DEFAULT 1,
  available_copies INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.books ENABLE ROW LEVEL SECURITY;

-- Borrowed books table
CREATE TABLE public.borrowed_books (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  book_id UUID REFERENCES public.books(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  borrowed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  due_date TIMESTAMPTZ NOT NULL,
  returned_at TIMESTAMPTZ,
  penalty_amount DECIMAL(10,2) DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.borrowed_books ENABLE ROW LEVEL SECURITY;

-- Book requests table
CREATE TABLE public.book_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  book_title TEXT NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  request_count INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.book_requests ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view all profiles"
ON public.profiles FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Users can update own profile"
ON public.profiles FOR UPDATE
TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
ON public.profiles FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = id);

-- RLS Policies for user_roles
CREATE POLICY "Anyone can view roles"
ON public.user_roles FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Only admins can manage roles"
ON public.user_roles FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for books
CREATE POLICY "Anyone can view books"
ON public.books FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Only admins can manage books"
ON public.books FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for borrowed_books
CREATE POLICY "Students can view own borrowed books"
ON public.borrowed_books FOR SELECT
TO authenticated
USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage all borrowed books"
ON public.borrowed_books FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for book_requests
CREATE POLICY "Students can view own requests"
ON public.book_requests FOR SELECT
TO authenticated
USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Students can create requests"
ON public.book_requests FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can manage all requests"
ON public.book_requests FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Trigger to update updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at
BEFORE UPDATE ON public.profiles
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_books_updated_at
BEFORE UPDATE ON public.books
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_borrowed_books_updated_at
BEFORE UPDATE ON public.borrowed_books
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_book_requests_updated_at
BEFORE UPDATE ON public.book_requests
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Function to handle new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    NEW.email
  );
  
  -- Assign default student role
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'student');
  
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();