Rails.application.routes.draw do

  namespace :api do
    resources :users
    resources :playlists
    resources :tracks
    get '/auth/spotify/callback' , to: 'users#spotify'
    post '/user', to: 'users#create'
  end
end