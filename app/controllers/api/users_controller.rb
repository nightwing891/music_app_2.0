require 'rest-client'

class Api::UsersController < ApplicationController
  def spotify
    url = "https://accounts.spotify.com/authorize"
    query_params = {
      client_id: ENV['client_id'],
      response_type: 'code',
      redirect_uri: 'http://localhost:3000/auth/spotify/callback',
      scope: "user-library-read 
      playlist-read-collaborative
      playlist-modify-private
      user-modify-playback-state
      user-read-private
      user-top-read
      playlist-modify-public",
      show_dialog: true
    }

    render json: "#{url}?#{query_params.to_query}"
  end

  def create
    body = {
      grant_type: "authorization_code",
      code: params[:code],
      redirect_uri: 'http://localhost:3000/auth/spotify/callback',
      client_id:  ENV['client_id'],
      client_secret: ENV['client_secret']
    }

    auth_response = RestClient.post 'https://accounts.spotify.com/api/token', body
    auth_params = JSON.parse(auth_response.body)
    header = {
      Authorization: "Bearer #{auth_params["access_token"]}"
    }

    user_response = RestClient.get("https://api.spotify.com/v1/me", header)
    user_params = JSON.parse(user_response.body)

    @user = User.find_or_create_by(
      name: user_params["display_name"],
      spotify_url: user_params["external_urls"]["spotify"],
      href: user_params["href"],
      uri: user_params["uri"],
      spotify_id: user_params["id"]
    )

    if @user.access_token_expired?
      @user.refresh_access_token
    else
      @user.update(
        access_token: auth_params["access_token"], 
        refresh_token: auth_params["refresh_token"]
      )
    end
      
    render json: @user
  end
end
