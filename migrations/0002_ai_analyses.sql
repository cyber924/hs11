PRAGMA foreign_keys=ON;

CREATE TABLE IF NOT EXISTS ai_analyses (
 id TEXT PRIMARY KEY,
 user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
 deal_id TEXT NOT NULL REFERENCES deals(id) ON DELETE CASCADE,
 model TEXT NOT NULL,
 analysis_text TEXT NOT NULL,
 report_json TEXT NOT NULL DEFAULT '{}',
 created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS ai_analyses_user_created
ON ai_analyses(user_id,created_at DESC);

CREATE INDEX IF NOT EXISTS ai_analyses_deal_created
ON ai_analyses(deal_id,created_at DESC);
