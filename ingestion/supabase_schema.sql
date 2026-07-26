-- ============================================================================
-- Schema pgvector para o Agente OAZ (rodar uma vez no projeto Supabase).
-- Dimensão 768 = Gemini text-embedding-004. Ajuste se trocar o modelo.
-- ============================================================================
create extension if not exists vector;

create table if not exists artigos (
  id           bigserial primary key,
  external_id  text unique not null,
  titulo       text not null,
  categoria    text,
  url          text,
  conteudo     text not null,
  embedding    vector(768),
  updated_at   timestamptz default now()
);

-- índice de similaridade (cosine) para busca rápida
create index if not exists artigos_embedding_idx
  on artigos using ivfflat (embedding vector_cosine_ops) with (lists = 100);

-- função de busca usada pelo backend (rag.py -> _retrieve_supabase)
create or replace function match_artigos(
  query_embedding vector(768),
  match_count int default 4,
  min_similarity float default 0.25
)
returns table (
  titulo text,
  categoria text,
  url text,
  conteudo text,
  score float
)
language sql stable
as $$
  select
    a.titulo,
    a.categoria,
    a.url,
    a.conteudo,
    1 - (a.embedding <=> query_embedding) as score
  from artigos a
  where 1 - (a.embedding <=> query_embedding) >= min_similarity
  order by a.embedding <=> query_embedding
  limit match_count;
$$;
