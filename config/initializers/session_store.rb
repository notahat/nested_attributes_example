# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_nested_attributes_example_session',
  :secret      => '7b75c5836c52d02046186a835d42fef0fccc99d3775305d7b7d8863aa1d4f10c22f179933fa0b6148591524164144b84d26c9b5499ed75291d8bb00a81d28af0'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
