#[path = "authentication/authentication.rs"]
mod authentication;
mod authentication_endpoint;
mod constants;

use crate::constants::{initialize_asset_directories, DEBUG, PORT};
use actix_web::web::service;
use actix_web::{
    dev::Service as _, error, http::header, middleware, web, App, HttpResponse, HttpServer,
    Responder,
};
use serde_json::json;

use anyhow::Result;
use database_common_lib::actix_extension::create_http_server;
use database_common_lib::database_connection::{create_pool, DatabaseConnectionData};
use log::info;
use vite_actix::start_vite_server;

#[actix_web::main]
async fn main() -> Result<()> {
    std::env::set_var("RUST_LOG", "actix_web=info");
    env_logger::init();
    initialize_asset_directories()?;

    // Initialize Authentication database.
    let database_connection = DatabaseConnectionData::get().await?;
    let pool = create_pool(&database_connection).await?;
    authentication::initialize_authentication(&pool).await?;

    let server = create_http_server(
        |cfg| cfg.service(web::scope("api").configure(authentication_endpoint::configure)),
        PORT,
    )?;

    info!(
        "Starting {} server at http://127.0.0.1:{}",
        if DEBUG { "development" } else { "production" },
        PORT
    );

    // Start the Vite server in development mode
    if DEBUG {
        start_vite_server().expect("Failed to start vite server");
    }

    Ok(server.await?)
}
