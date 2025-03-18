# Chill Lounge Database Schema

This document outlines the database schema for the Chill Lounge application, including all major entities, their attributes, and relationships.

## Database Technology Choices

The Chill Lounge application will use a hybrid database approach:

- **PostgreSQL**: For relational data with structured relationships
- **MongoDB**: For flexible schema data like messages and game states
- **Redis**: For caching, real-time presence, and pub/sub messaging

## Core Entities and Relationships

```
┌────────────────┐       ┌────────────────┐       ┌────────────────┐
│     Users      │       │    Lounges     │       │   Messages     │
├────────────────┤       ├────────────────┤       ├────────────────┤
│ id             │       │ id             │       │ id             │
│ username       │       │ name           │       │ content        │
│ email          │       │ description    │       │ timestamp      │
│ password_hash  │       │ owner_id       │◄──────┤ sender_id      │
│ avatar_url     │       │ created_at     │       │ lounge_id      │
│ status         │       │ is_private     │       │ parent_id      │
│ created_at     │       │ max_capacity   │       │ reactions      │
│ last_login     │       │ theme_id       │       │ is_pinned      │
└────────────────┘       │ current_music  │       │ attachments    │
        │                │ active_game    │       └────────────────┘
        │                └────────────────┘               ▲
        │                        │                        │
        │                        │                        │
        ▼                        ▼                        │
┌────────────────┐       ┌────────────────┐               │
│ UserProfiles   │       │ LoungeMembers  │───────────────┘
├────────────────┤       ├────────────────┤
│ user_id        │       │ lounge_id      │
│ display_name   │       │ user_id        │
│ bio            │       │ role           │
│ location       │       │ joined_at      │
│ preferences    │       │ last_active    │
│ theme          │       │ is_favorite    │
└────────────────┘       └────────────────┘
        │                        │
        │                        │
        ▼                        ▼
┌────────────────┐       ┌────────────────┐       ┌────────────────┐
│ Friendships    │       │ Playlists      │       │ Games          │
├────────────────┤       ├────────────────┤       ├────────────────┤
│ id             │       │ id             │       │ id             │
│ user_id        │       │ lounge_id      │       │ lounge_id      │
│ friend_id      │       │ name           │       │ type           │
│ status         │       │ created_by     │       │ started_at     │
│ created_at     │       │ is_collaborative│      │ ended_at       │
│ updated_at     │       │ created_at     │       │ state          │
└────────────────┘       └────────────────┘       │ participants   │
                                  │               │ winner_id      │
                                  │               └────────────────┘
                                  ▼                       │
                         ┌────────────────┐              │
                         │ PlaylistTracks │              │
                         ├────────────────┤              │
                         │ playlist_id    │              │
                         │ track_id       │              │
                         │ added_by       │              │
                         │ added_at       │              │
                         │ position       │              │
                         │ votes          │              │
                         └────────────────┘              │
                                  │                      │
                                  ▼                      ▼
                         ┌────────────────┐      ┌────────────────┐
                         │ Tracks         │      │ GameScores     │
                         ├────────────────┤      ├────────────────┤
                         │ id             │      │ game_id        │
                         │ title          │      │ user_id        │
                         │ artist         │      │ score          │
                         │ album          │      │ rank           │
                         │ duration       │      │ achievements   │
                         │ source         │      └────────────────┘
                         │ source_id      │
                         │ thumbnail_url  │
                         └────────────────┘
```

## PostgreSQL Schema (Relational Data)

### Users Table

```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    avatar_url VARCHAR(255),
    status VARCHAR(20) DEFAULT 'offline',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_login TIMESTAMP WITH TIME ZONE,
    is_verified BOOLEAN DEFAULT FALSE,
    is_admin BOOLEAN DEFAULT FALSE
);
```

### UserProfiles Table

