-- Create leaders table
CREATE TABLE public.leaders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  image_url TEXT,
  category TEXT DEFAULT 'Public Affairs & Government Relations',
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leaders ENABLE ROW LEVEL SECURITY;

-- Create policy to allow everyone to read leaders (public showcase)
CREATE POLICY "Leaders are publicly readable" 
ON public.leaders 
FOR SELECT 
USING (true);

-- Create policy for authenticated users to manage leaders (admin functionality)
CREATE POLICY "Authenticated users can insert leaders" 
ON public.leaders 
FOR INSERT 
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update leaders" 
ON public.leaders 
FOR UPDATE 
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can delete leaders" 
ON public.leaders 
FOR DELETE 
TO authenticated
USING (true);

-- Create storage bucket for leader photos
INSERT INTO storage.buckets (id, name, public) 
VALUES ('leader-photos', 'leader-photos', true);

-- Create storage policies for leader photos
CREATE POLICY "Leader photos are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'leader-photos');

CREATE POLICY "Authenticated users can upload leader photos" 
ON storage.objects 
FOR INSERT 
TO authenticated
WITH CHECK (bucket_id = 'leader-photos');

CREATE POLICY "Authenticated users can update leader photos" 
ON storage.objects 
FOR UPDATE 
TO authenticated
USING (bucket_id = 'leader-photos');

CREATE POLICY "Authenticated users can delete leader photos" 
ON storage.objects 
FOR DELETE 
TO authenticated
USING (bucket_id = 'leader-photos');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_leaders_updated_at
BEFORE UPDATE ON public.leaders
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert current leaders data
INSERT INTO public.leaders (name, title, company, image_url, order_index) VALUES
('Michael Ciotti', 'Founder & Managing Partner', 'Outsider Capital', '/lovable-uploads/0614deca-3570-4999-8688-929b81ac3f07.png', 1),
('Sukant Sharma', 'Vice President, M&A and Capital Markets Advisory', 'Ernst & Young (EY)', '/lovable-uploads/43b04b5b-4ef4-4e57-9b23-7e47a54752f6.png', 2),
('Jordan Hill', 'Managing Director & Founder', 'Growth Partners', '/lovable-uploads/bb8b9c79-9aee-4402-97d9-2de36bbf8974.png', 3),
('Idriss Bouhmouch', 'Digital Partnerships Lead', 'National Bank of Canada', '/lovable-uploads/acc7899c-082c-4839-95e5-c9d8f3020c75.png', 4);