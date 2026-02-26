class CreateOmikujis < ActiveRecord::Migration[8.1]
  def change
    create_table :omikujis do |t|
      t.date :drawn_on
      t.string :fortune
      t.text :advice
      t.string :wish
      t.string :love
      t.string :visitor
      t.string :business
      t.string :travel
      t.string :study
      t.string :illness
      t.string :charm
      t.string :spot
      t.string :ally
      t.string :color
      t.string :curse
      t.string :void
      t.string :jinx

      t.timestamps
    end
  end
end
