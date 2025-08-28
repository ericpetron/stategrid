-- States
create table states (
  id uuid primary key default gen_random_uuid(),
  name text unique not null,
  abbreviation text unique not null
);
-- Populate with states


-- Categories
create table categories (
  id uuid primary key default gen_random_uuid(),
  name text unique not null,
  description text
);

-- State Categories
create table state_categories (
  state_id uuid references states(id) on delete cascade,
  category_id uuid references categories(id) on delete cascade,
  primary key (state_id, category_id)
);


-- Puzzle
create table daily_puzzles (
  id uuid primary key default gen_random_uuid(),
  puzzle_date date unique not null,
  rows uuid[] not null,    -- array of category ids
  columns uuid[] not null  -- array of category ids
);

create table guesses (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id),
  puzzle_id uuid references daily_puzzles(id) on delete cascade,
  row_category uuid references categories(id),
  col_category uuid references categories(id),
  state_id uuid references states(id),
  correct boolean not null,
  created_at timestamp default now()
);
