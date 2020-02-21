class TrackSerializer < ActiveModel::Serializer
  attributes :id, :name, :artists, :spotify_id, :uri, :explicit, :duration_ms, :popularity, :album, :image
end