```sql
CREATE TABLE user_profiles (
    user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    display_name VARCHAR(100),
    bio TEXT,
    location VARCHAR(100),
    preferences JSONB DEFAULT '{}',
    theme VARCHAR(50) DEFAULT 'dark',
    social_links JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Lounges Table

```sql
CREATE TABLE lounges (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    description TEXT,
    owner_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_private BOOLEAN DEFAULT FALSE,
    max_capacity INTEGER DEFAULT 50,
    theme_id VARCHAR(50) DEFAULT 'default',
    current_music JSONB DEFAULT NULL,
    active_game JSONB DEFAULT NULL,
    settings JSONB DEFAULT '{}'
);
```

### LoungeMembers Table

```sql
CREATE TABLE lounge_members (
    lounge_id UUID REFERENCES lounges(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    role VARCHAR(20) DEFAULT 'member',
    joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_active TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_favorite BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (lounge_id, user_id)
);
```

### Friendships Table

```sql
CREATE TABLE friendships (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    friend_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE (user_id, friend_id)
);
```

### Playlists Table

```sql
CREATE TABLE playlists (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lounge_id UUID REFERENCES lounges(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    created_by UUID REFERENCES users(id) ON DELETE SET NULL,
    is_collaborative BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Tracks Table

```sql
CREATE TABLE tracks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    artist VARCHAR(255) NOT NULL,
    album VARCHAR(255),
    duration INTEGER NOT NULL,
    source VARCHAR(50) NOT NULL,
    source_id VARCHAR(255) NOT NULL,
    thumbnail_url VARCHAR(255),
    UNIQUE (source, source_id)
);
```

### PlaylistTracks Table

```sql
CREATE TABLE playlist_tracks (
    playlist_id UUID REFERENCES playlists(id) ON DELETE CASCADE,
    track_id UUID REFERENCES tracks(id) ON DELETE CASCADE,
    added_by UUID REFERENCES users(id) ON DELETE SET NULL,
    added_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    position INTEGER NOT NULL,
    votes INTEGER DEFAULT 0,
    PRIMARY KEY (playlist_id, track_id)
);
```

### Games Table (metadata only, state stored in MongoDB)

```sql
CREATE TABLE games (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lounge_id UUID REFERENCES lounges(id) ON DELETE CASCADE,
    type VARCHAR(50) NOT NULL,
    started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    ended_at TIMESTAMP WITH TIME ZONE,
    winner_id UUID REFERENCES users(id) ON DELETE SET NULL
);
```

### GameScores Table

```sql
CREATE TABLE game_scores (
    game_id UUID REFERENCES games(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    score INTEGER NOT NULL DEFAULT 0,
    rank INTEGER,
    achievements JSONB DEFAULT '[]',
    PRIMARY KEY (game_id, user_id)
);
```

## MongoDB Collections (Flexible Schema Data)

### Messages Collection

```javascript
{
  _id: ObjectId,
  lounge_id: UUID,
  sender_id: UUID,
  content: String,
  timestamp: ISODate,
  parent_id: ObjectId, // For threaded replies
  reactions: [
    {
      emoji: String,
      user_ids: [UUID]
    }
  ],
  is_pinned: Boolean,
  attachments: [
    {
      type: String, // "image", "link", etc.
      url: String,
      thumbnail_url: String,
      metadata: Object
    }
  ],
  read_by: [UUID]
}
```

### GameStates Collection

```javascript
{
  _id: ObjectId,
  game_id: UUID,
  lounge_id: UUID,
  type: String, // "cards", "trivia", etc.
  current_state: Object, // Game-specific state
  history: [
    {
      action: String,
      user_id: UUID,
      timestamp: ISODate,
      data: Object
    }
  ],
  settings: Object,
  turn_user_id: UUID,
  updated_at: ISODate
}
```

### Notifications Collection

```javascript
{
  _id: ObjectId,
  user_id: UUID,
  type: String, // "friend_request", "lounge_invite", etc.
  content: String,
  related_to: {
    type: String, // "user", "lounge", "game", etc.
    id: UUID
  },
  is_read: Boolean,
  created_at: ISODate
}
```

## Redis Data Structures

### User Presence

Key: `user:presence:{user_id}`
Value: JSON string containing:

```javascript
{
  status: String, // "online", "away", "busy", "offline"
  lounge_id: UUID, // Current lounge, if any
  last_active: ISODate,
  device_info: Object
}
```

### Active Lounges

Key: `active:lounges`
Value: Sorted set of lounge IDs with member count as score

### User Sessions

Key: `user:sessions:{session_id}`
Value: JSON string containing user session data

### Chat Rate Limiting

Key: `ratelimit:chat:{user_id}`
Value: Counter with TTL

### Real-time Music State

Key: `lounge:music:{lounge_id}`
Value: JSON string containing:

```javascript
{
  track_id: UUID,
  position_ms: Number,
  is_playing: Boolean,
  dj_user_id: UUID,
  last_updated: ISODate,
  listeners: [UUID]
}
```

## Key Relationships and Constraints

1. Each user can create multiple lounges (one-to-many)
2. Users can join multiple lounges, and lounges can have multiple users (many-to-many)
3. Each lounge can have multiple playlists
4. Each playlist can have multiple tracks
5. Each lounge can have multiple games
6. Each game can have multiple participants with scores
7. Friendships are bidirectional relationships between users
8. Messages are associated with a specific lounge and sender

## Indexing Strategy

### PostgreSQL Indexes

- Users: email, username
- Lounges: owner_id, created_at
- LoungeMembers: lounge_id, user_id, (user_id, is_favorite)
- Friendships: user_id, friend_id, (user_id, status)
- Playlists: lounge_id, created_by
- PlaylistTracks: playlist_id, (playlist_id, position)
- Games: lounge_id, type, started_at

### MongoDB Indexes

- Messages: lounge_id, sender_id, timestamp
- GameStates: game_id, lounge_id, updated_at
- Notifications: user_id, created_at, (user_id, is_read)

## Data Access Patterns

### Common Queries

1. Get all lounges a user is a member of
2. Get all members of a specific lounge
3. Get all messages in a lounge, paginated and sorted by timestamp
4. Get a user's friend list with online status
5. Get current playlist for a lounge
6. Get active games in a lounge
7. Get user's notifications, filtered by read/unread status

### Write Patterns

1. Add a message to a lounge (high frequency)
2. Update user presence status (high frequency)
3. Update game state (medium-high frequency)
4. Create/update playlists and tracks (medium frequency)
5. Add/remove lounge members (low-medium frequency)
6. Create/delete lounges (low frequency)

## Migration and Versioning Strategy

- Use sequential migration files for schema changes
- Include up and down methods for reversibility
- Version database schema in application configuration
- Run migrations automatically during deployment
