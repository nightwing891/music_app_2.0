class PlaylistSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :spotify_id, :uri, :href
end