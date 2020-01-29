class TrackSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :image, :preview, :spotify_id, :uri, :explicit, :duration_ms, :popularity, :album
end
