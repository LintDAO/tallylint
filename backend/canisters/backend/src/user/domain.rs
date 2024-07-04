use candid::{CandidType, Principal};
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, CandidType, Serialize, Deserialize)]
pub struct UserProfile {
  pub owner: Principal, // 用户 Principal
  pub name: String,
  pub create_time: u64,
}

#[derive(Debug, Clone, CandidType, Serialize, Deserialize)]
pub struct UserConfig {
  pub tax_method: String,
  pub base_currency: String,
  pub time_zone: String,
}
#[derive(Debug, Clone, CandidType, Serialize, Deserialize)]
pub struct UserInfo {
  pub owner: Principal, // 用户 Principal
  pub name: String,
  pub create_time: u64,
}

impl UserProfile {
  #[allow(dead_code)]
  pub fn new(owner: Principal, name: String, created_at: u64) -> Self {
    Self {
      owner,
      name,
      create_time: created_at,
    }
  }
}

impl UserConfig {
  pub fn new(tax_method: String,base_currency:String,time_zone:String) -> UserConfig {
    UserConfig{
        tax_method,
        base_currency,
        time_zone,
    }
  }
}
