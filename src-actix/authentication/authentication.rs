pub mod access_tokens;
pub mod data;
pub mod management;
pub mod validation;

use anyhow::{bail, Result};
use log::*;

use crate::authentication::data::User;
use sqlx::{Executor, MySqlPool, Row};

pub async fn initialize_authentication(pool: &MySqlPool) -> Result<()> {
    info!("Initializing authentication database!");
    pool.execute(
        r#"
                CREATE TABLE IF NOT EXISTS users (
                    id INTEGER PRIMARY KEY AUTO_INCREMENT,
                    username TEXT NOT NULL UNIQUE,
                    password TEXT NOT NULL,
                    admin BOOLEAN NOT NULL,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
                    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
                    last_login DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
                );
                "#,
    )
    .await?;

    Ok(())
}

pub async fn get_user_by_username(pool: &MySqlPool, username: &str) -> Result<User> {
    let row = sqlx::query("SELECT * FROM users WHERE username = ? LIMIT 1")
        .bind(username)
        .fetch_optional(pool)
        .await?;

    let row = match row {
        Some(row) => row,
        None => {
            error!("User not found: {}", username);
            bail!("User not found");
        }
    };

    Ok(User {
        id: row.try_get::<i64, _>("id")?,
        username: row.try_get::<String, _>("username")?,
        password: row.try_get::<String, _>("password")?,
        admin: row.try_get::<bool, _>("admin")?,
        created_at: row.try_get::<String, _>("created_at")?,
        updated_at: row.try_get::<String, _>("updated_at")?,
        last_login: row.try_get::<String, _>("last_login")?,
    })
}
