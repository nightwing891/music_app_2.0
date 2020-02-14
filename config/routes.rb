Rails.application.routes.draw do

  namespace :api do
    resources :users
    resources :playlists
    resources :tracks
    get '/auth/spotify/callback', to: 'users#spotify'
    post '/user/playlists', to: 'playlists#fetch_playlists'
    post '/user', to: 'users#create'
    post '/playlist/tracks', to: 'tracks#playlist_tracks'
    post '/track/search', to: 'tracks#search'
  end
end
