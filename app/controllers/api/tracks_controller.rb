class Api::TracksController < ApplicationController
  def playlist_tracks
    user = User.find(params[:user_id])
    playlist_id = params[:playlist_id]

    if user.access_token_expired?
      user.update_token
    end

    token = user.access_token
    header = { Authorization: "Bearer #{token}" }
    playlists_response = RestClient.get("https://api.spotify.com/v1/playlists/#{playlist_id}/tracks", header)
    playlists_params = JSON.parse(playlists_response.body)

    tracks = playlists_params['items']
    render json: tracks
  end

  def search
    s_tracks = RSpotify::Track.search(params[:query])
    @tracks = s_tracks.map do |s_track|
      Track.new_from_spotify_track(s_track)
    end
    render json: @tracks
  end

  def random
    s_tracks = RSpotify::Playlist.browse_featured.first.tracks
    @tracks = s_tracks.map do |s_track|
      Track.new_from_spotify_track(s_track)
    end
    render json: @tracks
  end

  def add
    user = User.find(params[:user_id])
    playlist_id = params[:playlist_id]

    if user.access_token_expired?
      user.update_token
    end

    token = user.access_token
    header = { Authorization: "Bearer #{token}" }
    uri = params[:uri]
    playlists_response = RestClient.post("https://api.spotify.com/v1/playlists/#{playlist_id}/tracks", uri, header)

    # return the new song

    render json: track
  end
end
