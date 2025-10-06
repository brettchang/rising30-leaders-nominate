-- Remove "Deputy" from leader titles
UPDATE public.leaders 
SET title = 'Director of Policy - Financial Sector'
WHERE name = 'Matthew O''Connell';

UPDATE public.leaders 
SET title = 'Manager, Government Relations'
WHERE name = 'Alex Armanious';