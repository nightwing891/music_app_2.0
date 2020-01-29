class CreateTracks < ActiveRecord::Migration[6.0]
  def change
    create_table :tracks do |t|
      t.string :name
      t.string :uri
      t.string :spotify_id
      t.boolean :explicit
      t.integer :duration_ms
      t.integer :popularity
      t.string :artists
      t.string :album
      t.belongs_to :playlist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
