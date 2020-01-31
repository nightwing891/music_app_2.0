class Api::PlaylistsController < ApplicationController
  def fetch_playlists
  
    user = User.find(params[:id])

    if user.access_token_expired?
      user.update_token
    end

    token = user.access_token
    header = { Authorization: "Bearer #{token}" }
    playlists_response = RestClient.get("https://api.spotify.com/v1/me/playlists?limit=20", header)
    playlists_params = JSON.parse(playlists_response.body)
    
    playlists = playlists_params['items']
    
    playlists.each do |list|
      user_id = user.id
      spotify_id = list['id']
      
      newplaylist = Playlist.find_or_create_by(spotify_id: spotify_id)

      name = list['name']
      href = list['href']
      uri = list['uri']
      # image = list['image']

      newplaylist.update(user_id: user_id, name: name, href: href, uri: uri)
    end
    
    render json: playlists
  end

  def show
    user = User.find(params[:id])

    if user.access_token_expired?
      user.update_token
    end

    token = user.access_token
    header = { Authorization: "Bearer #{token}" }
    playlists_response = RestClient.get("https://api.spotify.com/v1/playlists/#{playlist_id}/tracks", header)
    playlists_params = JSON.parse(playlists_response.body)

    tracks = playlists_params['items']
  end
end
