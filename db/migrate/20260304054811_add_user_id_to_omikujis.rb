class AddUserIdToOmikujis < ActiveRecord::Migration[8.1]
  def change
    add_column :omikujis, :user_id, :integer
  end
end
