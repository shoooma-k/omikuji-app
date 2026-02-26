# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.1].define(version: 2026_02_26_150935) do
  create_table "omikujis", force: :cascade do |t|
    t.text "advice"
    t.string "ally"
    t.string "business"
    t.string "charm"
    t.string "color"
    t.datetime "created_at", null: false
    t.string "curse"
    t.date "drawn_on"
    t.string "fortune"
    t.string "illness"
    t.string "jinx"
    t.string "love"
    t.string "spot"
    t.string "study"
    t.string "travel"
    t.datetime "updated_at", null: false
    t.string "visitor"
    t.string "void"
    t.string "wish"
  end
end
